import {Dispatcher as dispatcher} from 'js/dispatcher'
import constants from 'constants/MapConstants'
import {map as config} from 'js/config'
import Deferred from 'dojo/Deferred'
import assert from 'utils/assert'
import EsriMap from 'esri/map'


export const MapActions = {

  createMap () {
    app.debug('MapActions >>> createMap');
    var loadingIndicator = document.getElementById('map-loader');
    var deferred = new Promise((resolve, reject) => {
      app.map = new EsriMap(config.id, config.options);
      app.map.on('load', () => {
        loadingIndicator.className = 'hidden';
        resolve();
      });
    });
    return deferred;
  },

  setBasemap (basemap) {
    app.debug('MapActions >>> setBasemap');
    dispatcher.dispatch({
      actionType: constants.basemap,
      data: basemap
    });
  },

  extentChanged (centerPoint, zoomLevel) {
    app.debug('MapActions >>> extentChanged');
    dispatcher.dispatch({
      actionType: constants.extent,
      data: {
        center: centerPoint,
        zoom: zoomLevel
      }
    });
  }

}
