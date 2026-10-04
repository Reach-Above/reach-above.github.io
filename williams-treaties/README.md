# Williams Treaties & school boards

Standalone static MapLibre page for the existing ReachAbove GitHub Pages site.

## Publish

Copy the complete `williams-treaties` folder to the root of `Reach-Above/reach-above.github.io` and commit it to the GitHub Pages publishing branch (currently `master`). After the Pages build completes, open:

https://reachabove.ca/williams-treaties/

No Jekyll front matter, npm build, Mapbox token, or change to the site's home page is required. Keep the folder structure intact. The HTML is copied directly by Jekyll because it has no front matter. Do not paste it into a Markdown page using the default layout.

The page contains system filters, accent-insensitive board-name search, selectable board areas, full-area and clipped-overlap views, approximate overlap metrics, boundary-review flags, independent school/board/treaty layer toggles, school detail popups, and CSV downloads. English Public is the initial system so the intentionally overlapping systems are easy to read.

## Files

- `index.html`, `style.css`, `app.js`: interface.
- `data/boards.geojson`: full boundaries for the 28 candidate boards.
- `data/overlaps.geojson`: portions inside the union of Ontario’s four Williams Treaties sections.
- `data/treaty.geojson`: four original Williams Treaties sections from Ontario’s IAO Digital Treaty Map.
- `data/boards.csv`: downloadable analysis table.
- `data/analysis-notes.txt`: provenance and analysis limitations from the original bundle.
- `data/schools.geojson`: 2,292 located school-category records, with display fields and coordinate provenance.
- `data/schools.csv`: all 2,765 selected Ministry school/program records, including unlocated records.
- `data/school-data-notes.txt`: school sources, matching methods, corrections and coverage report.

Data was rebuilt on October 4, 2026 from all 72 original supplied school board shapefiles and Ontario’s IAO Digital Treaty Map (FeatureServer layer 1). The 28 selected boards are the same as the previous version, but the treaty footprint, clipped areas and overlap metrics have been replaced. The two flags specific to the former generalized federal-derived polygon were removed because both boards also intersect Ontario’s mapped sections. This does not establish legal boundaries.

The Ontario query selected features where `Treaty1_Name` or `Treaty2_Name` contains Williams, returning OBJECTIDs 24, 25, 26 and 27. All four source features are retained for display without additional coordinate rounding or simplification. Their geometric union is used for analysis so no area is counted twice. The service itself describes the linework as simplified to 5 m in November 2024.

Invalid source school board geometries were repaired using Shapely `make_valid`; non-area remnants were excluded. Only polygonal board and overlap geometries are exported. Areas use a Lambert azimuthal equal-area projection centred at 45°N, 79°W with the WGS84 datum. Source board coordinates use NAD83 and are treated as equivalent to WGS84 at this illustrative map scale. Board names remain those in the supplied files.

## Preview locally

From the repository root:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000/williams-treaties/`. Opening the HTML through `file://` will not load GeoJSON correctly.

## External services

MapLibre GL JS 5.6.1 and its CSS load from UNPKG. The background uses standard OpenStreetMap raster tiles; attribution stays visible. The page and data use relative URLs. GeoJSON files are compressed by hosting where supported. Versioned data URLs avoid loading the previous polygon from browser caches.

For expected small school use, this requires no token or paid account. Observe https://operations.osmfoundation.org/policies/tiles/: no bulk downloading, offline prefetching, or removal of attribution. For heavy public traffic, switch to an appropriate hosted basemap service. The board list remains usable if the library or map graphics fail; a tile failure shows a message. There are no attendance catchments, analytics, accounts, or saved user data.

## School layer

School points follow the selected system and board-name search. Each layer is independently toggleable. Turning off Board polygons hides every board layer, including selected outlines, while the sidebar remains usable. The polygon display choice is retained while its controls are disabled; it does not clip school points. Schools from all 28 selected boards are included, even when outside the treaty area. Point colours use the school-system palette. Click points for names, addresses, board membership, treaty containment, website links and location provenance. Shared coordinates can represent multiple school records; the popup shows all records under the click.

The Ministry roster is dated August 11, 2026. Locations use Statistics Canada ODEF v3.0.1 and seven NRCan address estimates in the main school layer. Twenty school-category records have no reliable coordinates; virtual/seasonal/continuing-education and treatment/correctional programs are excluded from points. Full records remain in the downloadable CSV. Points have not been independently surveyed; estimates are labelled in popups. Source IDs, coordinates and location classifications are preserved. Source attribution and reconciliation details appear in About this map and school-data-notes.txt. If school-point loading fails, the board map remains available and the school checkbox is disabled with an explanatory message.

## Data updates

Replace board/treaty GeoJSON files and the board CSV together after rerunning the overlap analysis. Regenerate the school files and provenance notes together when refreshing the roster or locations; retain school/board IDs as text. Bump the asset and data URL version strings after changes. Preserve the existing schema (`BOARD_NAME`, `BOARD_NUM`, `system`, `intersection_km2`, `pct_board_in_williams`, `review_flag`) and update the visible notes and source dates. Board names come from the supplied boundary files and have not been reconciled against a current board directory.

## Validation

Checked in headless Chromium at desktop (1440 × 1000) and phone (390 × 844) sizes: system counts, board selection, search and empty state, boundary-review details, clipped-layer and independent school/board/treaty visibility toggles, school popup contents, schools-only viewing, point filter counts, school-data loading failure, modal opening/closing, and phone horizontal overflow. No JavaScript page errors were observed. GeoJSON IDs, all 72 input boards, 28 selected boards, four treaty sections, CSV records and metric ranges were checked. Browser QA loaded the pinned MapLibre files locally and substituted blank raster tiles; live external basemap availability was not verified.
