'use strict';

// Analysis is precomputed. Browser filters and display choices never recalculate intersections.
const COLORS = {'English Public':'#1764ae','English Catholic':'#b54a20','French Public':'#087967','French Catholic':'#713fac'};
const $ = id => document.getElementById(id);
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const state = {system:'English Public',query:'',view:'full',selected:null,boards:null,overlaps:null,treaty:null,map:null,ready:false,popup:null};
const number = new Intl.NumberFormat('en-CA',{maximumFractionDigits:0});

function bounds(geojson) {
  let west=Infinity,south=Infinity,east=-Infinity,north=-Infinity;
  function visit(coords) {
    if(typeof coords[0]==='number') { west=Math.min(west,coords[0]);east=Math.max(east,coords[0]);south=Math.min(south,coords[1]);north=Math.max(north,coords[1]); }
    else coords.forEach(visit);
  }
  const features=geojson.type==='FeatureCollection'?geojson.features:[geojson];
  features.forEach(f=>visit(f.geometry.coordinates));
  return [[west,south],[east,north]];
}
function showStatus(message,error=false) { $('map-status').hidden=false;$('map-status').textContent=message;$('map-status').classList.toggle('error',error); }
function currentBoards() {
  if(!state.boards) return [];
  const query=state.query.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  return state.boards.features.filter(f=>(state.system==='all'||f.properties.system===state.system)&&f.properties.BOARD_NAME.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().includes(query));
}
function metricText(p) { return `${Number(p.pct_board_in_williams).toFixed(1)}% of board area overlaps`; }
function renderList() {
  const boards=currentBoards().sort((a,b)=>a.properties.BOARD_NAME.localeCompare(b.properties.BOARD_NAME,'en'));
  $('board-list').replaceChildren();
  $('result-count').textContent=`${boards.length} of ${state.boards.features.length} boards`;
  if(!boards.length) {const li=document.createElement('li');li.className='empty';li.textContent='No matching boards in this system. Try another name or choose All four systems.';$('board-list').append(li);}
  for(const feature of boards) {
    const p=feature.properties,li=document.createElement('li'),button=document.createElement('button');
    button.type='button';button.className='board-button';button.dataset.board=p.BOARD_NUM;button.setAttribute('aria-pressed',String(state.selected===p.BOARD_NUM));
    const name=document.createElement('span');name.textContent=p.BOARD_NAME;
    const detail=document.createElement('small');detail.textContent=state.system==='all'?`${p.system} · ${metricText(p)}`:metricText(p);
    button.append(name,detail);
    if(p.review_flag==='EDGE CHECK') {const badge=document.createElement('span');badge.className='review-badge';badge.textContent='Boundary review flagged';button.append(badge);}
    button.addEventListener('click',()=>selectBoard(p.BOARD_NUM,true));li.append(button);$('board-list').append(li);
  }
}
function selectBoard(id,zoom=false) {
  const feature=state.boards?.features.find(f=>f.properties.BOARD_NUM===id);
  if(!feature) return;
  state.selected=id;
  const p=feature.properties;
  $('selected-name').textContent=p.BOARD_NAME;$('selected-system').textContent=`${p.system} · ${p.BOARD_NUM}`;
  $('selected-area').textContent=`${number.format(p.intersection_km2)} km²`;
  $('selected-percent').textContent=`${Number(p.pct_board_in_williams).toFixed(1)}%`;
  $('selected-note').textContent=p.review_flag==='EDGE CHECK'?'Boundary review flagged: confirm this mapped overlap against the source boundaries.':'Figures are approximate and refer to the board service area, not individual schools.';
  $('selection').hidden=false;
  document.querySelectorAll('.board-button').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.board===id)));
  updateMap();
  if(zoom&&state.ready) {const overlap=state.overlaps.features.find(f=>f.id===id);fit(overlap||feature);}
  if(state.popup) {state.popup.remove();state.popup=null;}
}
function clearSelection() {
  state.selected=null;$('selection').hidden=true;
  document.querySelectorAll('.board-button').forEach(button=>button.setAttribute('aria-pressed','false'));
  updateMap();
}
function fit(feature) {state.map?.fitBounds(bounds(feature),{padding:window.innerWidth<=720?60:85,maxZoom:10,duration:reducedMotion?0:650});}
function updateMap() {
  if(!state.ready) return;
  const ids=currentBoards().map(f=>f.properties.BOARD_NUM);
  const filter=['in',['get','BOARD_NUM'],['literal',ids]];
  for(const view of ['full','clipped']) {
    for(const suffix of ['fill','line','review']) {
      const layer=`${view}-${suffix}`;
      state.map.setFilter(layer,suffix==='review'?['all',filter,['==',['get','review_flag'],'EDGE CHECK']]:filter);
      state.map.setLayoutProperty(layer,'visibility',state.view===view?'visible':'none');
    }
    state.map.setFilter(`${view}-selected`,['==',['get','BOARD_NUM'],state.selected||'']);
    state.map.setLayoutProperty(`${view}-selected`,'visibility',state.view===view?'visible':'none');
  }
}
function filterChanged() {
  if(state.selected&&!currentBoards().some(f=>f.properties.BOARD_NUM===state.selected)) clearSelection();
  state.popup?.remove();state.popup=null;renderList();updateMap();
}
function initializeMap() {
  if(!window.maplibregl) {showStatus('The map library could not load. The board list and CSV are available; reload the page to try the map again.',true);return;}
  try {
    state.map=new maplibregl.Map({container:'map',style:{version:8,sources:{basemap:{type:'raster',tiles:['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],tileSize:256,maxzoom:19,attribution:'© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors'}},layers:[{id:'background',type:'background',paint:{'background-color':'#e9f1f7'}},{id:'basemap',type:'raster',source:'basemap',paint:{'raster-saturation':-.85,'raster-opacity':.75}}]},center:[-78.4,44.8],zoom:7,renderWorldCopies:false,attributionControl:false});
    state.map.addControl(new maplibregl.NavigationControl({showCompass:true}),'top-right');
    state.map.addControl(new maplibregl.ScaleControl({unit:'metric'}),'bottom-right');
    state.map.addControl(new maplibregl.AttributionControl({compact:false}),'bottom-right');
    state.map.on('load',()=>{
      state.map.addSource('boards',{type:'geojson',data:state.boards});
      state.map.addSource('overlaps',{type:'geojson',data:state.overlaps});
      state.map.addSource('treaty',{type:'geojson',data:state.treaty});
      state.map.addLayer({id:'treaty-fill',type:'fill',source:'treaty',paint:{'fill-color':'#843da5','fill-opacity':.07}});
      const color=['match',['get','system'],...Object.entries(COLORS).flat(),'#1764ae'];
      for(const view of ['full','clipped']) {
        const source=view==='full'?'boards':'overlaps';
        state.map.addLayer({id:`${view}-fill`,type:'fill',source,paint:{'fill-color':color,'fill-opacity':['case',['==',['get','BOARD_NUM'],state.selected||''],.24,.11]}});
        state.map.addLayer({id:`${view}-line`,type:'line',source,paint:{'line-color':color,'line-width':1.5,'line-opacity':.8}});
        state.map.addLayer({id:`${view}-review`,type:'line',source,paint:{'line-color':'#a75a05','line-width':2.5,'line-dasharray':[2,2]}});
        state.map.addLayer({id:`${view}-selected`,type:'line',source,paint:{'line-color':'#102c47','line-width':4}});
      }
      state.map.addLayer({id:'treaty-outline',type:'line',source:'treaty',paint:{'line-color':'#843da5','line-width':3,'line-dasharray':[3,1.5]}});
      state.ready=true;updateMap();fit(state.treaty);
      for(const layer of ['treaty-fill','treaty-outline']) state.map.setLayoutProperty(layer,'visibility',$('show-treaty').checked?'visible':'none');
      $('map-status').hidden=true;
      state.map.on('click',event=>{
        const hits=state.map.queryRenderedFeatures(event.point,{layers:[`${state.view}-fill`]});
        const ids=[...new Set(hits.map(f=>f.properties.BOARD_NUM))];
        if(!ids.length) return;
        if(ids.length===1) {selectBoard(ids[0]);return;}
        const container=document.createElement('div'),heading=document.createElement('p');heading.className='popup-title';heading.textContent=`${ids.length} board areas at this location`;container.append(heading);
        for(const id of ids) {
          const p=state.boards.features.find(f=>f.id===id).properties,button=document.createElement('button');
          button.type='button';button.className='popup-board';button.textContent=`${p.BOARD_NAME} (${p.system})`;button.addEventListener('click',()=>selectBoard(id));container.append(button);
        }
        state.popup?.remove();state.popup=new maplibregl.Popup({maxWidth:'330px'}).setLngLat(event.lngLat).setDOMContent(container).addTo(state.map);
      });
      state.map.on('mousemove',event=>{state.map.getCanvas().style.cursor=state.map.queryRenderedFeatures(event.point,{layers:[`${state.view}-fill`]}).length?'pointer':'';});
    });
    state.map.on('error',event=>{
      if(event.error?.message?.includes('tile.openstreetmap.org')) showStatus('The background map could not load. Board boundaries and the board list remain available.',true);
      else showStatus('Some map content could not load. Use the board list or reload the page to try again.',true);
    });
    state.map.getCanvas().addEventListener('webglcontextlost',()=>showStatus('Map graphics are unavailable. Use the board list or reload the page.',true));
  } catch(error) {showStatus('This browser could not start the interactive map. Use the school board list and CSV, or try another browser.',true);}
}
async function loadJSON(path) {
  const response=await fetch(path);
  if(!response.ok) throw new Error(`Could not load ${path} (${response.status})`);
  const data=await response.json();
  if(data.type!=='FeatureCollection'||!Array.isArray(data.features)) throw new Error(`Invalid GeoJSON: ${path}`);
  return data;
}
async function boot() {
  try {
    const [boards,overlaps,treaty]=await Promise.all(['boards','overlaps','treaty'].map(name=>loadJSON(`./data/${name}.geojson?v=20261004`)));
    if(!boards.features.length||!treaty.features.length) throw new Error('Map data is empty');
    state.boards=boards;state.overlaps=overlaps;state.treaty=treaty;
    const byId=new Map(boards.features.map(f=>[f.properties.BOARD_NUM,f]));
    boards.features.forEach(f=>f.id=f.properties.BOARD_NUM);
    overlaps.features.forEach(f=>{f.id=f.properties.BOARD_NUM;if(!byId.has(f.id)) throw new Error('Overlap board missing from data');f.properties={...byId.get(f.id).properties};});
    document.querySelectorAll('[data-system]').forEach(el=>{el.textContent=el.dataset.system==='all'?boards.features.length:boards.features.filter(f=>f.properties.system===el.dataset.system).length;});
    renderList();initializeMap();
  } catch(error) {
    showStatus('School board data could not load. Reload the page, or download the CSV list below.',true);
    $('result-count').textContent='Data unavailable';
    const li=document.createElement('li');li.className='empty';li.textContent='Board data is unavailable. The CSV download is below.';$('board-list').replaceChildren(li);
  }
}
document.querySelectorAll('[name=system]').forEach(input=>input.addEventListener('change',()=>{state.system=input.value;filterChanged();}));
$('search').addEventListener('input',event=>{state.query=event.target.value;filterChanged();});
document.querySelectorAll('[name=view]').forEach(input=>input.addEventListener('change',()=>{state.view=input.value;state.popup?.remove();state.popup=null;updateMap();}));
$('show-treaty').addEventListener('change',event=>{if(state.ready) for(const layer of ['treaty-fill','treaty-outline']) state.map.setLayoutProperty(layer,'visibility',event.target.checked?'visible':'none');});
$('clear-selection').addEventListener('click',clearSelection);
$('reset-view').addEventListener('click',()=>{if(state.ready) fit(state.treaty);});
$('zoom-board').addEventListener('click',()=>{const f=state.boards?.features.find(f=>f.id===state.selected);if(f&&state.ready) fit(f);});
const dialog=$('about-dialog');
$('about-button').addEventListener('click',()=>dialog.showModal());
$('close-about').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
boot();
