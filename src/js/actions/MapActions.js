define([
	'main/dispatcher',
	'constants/MapConstants'
], function (Dispatcher, MapConstants) {

	var MapActions = {

		updateBasemap: function (basemap) {

			Dispatcher.dispatch({
				actionType: MapConstants.basemap,
				data: basemap
			});

		},

		extentUpdated: function (centerPoint, zoomLevel) {

			Dispatcher.dispatch({
				actionType: MapConstants.extent,
				data: {
					center: centerPoint,
					zoom: zoomLevel
				}
			});

		}

	};

	return MapActions;

});