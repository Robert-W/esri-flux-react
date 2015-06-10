/** @jsx React.DOM */
define([
	'main/config',
	'map/MapController'
], function (AppConfig, MapController) {
	'use strict';

	var loadStylesheet = function (url) {
		var head = document.getElementsByTagName('head')[0],
				link = document.createElement('link');

		link.href = url;
		link.type = 'text/css';
		link.rel = 'stylesheet';

		head.appendChild(link);
	};

	var Main = {

		init: function () {
			
			// Create Global Object with debug options, only store commonly accessed elements
			window.app = {
				debugEnabled: true,
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
		},

		loadStylesheets: function () {
			var css = ['http://fonts.googleapis.com/css?family=Lato:300'];

			css.forEach(function (url) {
				loadStylesheet(url);
			});

		}

	};

	return Main;

});