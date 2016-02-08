# esri-flux-react  [![Build Status](https://travis-ci.org/Robert-W/esri-flux-react.svg?branch=master)](https://travis-ci.org/Robert-W/esri-flux-react)
Simple Boilerplate for using [React](https://facebook.github.io/react/) and [Esri's JavaScript API](https://developers.arcgis.com/javascript/) together. It supports IE 9+ and the last two versions of all major browsers and can run in https or http. For data management, It is also using Flux via [Alt.js](http://alt.js.org/).

### Demo - https
[https://robert-w.github.io/esri-flux-react/](https://robert-w.github.io/esri-flux-react/)

### Getting Started
This project requires [Node.js](https://nodejs.org/en/)
1. `npm install`
2. `npm start`
3. Open `http://localhost:3000`

`npm install` will install most dependencies and on `postinstall`, bower will install the rest.  This project has browser sync setup with live reload, so it will refresh as you develop.

### Scripts
`npm start`
> Basic script to start browser-sync server, gulp tasks, and babel-cli. App is served @`http://localhost:3000`

`npm test`
> Run tests using Mocha and Chai, an example test is in the test folder.

`npm run secure`
> Same as `npm start` however browser-sync is run in https mode, so it's served @`https://localhost:3000`

`npm run production`
> Build for production. Requirejs bundles and minifies JS. Gulp minifies Jade, Stylus, images, adds the version for cache-busting to css and js resources, and prerenders your React Components. react-prerender will attempt to prerender the App component into the #root dom node. See [react-prerender](https://github.com/Robert-W/react-prerender) for how to configure the react-prerender script. It is executed via `gulp prerender`.


### Tooling
This boilerplate uses Babel to compile ES6 & ES7 to ES5 compatible code, giving you access to the latest JavaScript features. It uses Jade for HTML and Stylus for css, however these could be swapped out relatively easy for other options if desired. It also uses Gulp and BrowserSync for building/serving the application.

### Performance
 You should notice some css(`critical.styl`) will get inlined into the jade file.  This should be the minimal amount of css needed for your above-the-fold content and your prerendered components. There are gulp scripts in place to minify css and html, and prerender your React components, as well as an npm script using the RequireJS Optimizer to bundle your JS assets. See [Scripts](#scripts)

### Security
This has the ability to run in HTTPS since it uses protocol agnostic resources only from js.arcgis.com and local resources. It has a Content Security Policy with the configurations listed after this section, which can be tweaked under `src/jade/CSP.jade` or removed from the app by not including it in `src/index.jade`.

```
script-src 'self' js.arcgis.com 'unsafe-inline' 'unsafe-eval';
style-src 'self' js.arcgis.com 'unsafe-inline';
```

### Cache
There is an exmaple `.htaccess` file in the root you can use. There are also gulp tasks setup to inject the version number from the `package.json` onto the end of your css resources and into the `dojoConfig` variable, making for an effective cache-busting mechanism when used correctly.

#### Resources
* [Great talk from Yan Zhu on Security, HTTPS, and CSP](https://www.youtube.com/watch?v=CDdYu2CJ-SU)
* [Content-Security-Policy Spec](https://www.w3.org/TR/CSP/)
* [Tutorial on Content-Security-Policy Meta tags](http://www.html5rocks.com/en/tutorials/security/content-security-policy/)
* [React-Prerender](https://github.com/Robert-W/react-prerender)
