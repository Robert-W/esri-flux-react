export const config = {
  app: {
    'title': 'Simple Map',
    'subtitle': 'just a simple boilerplate for using React with Esri\'s JavaScript API.'
  },

  arcgis: {
    css: 'http://js.arcgis.com/3.14/esri/css/esri.css'
  },

  map: {
    id: 'map',
    options: {
      navigationMode: 'css-transforms',
      sliderPosition: 'top-right',
      force3DTransforms: true,
      basemap: 'osm',
      center: [-102, 39],
      fadeOnZoom: true,
      zoom: 4,
      logo: false,
      showAttribution: false
    }
  },

  ui: {
    basemaps: [
      { label: 'Open Street Map', value: 'osm', iconClass: 'basemap-osm' },
      { label: 'Terrain', value: 'terrain', iconClass: 'basemap-terrain' },
      { label: 'Dark Gray Canvas', value: 'dark-gray', iconClass: 'basemap-dg' },
      { label: 'Imagery with Labels', value: 'hybrid', iconClass: 'basemap-imagery' },
      { label: 'National Geographic', value: 'national-geographic', iconClass: 'basemap-nat-geo' }
    ]
  }

};

export const appConfig = config.app;
export const mapConfig = config.map;
export const arcgisConfig = config.arcgis;
/* UI Config Exports */
export const basemaps = config.ui.basemaps;
