import {MAP as constants} from 'js/constants/AppConstants';
import {Dispatcher as dispatcher} from 'js/dispatcher';
import EsriMap from 'esri/Map';

export const MapActions = {
  /**
  * Simple method to create a new Map
  * @param {object} mapConfig - config object containing id and options
  * @return {Promise} deferred - Promise that resolves on map load event
  */
  createMap (mapConfig) {
    app.debug('MapActions >>> createMap');

    var deferred = new Promise((resolve) => {
      app.map = new EsriMap(mapConfig.id, mapConfig.options);
      app.map.then(() => {
        resolve();
      });
    });

    return deferred;
  },

  /**
  * Method to update the basemap
  * @param {string} basemap - the value of the basemap to be updated, should come from config.js basemaps
  */
  setBasemap (basemap) {
    app.debug('MapActions >>> setBasemap');

    dispatcher.dispatch({
      actionType: constants.basemap,
      data: basemap
    });
  }

};
