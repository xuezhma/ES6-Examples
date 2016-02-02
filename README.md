<h1>ES6-Examples</h1> 
<p>Learn ES6 features with examples</p>
<h2>What are Included Here:</h2>
<ul>
<li>Setup ES6 with Babel</li>
<li>Compile ES6 in Terminal</li>
<li>Compile and highlight syntax in Sublime Test Editor (Not necessary, but makes life much easier)</li>
<li>Examples of ES6 features as well as how to do them in ES5</li>
</ul>

<h2> Set up ES6 with Babel:</h2>

<p>0. Install the newest Node.js if it's not at v5.x</p>
<p>1. Intial a npm package:</p>
```bash
$ npm init
```
<p>2. Install babel:</p>
```bash
$ npm install --save-dev babel-cli
```
<p>3. Install babel-preset-es2015:</p>
```bash
$ npm install --save-dev babel-preset-es2015
```

<p>4. Create a file called .babelrc: </p>
```bash
{
	"presets": ["es2015"]
}
```
<h2> Compile ES6 in Terminal </h2>
```bash
$ babel-node filename --presets es2015
```

<h2> Compile ES6 in Sublime</h2>
<p>0. Install this Sublime package: <a target="_blank" href ="https://packagecontrol.io/packages/JavaScriptNext%20-%20ES6%20Syntax">Click Here </a></p>
<p>1. Open Sublime, go to:</p>
```bash
Tools -> Build System -> Build New System
```

<p>2. Save this file as 'ES6.sublime-build': </p>
```bash
{
  "cmd": ["babel-node", "$file"],
  "selector": "source.js",
  "path": "/usr/local/bin:$PATH"
}
```
<p>3. Set ES6 as your JavaScript syntax in Sublime:</p>
```bash
View -> Syntax -> JavascriptNext
```
<p>4. Set ES6 as your build system in Sublime:</p>
```bash
Tools -> Build System -> ES6
```
<p>5. Use "Command + B" to compile a ES6 file. Use "Control + C" to kill it.

<h2>Examples</h2>
<p>Examples are all under folder 'examples'.</p>
<p>Each file contains one feature.</p>
<p>ES6 examples are not commented out while ES5 examples are.</p>

<h2>Addition Notes</h2>
<p>Downloading this repo won't set up anything for you.</p>
<p>I recommand only download the "examples" folder.</p>
<p>Babel recommands people to install babel locally for each project.</p>
