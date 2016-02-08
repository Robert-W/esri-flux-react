/*eslint-disable*/
({
	baseUrl: 'build',
	paths: {
		// Empty Modules/Aliases
		'dojo': 'empty:',
		'esri': 'empty:',
		'dijit': 'empty:',
		'dojox': 'empty:',
		'alt':  'vendor/alt/dist/alt.min',
		'react': 'vendor/react/react.min',
		'react-dom': 'vendor/react/react-dom.min',
		'babel-polyfill': 'vendor/babel-polyfill/browser-polyfill',
		// My configured packages
		'js': 'js',
		'vendor': 'vendor',
		'utils': 'js/utils',
		'stores': 'js/stores',
		'actions': 'js/actions',
		'constants': 'js/constants',
		'components': 'js/components'
	},
	name: 'js/main',
	out: 'dist/js/main.js'
});
