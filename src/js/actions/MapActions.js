import {Dispatcher as dispatcher} from 'js/dispatcher'
import constants from 'constants/MapConstants'
import {map as config} from 'js/config'
import assert from 'utils/assert'
import EsriMap from 'esri/map'

export const MapActions = {

  createMap () {
    app.map = new EsriMap(config.id, config.options);
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
