/** @jsx React.DOM */
define([
	'react',
	'components/BasemapGallery'
], function (React, BasemapGallery) {

	var MapWidgets = React.createClass({

		/* jshint ignore:start */
		render: function () {
			return (
				<div className='map-widgets-container'>
					<BasemapGallery />
				</div>
			);
		}
		/* jshint ignore:end */

	});

	/**
	* @param {string} node - id of dom node to mount component to
	* @param {object} props - properties to pass to the map widgets if necessary
	*/
	return function (node, props) {
		/* jshint ignore:start */
		return React.render(<MapWidgets />, document.getElementById(node));
		/* jshint ignore:end */
	};

});