# esri-flux-react  [![Build Status](https://travis-ci.org/Robert-W/esri-flux-react.svg?branch=master)](https://travis-ci.org/Robert-W/esri-flux-react)
Simple Boilerplate for using [React](https://facebook.github.io/react/) and [Esri's JavaScript API](https://developers.arcgis.com/javascript/) together. It supports IE 9+ and the last two versions of all major browsers and can run in https or http. For data management, it's using [Alt.js](http://alt.js.org/) (a flux library).

### Demo - https
[https://robert-w.github.io/esri-flux-react/](https://robert-w.github.io/esri-flux-react/)

### NOTE
Current branch is using the 4.0 release, their are tags for [3.15](https://github.com/Robert-W/esri-flux-react/releases/tag/v3.15) & [3.16](https://github.com/Robert-W/esri-flux-react/releases/tag/v3.16) if you need those but they may also be using a slightly older version of the template with different tooling.

### NEW!! Alternate Boilerplate
Check out another boilerplate with the ArcGIS JavaScript API using a different set of tools.  It is using the 4.0 API, React, Redux, Sass, and optionally Flow for type checking. You can find it here [esri-redux](https://github.com/Robert-W/esri-redux). This boilerplate is going nowhere but incase you wanted to try it out with some different libraries, head over there to see how.

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

`npm run dist`
> Build for production. Gulp minifies Pug, Sass, images, and adds the version for cache-busting to css and js resources. There is a `build.js` file that uses Rollup to bundle the local src code and Requirejs to bundle in bower dependencies and minify the output.  It then uses react-prerender to prerender your root component and inject it into the index page.


### Tooling
This boilerplate uses Babel to compile to ES5 compatible code for development and Rollup (with the help of babel) for production, giving you access to the latest JavaScript features. It uses Pug for HTML and Sass for css, however these could be swapped out relatively easy for other options if desired. It also uses Gulp and BrowserSync for building/serving the application.

### Performance
 You should notice some css(`critical.scss`) will get inlined into the `index.pug` file.  This should be the minimal amount of css needed for your above-the-fold content and your pre-rendered components. There are build scripts in place to generate an optimized build and pre render your components (which you should always try to find a way to do). See `npm run dist` under [Scripts](#scripts).

### Security
This has the ability to run in HTTPS since it uses protocol agnostic resources only from js.arcgis.com and local resources. It has a Content Security Policy with the configurations listed after this section, which can be tweaked under `src/jade/CSP.pug` or removed from the app by not including it in `src/index.pug`.

```
script-src 'self' js.arcgis.com 'unsafe-inline' 'unsafe-eval';
style-src 'self' js.arcgis.com 'unsafe-inline';
```

### Cache
There is an exmaple `.htaccess` file in the root you can use. There are also gulp tasks setup to inject the version number from the `package.json` onto the end of your css resources and into the `dojoConfig` variable, making for an effective cache-busting mechanism when used correctly.

### Changes in the latest version
* Updated Jade to Pug as Jade is being renamed.
* Replaced Stylus with Sass.
* Changed the name of the build script to be more inline with other projects.
* Removed `rjs.build.js` in favor of `build.js`.
  * This now uses Rollup to generate an even more optimized bundle, then uses RequireJS to add bower installed libs to the bundle and minify the whole thing.  Afterwards, the same react-prerender script is leveraged to prerender the root component.
* Upgraded Gulp scripts to a simpler workflow
* Added in `gulp-replace`, this is how `critical.scss` get's injected using a specific comment syntax, this can be extended to handle much more custom applications.

### Versions
* [ArcGIS JSAPI v3.16](https://github.com/Robert-W/esri-flux-react/releases/tag/v3.16)
* [ArcGIS JSAPI v3.15](https://github.com/Robert-W/esri-flux-react/releases/tag/v3.15)

#### Resources
* [Great talk from Yan Zhu on Security, HTTPS, and CSP](https://www.youtube.com/watch?v=CDdYu2CJ-SU)
* [Content-Security-Policy Spec](https://www.w3.org/TR/CSP/)
* [Tutorial on Content-Security-Policy Meta tags](http://www.html5rocks.com/en/tutorials/security/content-security-policy/)
* [React-Prerender](https://github.com/Robert-W/react-prerender)
