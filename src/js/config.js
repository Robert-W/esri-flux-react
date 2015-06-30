export const config = {

  map: {
    id: 'map',
    options: {
      navigationMode: 'css-transforms',
      sliderPosition: 'top-right',
      force3DTransforms: true,
      basemap: 'terrain',
      center: [-102, 39],
      fadeOnZoom: true,
      zoom: 4
    }
  },

  uiComponents: {
    basemaps: [
      { label: 'Terrain', value: 'terrain', icon: 'terrain_labels.jpg' },
      { label: 'Dark Gray Canvas', value: 'dark-gray', icon: 'DGCanvasBase.png' },
      { label: 'Imagery with Labels', value: 'hybrid', icon: 'imagery_labels.jpg' },
      { label: 'National Geographic', value: 'national-geographic', icon: 'natgeo.jpg' },
      { label: 'Open Street Map', value: 'osm', icon: 'temposm.jpg' }
    ]
  }

};

export const map = config.map
export const basemaps = config.uiComponents.basemaps
