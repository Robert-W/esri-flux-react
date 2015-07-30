var requirejs = require('requirejs');
var React = require('react/addons');
var path = require('path');
var fs = require('fs');

var rootComponentPath = 'js/layout/App';
var buildProfilePath = path.join(__dirname, 'build.js');
var fileIn = path.join(__dirname, 'src/index.json');
var fileOut = path.join(__dirname, 'src/jade.json');

var buildProfile = fs.readFileSync(buildProfilePath, 'utf-8');
var buildConfig = eval(buildProfile);

requirejs.config({
  baseUrl: path.join(__dirname, buildConfig.baseUrl),
  paths: buildConfig.paths,
  // Stub any modules that require any esri or dojo modules since they wont be resolved by require
  map: {
    '*': {
      'js/actions/MapActions': 'js/config'
    }
  },
  nodeRequire: require
});

var reactApp = React.createFactory(requirejs(rootComponentPath).App);
var markup = React.renderToString(reactApp());

var json = JSON.parse(fs.readFileSync(fileIn, 'utf-8'));
json.markup = markup;

fs.writeFile(fileOut, JSON.stringify(json, null, 2), function (writeErr) {
  if (writeErr) { console.error(writeErr); return; }
  console.log('Successfully prerendered components to ' + fileOut);
});
