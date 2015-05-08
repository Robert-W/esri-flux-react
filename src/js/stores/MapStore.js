define([

], function () {
	'use strict';

	var Store = {};
	var Callbacks = {};

	var Interface = {

		/**
		* @param {string} key - key of item in store
		*/
		get: function (key) {
			return Store[key];
		},

		/**
		* @param {string} key - key of item in store
		* @param {string} vaule - Item to save in store
		* @param {string} callbackKey - Callbacks key to trigger registered callbacks
		*/
		set: function (key, value) {
			Store[key] = value;
			this.notifyObservers(key);
		},

		/**
		* @param {string} key - key of item in store
		* @return {bool} - returns true if a key was found and removed, else returns false
		*/
		delete: function (key) {
			return Store[key] !== undefined && delete Store[key];
		},

		/**
		* @param {string} key - key of item in Callbacks
		* @param {function} callback - callback to trigger on update of store
		*/
		registerCallback: function (key, callback) {
			if (Callbacks[key]) {
				Callbacks[key].push(callback);
			} else {
				Callbacks[key] = [];
				Callbacks[key].push(callback);
			}
		},

		/**
		* @param {string} property - property in Callbacks used to help locate the appropriate callbacks
		* @param {function} callback - callback to remove
		*/
		unregisterCallback: function (property, callback) {
			var status = false,
					callbackIndex = -1,
					callbacks = Callbacks[property];

			if (!callbacks) {
				return status;
			// If there are callbacks registered and there are some in the array, inspect
			} else if (callbacks.length > 0) {
				// Locate the index of the callback
				callbacks.some(function (callbackFunc, index) {
					if (callback.toString() == callbackFunc.toString()) {
						callbackIndex = index;
						return true;
					}
				});
				// If index was found, remove the callback and set status to true
				if (callbackIndex !== -1) {
					callbacks.splice(callbackIndex, 1);
					status = true;
				}

			}
			return status;
		},

		/**
		* @param {string} property - Property in store we are sending notifications for
		*/
		notifyObservers: function (property) {
			var callbacks = Callbacks[property];
			if (callbacks) {
				callbacks.forEach(function (func) {
					func();
				});
			}
		},

		/**
		* @return {string} - Returns a string representing the state of the store
		*/
		serialize: function () {
			return JSON.stringify(Store);
		},

		debug: function () {
			console.dir(Store);
		}

	};

	return Interface;

});