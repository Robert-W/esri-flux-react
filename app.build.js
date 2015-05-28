/* jshint ignore:start */
({
	baseUrl: 'src',
	paths: {
		// Empty Modules/Aliases
		'dojo': 'empty:',
		'esri': 'empty:',
		'dijit': 'empty:',
		'dojox': 'empty:',
		// libs
		'react': 'bower/react/react.min',
		'lodash': 'bower/lodash/lodash.min',
		// Configured Packages
		'js': 'js',
		'map': 'js/map',
		'main': 'js/main',
		'stores': 'js/stores',
		'actions': 'js/actions',
		'constants': 'js/constants',
		'components': 'js/components'
	},
	name: 'js/bundle',
	out: 'build/js/bundle.js'
})
/* jshint ignore:end */