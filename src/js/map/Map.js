define([
	'dojo/Evented',
  'dojo/_base/declare',
	// Esri Modules 
	'esri/map',
	'map/MapConfig'
], function (Evented, declare, EsriMap, MapConfig) {
	'use strict';

	var defaults = MapConfig.options;

	var Map = declare([Evented], {

		constructor: function (options, element) {
			declare.safeMixin(this, options);

			// Store the element for later use
			this.element = element;
			this.create();
		},

		create: function () {
			var self = this;
			//  Setup defaults and mixin URL parameters before creating the map
			this.configureOptions();

			this.map = new EsriMap(this.element, this.mapOptions);

			this.map.on('load', function () {
				self.emit('map-ready', {});
			});
		},

		configureOptions: function () {
			// Setup defaults here
			this.mapOptions = {
				center: [this.centerX || defaults.centerX, this.centerY || defaults.centerY],
				sliderPosition: this.sliderPosition || defaults.sliderPosition,
				basemap: this.basemap || defaults.basemap,
				zoom: this.zoom || defaults.zoom,
        force3DTransforms: defaults.force3DTransforms,
        navigationMode: defaults.navigationMode,
        fadeOnZoom: defaults.fadeOnZoom
			};
			// Grab any URL Parameters or options and integrate them here

		}

	});

	return Map;

});