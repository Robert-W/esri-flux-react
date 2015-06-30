import {Dispatcher as dispatcher} from 'js/dispatcher'
import constants from 'constants/MapConstants'
import {map as config} from 'js/config'
import Deferred from 'dojo/Deferred'
import assert from 'utils/assert'
import EsriMap from 'esri/map'


export const MapActions = {

  createMap () {

    // TODO Use Native Promises
    // Example
    /*
    var p1 = new Promise(function (reject, resolve) {
      setTimeout(function () {
        resolve(5000);
      }, 5000);
    });

    p1.then(function (resolveParam) {

    }).catch(function (rejectParam) {

    });
    */
    var deferred = new Deferred();
    app.map = new EsriMap(config.id, config.options);
    app.map.on('load', function () {
      deferred.resolve();
    });
    return deferred;
  },

  setBasemap (basemap) {
    dispatcher.dispatch({
      actionType: constants.basemap,
      data: basemap
    });
  },

  extentChanged (centerPoint, zoomLevel) {
    dispatcher.dispatch({
      actionType: constants.extent,
      data: {
        center: centerPoint,
        zoom: zoomLevel
      }
    });
  }

}
