import ModalWrapper from 'components/shared/ModalWrapper';
import appActions from 'actions/AppActions';
import MapControls from './MapControls';
import {mapConfig} from 'js/config';
import VectorTileLayer from 'esri/layers/VectorTileLayer';
import SceneView from 'esri/views/SceneView';
import MapView from 'esri/views/MapView';
import EsriMap from 'esri/Map';
import Loader from './Loader';
import React, {
  Component,
  PropTypes
} from 'react';

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
  }

  componentDidMount() {

    const grayVector = new VectorTileLayer({
      url: 'http://www.arcgis.com/sharing/rest/content/items/bdf1eec3fa79456c8c7c2bb62f86dade/resources/styles/root.json?f=pjson'
    });

    //- FOR 3D, comment out layers, and include basemap, comment out new MapView and use new SceneView
    const map = new EsriMap({
      // basemap: 'topo'
      layers: [grayVector]
    });

    const promise = new MapView({ container: this.refs.map, map: map, ...mapConfig.mapViewOptions });
    // const promise = new SceneView({ container: this.refs.map, map: map, ...mapConfig.sceneViewOptions });
    promise.then((view) => {
      this.view = view;
      appActions.update();
      //- Expose the map for debugging purposes
      if (brApp.debug) { brApp.appView = this.view; }
    });

  }

  closeShareModal = () => {
    appActions.toggleShareModal({ visible: false });
  };

  closeLocateModal = () => {
    appActions.toggleLocateModal({ visible: false });
  };

  render () {
    const { shareModalActive, locateModalActive } = this.props;

    return (
      <div ref='map' className='map'>
        <Loader active={!this.view.ready} />
        <MapControls />

        <ModalWrapper theme='error-modal' active={shareModalActive} close={this.closeShareModal}>
          <h3>Share Something</h3>
        </ModalWrapper>
        <ModalWrapper theme='basic-modal' active={locateModalActive} close={this.closeLocateModal}>
          <h3>Locate Something</h3>
        </ModalWrapper>
      </div>
    );
  }

}
