import appActions from 'actions/AppActions';
import MapControls from './MapControls';
import {mapConfig} from 'js/config';
import VectorTileLayer from 'esri/layers/VectorTileLayer';
import MapView from 'esri/views/MapView';
import EsriMap from 'esri/Map';
import Loader from './Loader';
import React, {
  Component,
  PropTypes
} from 'react';

export default class Map extends Component {

  static childContextTypes = {
    mapView: PropTypes.object
  };

  getChildContext = () => {
    return {
      mapView: this.mapView
    };
  };

  constructor (props) {
    super(props);
    this.mapView = {};
  }

  componentDidMount() {
    const grayVector = new VectorTileLayer({
      url: 'http://www.arcgis.com/sharing/rest/content/items/bdf1eec3fa79456c8c7c2bb62f86dade/resources/styles/root.json?f=pjson'
    });
    const map = new EsriMap(mapConfig.mapOptions);
    map.add(grayVector);
    const promise = new MapView({ container: this.refs.map, map: map, ...mapConfig.viewOptions });
    promise.then((mapView) => {
      this.mapView = mapView;
      appActions.update();
      //- Expose the map for debugging purposes
      if (brApp.debug) { brApp.mapView = this.mapView; }
    });
  }

  render () {
    return (
      <div ref='map' className='map'>
        <Loader active={!this.mapView.ready} />
        <MapControls />
      </div>
    );
  }

}
