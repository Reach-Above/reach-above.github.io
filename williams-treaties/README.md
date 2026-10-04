# Williams Treaties & school boards

Standalone static MapLibre page for the existing ReachAbove GitHub Pages site.

## Publish

Copy the complete `williams-treaties` folder to the root of `Reach-Above/reach-above.github.io` and commit it to the GitHub Pages publishing branch (currently `master`). After the Pages build completes, open:

https://reachabove.ca/williams-treaties/

No Jekyll front matter, npm build, Mapbox token, or change to the site's home page is required. Keep the folder structure intact. The HTML is copied directly by Jekyll because it has no front matter. Do not paste it into a Markdown page using the default layout.

The page contains system filters, accent-insensitive board-name search, selectable board areas, full-area and clipped-overlap views, approximate overlap metrics, boundary-review flags, and a CSV download. English Public is the initial system so the intentionally overlapping systems are easy to read.

## Files

- `index.html`, `style.css`, `app.js`: interface.
- `data/boards.geojson`: full boundaries for the 28 candidate boards.
- `data/overlaps.geojson`: portions inside the generalized treaty area.
- `data/treaty.geojson`: generalized treaty polygon used by the supplied analysis.
- `data/boards.csv`: downloadable analysis table.
- `data/analysis-notes.txt`: provenance and analysis limitations from the original bundle.

Data is copied from the October 3, 2026 analysis bundle, with JSON whitespace removed and board IDs added. Coordinates and precomputed metrics are preserved. This page performs no spatial intersection and does not validate the original analysis. The two flagged boards remain visible and labelled.

## Preview locally

From the repository root:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000/williams-treaties/`. Opening the HTML through `file://` will not load GeoJSON correctly.

## External services

MapLibre GL JS 5.6.1 and its CSS load from UNPKG. The background uses standard OpenStreetMap raster tiles; attribution stays visible. The page and data use relative URLs. GeoJSON totals about 6.8 MB before HTTP compression.

For expected small school use, this requires no token or paid account. Observe https://operations.osmfoundation.org/policies/tiles/: no bulk downloading, offline prefetching, or removal of attribution. For heavy public traffic, switch to an appropriate hosted basemap service. The board list remains usable if the library or map graphics fail; a tile failure shows a message. There are no school point locations, attendance catchments, analytics, accounts, or saved user data.

## Data updates

Replace all three GeoJSON files and the CSV together after rerunning the analysis. Preserve the existing schema (`BOARD_NAME`, `BOARD_NUM`, `system`, `intersection_km2`, `pct_board_in_williams`, `review_flag`) and update the visible notes and source dates. Board names come from the supplied boundary files and have not been reconciled against a current board directory.

## Validation

Checked in headless Chromium at desktop (1440 × 1000) and phone (390 × 844) sizes: system counts, board selection, search and empty state, boundary-review details, clipped-layer and treaty-visibility toggles, modal opening/closing, and phone horizontal overflow. No JavaScript page errors were observed. GeoJSON IDs, board counts, CSV records, review flags and metric ranges were checked. Browser QA loaded the pinned MapLibre files locally and substituted blank raster tiles; live external basemap availability was not verified.
