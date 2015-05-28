define([
	'main/dispatcher',
	'constants/MapConstants'
], function (Dispatcher, MapConstants) {
	'use strict';

	var Store = {};
	var Observers = [];

	var Interface = {

		/**
		* Get value of a property from the store
		* @param {string} key - name of property in the store
		* @return {any object} - value stored
		*/
		get: function (key) {
			return Store[key];
		},

		/**
		* Register a observer for the store
		* @param {function} callback - callback function to invoke when the store changes
		*/
		registerCallback: function (callback) {
			Observers.push(callback);
		},

		/**
		* Serialze the store for sharing
		* @return {string} Stringified version of the store
		*/
		serialize: function () {
			return JSON.stringify(Store);
		}

	};

	/**
	 * Setting Data Should be private and only the store should set its own data, which is why the interface
	 * only exposes a get method and a registerCallback
	 */

	/**
	 * @param {string} key - name of property in the store
	 * @param {AnyObject} value - value to be stored
	 */
	function set(key, value) {
		Store[key] = value;
	}

	/**
	 * Update anyone observing this store
	 */
	function emit() {
		Observers.forEach(function (func) {
			func();
		});
	}

	// Register Callback to handle all Updates
	Dispatcher.register(function (payload) {

		switch (payload.actionType) {

			case MapConstants.basemap:
				set(MapConstants.basemap, payload.data);
				emit();
			break;

			case MapConstants.extent:
				var data = payload.data;
				set(MapConstants.extent, {
					x: data.center.getLongitude().toFixed(2),
					y: data.center.getLatitude().toFixed(2),
					z: data.zoom
				});
			break;
		}

	});

	return Interface;

});