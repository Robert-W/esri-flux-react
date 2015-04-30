/** @jsx React.DOM */
define([
	'react',
	'esri/urlUtils',
	'map/MapConfig',
	'stores/MapStore',
	'components/BasemapGalleryItem'
], function (React, urlUtils, MapConfig, MapStore, BasemapGalleryItem) {

	// Bsaemaps configuration of which maps to show, values are the values ArcGIS uses to change basemaps
	var basemaps = MapConfig.uiComponents.basemaps;

	// Path to prefix to all icons in basemaps
	var imagePrefix = 'css/images/';

	// Key for storing values in the MapStore
	var MAP_STORE_KEY = 'basemap';

	// Retrieve data from the store or use a default value
	var getSelectedValue = function () {
		return MapStore.get(MAP_STORE_KEY) || app.map.getBasemap();
	};

	// Check the hash to see if the basemap has been shared, if so update the store
	var checkHash = function () {
		var urlParams = urlUtils.urlToObject(location.href);
		var basemap = urlParams && urlParams.query && urlParams.query[MAP_STORE_KEY];
		if (basemap) {
			MapStore.set(MAP_STORE_KEY, basemap);
		}
	};

	/**
	* Create a BasemapGallery Component, it will create a BasemapGalleryItem for each basemap in basemaps
	*/
	var BasemapGallery = React.createClass({

		getInitialState: function () {
			return {
				open: false,
				selectedValue: getSelectedValue()
			};
		},

		componentDidMount: function () {
			// Put the default value in the store before registering the callback
			MapStore.set(MAP_STORE_KEY, this.state.selectedValue);
			MapStore.registerCallback(MAP_STORE_KEY, this.storeUpdated);
			// Check the URL for a basemap
			checkHash();
		},

		storeUpdated: function () {
			var selectedBasemap = getSelectedValue();
			app.map.setBasemap(selectedBasemap);
			
			this.setState({
				selectedValue: selectedBasemap
			});
		},

		basemapSelected: function (selectedProps, event) {
			MapStore.set(MAP_STORE_KEY, selectedProps.value);
		},

		/* jshint ignore:start */
		renderItems: function (basemaps) {
			return  basemaps.map(function (basemap) {
				return ( 
					<BasemapGalleryItem 
						value={basemap.value} 
						label={basemap.label} 
						icon={imagePrefix + basemap.icon} 
						active={this.state.selectedValue === basemap.value}
						click={this.basemapSelected}
					/>
				);
			}, this);
		},
		/* jshint ignore:end */

		/* jshint ignore:start */
		render: function () {
			return (
				<div className={'basemap-gallery' + (this.state.open ? ' open' : '')}>
					<div className='basemap-gallery-icon pointer' onClick={this.toggleGallery}>
						<svg className='basemap-icon-svg' viewBox='0 0 96 96'>
							<polygon className='basemap-icon-themed' points="87,61.516 48,81.016 9,61.516 0,66.016 48,90.016 96,66.016 "/>
							<polygon points="87,44.531 48,64.031 9,44.531 0,49.031 48,73.031 96,49.031 "/>
							<path className='basemap-icon-themed' d="M48,16.943L78.111,32L48,47.057L17.889,32L48,16.943 M48,8L0,32l48,24l48-24L48,8L48,8z"/>
						</svg>
					</div>
					<ul className='basemap-gallery-item-list'>
						{this.renderItems(basemaps)}
					</ul>
				</div>
			);
		},
		/* jshint ignore:end */

		toggleGallery: function () {
			this.setState({
				open: !this.state.open
			});
		}

	});

	return BasemapGallery;

});