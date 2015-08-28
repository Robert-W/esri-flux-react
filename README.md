# esri-flux-react  [![Build Status](https://travis-ci.org/Robert-W/esri-flux-react.svg?branch=master)](https://travis-ci.org/Robert-W/esri-flux-react)
Simple demo application using Esri's JavaScript API and React. It also shows how to use the Flux architecture in a map based application.  This is using a naive implementation of flux I wrote myself based off of [React's TODO MVC example](https://facebook.github.io/flux/docs/todo-list.html), it's good at demonstrating the concepts of Flux but is by no means intended to be a Flux library.  It would work perfectly fine in production on a simple app but once your app gets larger and has multiple stores, especially stores that depend on each other, you may want to use something like [Alt](http://alt.js.org/) which has ```waitsFor``` in the dispatcher as well as other extras and is much more battle tested.

## Demo
<a href='http://robert-w.github.io/esri-flux-react/'>http://robert-w.github.io/esri-flux-react/</a>

### Getting Started
This project requires node.js and bower.

1. Run (may need sudo depending on how you installed node): ```npm install```
2. Run: ```bower install```

### Scripts

#### Development
Run: ```npm start```

This will compile all stylus, jade, and es6 modules, and it's using babel for es6 modules so it will compile JSX for you as well.

#### Production
Run: ```npm run dist```

Generates a minified build using a custom prerender script, requirejs optimizer, babel, stylus, jade, and gulp in a dist folder.  After running, you can look at the index.html source and you will notice a big string of React markup generated from prerender.js.

##### Notes
Check out the react-motion branch.  Instead of using css animations on the basemap gallery it is using [react-motion](https://github.com/chenglou/react-motion) by @chenglou, I like this version much better and it will soon be merged in to master :)

##### Known Issues
Build commands may trip up on windows, there is an ```npm run  distWin``` which can be used for a custom build on windows.
