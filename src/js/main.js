import {loadCSS} from 'utils/loaders';
import App from 'components/App';
import ReactDOM from 'react-dom';
import React from 'react';
import 'babel-polyfill';

if (!_babelPolyfill) { console.log('Missing Babel Polyfill.  May experience some weirdness in IE < 9.'); }

window.brApp = {
  debug: location.search.slice(1).search('debug') > -1
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

const configureApp = () => {};

const lazyloadAssets = () => {
  loadCSS(`css/app.css?v=${window._versions.cache}`);
  // loadCSS(`//js.arcgis.com/${window._versions.esri}/esri/css/main.css`);
};

const initializeApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

configureApp();
lazyloadAssets();
initializeApp();
