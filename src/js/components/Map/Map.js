import appActions from 'actions/AppActions';
import MapControls from './MapControls';
import {mapConfig} from 'js/config';
import EsriMap from 'esri/map';
import Loader from './Loader';
import React, {
  Component,
  PropTypes
} from 'react';

export default class Map extends Component {

  static childContextTypes = {
    map: PropTypes.object
  };

  getChildContext = () => {
    return {
      map: this.map
    };
  };

  constructor (props) {
    super(props);
    this.map = {};
  }

  componentDidMount() {
    this.map = new EsriMap(this.refs.map, mapConfig.options);
    this.map.on('load', appActions.updateMap);
    //- Expose the map for debugging purposes
    if (brApp.debug) { brApp.map = this.map; }
  }

  render () {
    return (
      <div ref='map' className='map'>
        <Loader active={!this.map.loaded} />
        <MapControls />
      </div>
    );
  }

}
