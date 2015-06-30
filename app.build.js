/* jshint ignore:start */
({
	baseUrl: 'build',
	paths: {
		// Empty Modules/Aliases
		'dojo': 'empty:',
		'esri': 'empty:',
		'dijit': 'empty:',
		'dojox': 'empty:',
		// libs
		'react': 'bower/react/react.min',
		'lodash': 'bower/lodash/lodash.min',
		'babel-polyfill': 'bower/babel-polyfill/browser-polyfill',
		// Configured Packages
		'js': 'js',
		'map': 'js/map',
		'utils': 'js/utils',
		'stores': 'js/stores',
		'actions': 'js/actions',
		'constants': 'js/constants'
	},
	name: 'js/main',
	out: 'dist/js/main.js'
})
/* jshint ignore:end */
