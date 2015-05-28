define([
	'map/Map',
	'map/MapConfig',
	'actions/MapActions',
	'components/MapWidgets',
	// Esri/Dojo Modules
	'dojo/on'
], function (Map, MapConfig, MapActions, MapWidgets, on) {
	'use strict';

	var MapController = {

		init: function () {
			app.debug('MapController >>> init');
			var mapObject = new Map(MapConfig.options, 'map');
			var loadingIndicator = document.getElementById('map-loader');
			// Put the ESRI Map Object in the global context so it's easy to obtain later in the program
			mapObject.on('map-ready', function () {
				app.map = mapObject.map;
				this.renderComponents();
				this.setupEventListeners();
				loadingIndicator.className = "hidden"; 
			}.bind(this));
		},

		/**
		* Render React Components and any other necessary components
		*/
		renderComponents: function () {
			app.debug('MapController >>> renderComponents');
			// React Component that encompasses various widgets
			var mapWidget = new MapWidgets('map-widgets-wrapper');
		},

		/**
		* Setup any map related events and connect them to their handlers now that the map is ready
		*/
		setupEventListeners: function () {
			app.debug('MapController >>> setupEventListeners');

			// Listen for extent changes on the map
			app.map.on('extent-change', this.extentChanged);

		},

		/**
		* Fired when the user pans or zooms on the map causing the extent to change
		* For now, store that information in the store for later use or for sharing
		* @param {object} evt - Event object containing delta, extent, lod, target, and levelChange boolean
		*/
		extentChanged: function (evt) {
			app.debug('MapController >>> extentChanged');
			var center = evt.extent && evt.extent.getCenter(),
					zoomLevel = evt.lod && evt.lod.level;

			MapActions.extentUpdated(center, zoomLevel);

		}

	};

	return MapController;

});