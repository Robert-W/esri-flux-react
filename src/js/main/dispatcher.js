define([], function () {
	'use strict';

	var callbacks = [];
	
	/**
	 * Interface to be returned, will only return two methods, register and dispatch
	 */
	var Dispatcher = {

		/**
		 * Register callbacks to the dispatcher
		 * @param {function} callback The callback were registering
		 * @return {number} index of callback
		 */
		register: function (callback) {
			callbacks.push(callback);
			return callbacks.length - 1;
		},

		/**
		 * Dispatch a payload from an action
		 * @param {object} payload Data coming from an action
		 */
		dispatch: function (payload) {
			callbacks.forEach(function (callback) {
				callback(payload);
			});
		}

	};

	return Dispatcher;

});