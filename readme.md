# 🚀 JavaScript Fundamentals (For Node.js Developers)

<p>Before starting with <b>Node.js & Express</b>, you must understand core JavaScript concepts. These fundamentals help you write clean, scalable, and asynchronous backend code.</p>

<hr>

<div style="background:#0f172a; padding:20px; border-radius:10px; color:white; font-family:Arial;">

<h2>1️⃣ Variables</h2>
<p>Used to store data. <b>let</b> and <b>const</b> are modern and preferred.</p>

<pre><code>let name = "John";
const age = 22;</code></pre>

<hr>

<h2>2️⃣ Data Types</h2>
<p>JavaScript supports different types of data like string, number, boolean, null, and undefined.</p>

<pre><code>let name = "Apurava"; // string
let age = 21; // number
let isDev = true; // boolean
let value = null;
let data; // undefined</code></pre>

<hr>

<h2>3️⃣ Conditions</h2>
<p>Used to make decisions in code.</p>

<pre><code>let age = 18;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}</code></pre>

<hr>

<h2>4️⃣ Loops</h2>
<p>Loops help repeat tasks efficiently.</p>

<pre><code>for (let i = 0; i < 3; i++) {
  console.log(i);
}

[1,2,3].forEach(n => console.log(n));</code></pre>

<hr>

<h2>5️⃣ Functions</h2>
<p>Functions are reusable blocks of code.</p>

<pre><code>function greet(name) {
  return "Hello " + name;
}

const greetArrow = (name) => `Hello ${name}`;</code></pre>

<hr>

<h2>6️⃣ Arrays & Objects</h2>
<p>Arrays store lists, objects store structured data.</p>

<pre><code>const users = ["Aman", "Riya"];

const user = {
  name: "Apurava",
  age: 21
};</code></pre>

<hr>

<h2>7️⃣ Scope & Hoisting</h2>
<p>Scope defines variable access. Hoisting moves declarations to the top.</p>

<pre><code>console.log(a); // undefined
var a = 10;</code></pre>

<hr>

<h2>8️⃣ Closures</h2>
<p>A function remembering variables from its outer scope.</p>

<pre><code>function outer() {
  let count = 0;
  return () => ++count;
}</code></pre>

<hr>

<h2>9️⃣ Promises</h2>
<p>Used for handling asynchronous operations.</p>

<pre><code>const fetchData = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve("Done"), 1000);
  });
};</code></pre>

<hr>

<h2>🔟 Async / Await</h2>
<p>Simplifies working with promises.</p>

<pre><code>async function load() {
  const data = await fetchData();
  console.log(data);
}</code></pre>

<hr>

<h2>1️⃣1️⃣ ES6+ Features</h2>
<p>Modern JavaScript features for cleaner code.</p>

<pre><code>// Destructuring
const { name } = { name: "Apurava" };

// Spread
const arr = [1,2];
const newArr = [...arr, 3];</code></pre>

</div>

<hr>

<h3>✅ Summary</h3>
<p>Master these basics before moving to Node.js. They are used daily in backend development.</p>










## 🚀 Introduction to Node.js

<p>Get comfortable with the <b>Node.js environment</b> and understand how JavaScript runs outside the browser.</p>

<hr>

<h3>🎯 Goal</h3>
<p>Run JavaScript outside the browser and build backend applications.</p>

<hr>

<div style="background:#0f172a; padding:20px; border-radius:10px; color:white; font-family:Arial;">

<h2>📘 Topics to Learn</h2>

<ul>
  <li>What is Node.js</li>
  <li>Node.js vs Browser JavaScript</li>
  <li>V8 Engine</li>
  <li>Installing Node.js & npm</li>
  <li>Running first Node.js app</li>
  <li>REPL</li>
  <li>Global objects (__dirname, __filename)</li>
</ul>

<hr>

<h2>1️⃣ What is Node.js?</h2>
<p>Node.js is a runtime environment that allows you to run JavaScript on the server.</p>

<hr>

<h2>2️⃣ Node.js vs Browser JavaScript</h2>
<ul>
  <li><b>Browser JS:</b> Runs in browser, handles UI</li>
  <li><b>Node.js:</b> Runs on server, handles backend logic</li>
</ul>

<hr>

<h2>3️⃣ V8 Engine</h2>
<p>Node.js uses Google Chrome’s <b>V8 Engine</b> to execute JavaScript code efficiently.</p>

<hr>

<h2>4️⃣ Install Node.js & npm</h2>

<pre><code>node -v   // check Node version
npm -v    // check npm version</code></pre>

<hr>

<h2>5️⃣ First Node.js App</h2>

<pre><code>// app.js
console.log("Hello Node.js");</code></pre>

<pre><code>node app.js</code></pre>

<hr>

<h2>6️⃣ REPL (Interactive Mode)</h2>

<pre><code>node</code></pre>

<p>Now you can write JavaScript directly in terminal.</p>

<hr>

<h2>7️⃣ Global Objects</h2>

<pre><code>console.log(__dirname);   // current folder
console.log(__filename);  // current file</code></pre>

</div>

<hr>

<h3>✅ Summary</h3>
<p>Node.js allows developers to run JavaScript outside the browser and build scalable backend systems.</p>