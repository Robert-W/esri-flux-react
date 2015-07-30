/*eslint-disable*/
({
	baseUrl: 'build',
	paths: {
		// Empty Modules/Aliases
		'dojo': 'empty:',
		'esri': 'empty:',
		'dijit': 'empty:',
		'dojox': 'empty:',
		// libs
		'react': 'vendor/react/react.min',
		'babel-polyfill': 'vendor/babel-polyfill/browser-polyfill',
		// Configured Packages
		'js': 'js',
		'vendor': 'vendor'
	},
	name: 'js/main',
	out: 'dist/js/main.js'
});
