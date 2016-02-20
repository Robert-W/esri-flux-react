import appActions from 'actions/AppActions';
import MapControls from './MapControls';
import {mapConfig} from 'js/config';
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
    const map = new EsriMap(mapConfig.mapOptions);
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
