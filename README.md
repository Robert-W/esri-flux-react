# esri-flux-react
Simple demo application using Esri's JavaScript API and React. It also shows how to use the Flux architecture in a map based application.

## Demo
<a href='http://robert-w.github.io/esri-flux-react/'>http://robert-w.github.io/esri-flux-react/</a>

### Getting Started
<p>This project requires node.js and bower.</p>

<ol>
	<li>Run (may need sudo depending on how you installed node): <code>npm install</code></li>
	<li>Run: <code>bower install</code></li>
</ol>

### Scripts

#### Development
<p>Run: <code>npm start</code></p>
<p>This will compile all stylus, jade, and es6 modules, and it's using babel for es6 modules so it will compile JSX for you as well.</p>

#### Production
<p>Run: <code>npm run dist</code></p>
<p>Generates a minified build using a custom prerender script, requirejs optimizer, babel, stylus, jade, and gulp in a dist folder.  After running, you can look at the index.html source and you will notice a big string of React markup generated from prerender.js.</p>
