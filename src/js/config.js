export const config = {
  app: {
    'title': 'Simple Map',
    'subtitle': 'Boilerplate for using Flux and React with Esri\'s JavaScript API.'
  },

  arcgis: {
    css: 'http://js.arcgis.com/3.14/esri/css/esri.css'
  },

  map: {
    id: 'map',
    options: {
      basemap: 'osm',
      center: [-102, 39],
      zoom: 4
    }
  },

  ui: {
    basemaps: [
      { label: 'Open Street Map', value: 'osm', iconClass: 'basemap-osm' },
      { label: 'Vector Streets Night', value: 'vector-streets-night', iconClass: 'basemap-vsn' },
      { label: 'Vector Streets Mobile', value: 'vector-streets-mobile', iconClass: 'basemap-vsm' },
      { label: 'Vector Canvas Light', value: 'vector-canvas-light', iconClass: 'basemap-vcl' },
      { label: 'Vector Canvas Dark', value: 'vector-canvas-dark', iconClass: 'basemap-vcd' }
    ]
  }

};

export const appConfig = config.app;
export const mapConfig = config.map;
export const arcgisConfig = config.arcgis;
/* UI Config Exports */
export const basemaps = config.ui.basemaps;
