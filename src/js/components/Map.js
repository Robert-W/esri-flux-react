import LocateModal from 'js/components/modals/LocateModal';
import ShareModal from 'js/components/modals/ShareModal';
import Loader from 'js/components/shared/Loader';
import MapControls from 'js/components/Controls';
import appActions from 'js/actions/AppActions';
import {mapConfig} from 'js/config';

import SceneView from 'esri/views/SceneView';
import MapView from 'esri/views/MapView';
import EsriMap from 'esri/Map';
import React, { Component, PropTypes } from 'react';

export default class Map extends Component {

  static childContextTypes = {
    view: PropTypes.object
  };

  getChildContext = () => {
    return {
      view: this.view
    };
  };

  constructor (props) {
    super(props);
    this.view = {};
    this.map = {};
  }

  componentDidMount() {
    this.createMapView();
  }

  cleanupView = () => {
    if (this.view.destroy) {
      this.view.destroy();
      this.map.destroy();
    }
  }

  createMapView = () => {
    //- Destroy the view & map if it exists
    this.cleanupView();
    //- Create the map
    // const grayVector = new VectorTileLayer({
    //   url: 'http://www.arcgis.com/sharing/rest/content/items/bdf1eec3fa79456c8c7c2bb62f86dade/resources/styles/root.json?f=pjson'
    // });

    this.map = new EsriMap({
      basemap: 'gray-vector'
      // layers: [grayVector]
    });

    //- Create the MapView
    const promise = new MapView({ container: this.refs.map, map: this.map, ...mapConfig.mapViewOptions });
    promise.then((view) => {
      this.view = view;
      appActions.update();
      //- Expose the map for debugging purposes
      if (brApp.debug) { brApp.appView = this.view; }
    });
  };

  createSceneView = () => {
    //- Destroy the view & map if it exists
    this.cleanupView();
    //- Create the map
    this.map = new EsriMap({
      basemap: 'national-geographic'
    });
    //- Create the SceneView
    const promise = new SceneView({ container: this.refs.map, map: this.map, ...mapConfig.sceneViewOptions });
    promise.then((view) => {
      this.view = view;
      appActions.update();
      //- Expose the map for debugging purposes
      if (brApp.debug) { brApp.appView = this.view; }
    });
  };

  render () {
    const { shareModalActive, locateModalActive } = this.props;

    return (
      <div ref='map' className='map'>
        <Loader active={!this.view.ready} />
        <MapControls />
        <LocateModal active={locateModalActive} />
        <ShareModal active={shareModalActive} />
      </div>
    );
  }

}
