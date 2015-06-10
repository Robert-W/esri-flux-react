/** @jsx React.DOM */
define([
	'main/config',
	'map/MapController'
], function (AppConfig, MapController) {
	'use strict';

	function loadCss (url) {
		var sheet = document.createElement("link");
    sheet.type = "text/css";
    sheet.rel = "stylesheet";
    sheet.href = url;
    document.getElementsByTagName("head")[0].appendChild(sheet);
	}

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
			this.lazyloadStylesheets();
			this.applyConfigurations();
			this.initializeApp();

		},

		lazyloadStylesheets: function () {
			app.debug('main >>> applyConfigurations');
			loadCss("http://js.arcgis.com/3.13/esri/css/esri.css");
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