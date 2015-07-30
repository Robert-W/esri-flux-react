import babelPolyfill from 'babel-polyfill';
import {arcgisConfig} from 'js/config';
import {App} from 'js/layout/App';
import React from 'react';

if (!babelPolyfill) { console.error('Error: babel-polyfill could not be detected.'); }

// Set up globals
window.app = {
  debugEnabled: true,
  debug: function (message) {
    if (this.debugEnabled) {
      var print = typeof message === 'string' ? console.log : console.dir;
      print.apply(console, [message]);
    }
  }
};

// Shim for rAF with timeout for callback
window.requestAnimationFrame = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) { window.setTimeout(callback, 1000 / 60); };
})();

/**
* @param {string} url - Url of resource to be loaded
*/
var loadCss = (url) => {
  var sheet = document.createElement('link');
  sheet.rel = 'stylesheet';
  sheet.type = 'text/css';
  sheet.href = url;
  requestAnimationFrame(function () { document.getElementsByTagName('head')[0].appendChild(sheet); });
};

var lazyloadStylesheets = () => {
  app.debug('main >>> lazyloadStylesheets');
  loadCss(arcgisConfig.css);
  loadCss('css/app.css');
};

var configureApp = () => {
  app.debug('main >>> configureApp');
  // Setup defaults such as esri proxy url or cors enabled servers
};

var initializeApp = () => {
  app.debug('main >>> initializeApp');
  React.render(<App />, document.body);
};

lazyloadStylesheets();
configureApp();
initializeApp();
