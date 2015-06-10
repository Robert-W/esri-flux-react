/** @jsx React.DOM */
define([
	'main/config',
	'map/MapController'
], function (AppConfig, MapController) {
	'use strict';

	var Main = {

		init: function () {
			// Create Global Object with debug options, only store commonly accessed elements
			window.app = {
				debugEnabled: false,
				debug: function (message) {
					if (this.debugEnabled) {
						if (typeof message === 'string') {
							console.log(message);
						} else {
							console.dir(message);
						}	
					}
				}
			};

			// Perform all necessary setup in the apply configurations function
			this.applyConfigurations();
			this.initializeApp();

		},

		applyConfigurations: function () {
			app.debug('main >>> applyConfigurations');
		},

		initializeApp: function () {
			app.debug('main >>> initializeApp');
			MapController.init();
		}

	};

	return Main;

});