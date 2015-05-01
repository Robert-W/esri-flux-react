# esri-flux-react
Simple demo application using Esri's JavaScript API and React. It also shows how to use the Flux architecture in a map based application.

## Demo
<a href='http://robert-w.github.io/esri-flux-react/'>http://robert-w.github.io/esri-flux-react/</a>

### Installation
<p>This project requires node.js and bower.</p>

<ol>
	<li>Run (may need sudo depending on how you installed node): <code>npm install</code></li>
	<li>Run: <code>bower install</code></li>
</ol>

### npm scripts

#### <code>npm start</code>
<p>This command will trigger a watch that builds and watches .jade, .styl, and react's .jsx files.</p>

#### <code>npm run build</code>
<p>This command will trigger a build that minifies and optimizes the .jade, .styl, and .jsx files.  It also uses RequireJS Optimizer to bundle all the modules into a single file.</p>

### Getting Started
<p>Before you can use the application, you need to generate the src files.  Run <code>npm start</code> from the root directory.  This will generate the html, js, and css files necessary to run the application.</p>

#### html
Jade (<a href='http://jade-lang.com/'>http://jade-lang.com/</a>) is used for html templating.  There is an svg.jade that the jade command line tool builds into the main index.jade and there is an index.json object bound to index.jade which allows for interpolation.

#### css
Stylus (<a href='https://learnboost.github.io/stylus/'>https://learnboost.github.io/stylus/</a>) is used for css.  It's a simple expressive syntax that can easily help build your css and structure it in a friendlier format.  It also allows for easy configuration with the use of variables.  Look in the config.styl near the bottom and try changing the variables to see how it effects the app.  You can also import other stylus files.

The stylus command line tool will append line numbers and comments to the built css when you run <code>npm start</code> but not when you build since we want the build file to be as small as possible.

#### js
JavaScript is written in AMD like normal esri applications.  For the react components it's using jsx syntax (<a href='https://facebook.github.io/react/docs/jsx-in-depth.html'>https://facebook.github.io/react/docs/jsx-in-depth.html</a>) since it is more readable and easier to work with than its js counterpart.