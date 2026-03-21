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