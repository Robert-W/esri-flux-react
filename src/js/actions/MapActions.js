define([
	'main/dispatcher',
	'constants/MapConstants'
], function (Dispatcher, MapConstants) {

	var MapActions = {

		updateBasemap: function (data) {

			Dispatcher.dispatch({
				actionType: MapConstants.basemap,
				data: data
			});

		}

	};

	return MapActions;

});