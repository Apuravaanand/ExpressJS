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


<hr>




# 🚀 Introduction to Node.js

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


<hr>
























# ⚙️ Node.js Core Modules

<p>Core modules are the <b>foundation of Node.js</b>. They allow you to work with files, create servers, handle system operations, and build backend logic without installing external libraries.</p>
<hr>
<h3>🎯 Goal</h3>
<p>Handle files, servers, paths, and system operations using built-in Node.js modules.</p>

<hr>

<div style="background:#0f172a; padding:20px; border-radius:10px; color:white; font-family:Arial;">

<h2>📘 Modules to Learn</h2>

<ul>
  <li>fs (File System)</li>
  <li>path</li>
  <li>os</li>
  <li>http</li>
  <li>events</li>
  <li>url</li>
  <li>crypto</li>
</ul>

<hr>

<h2>1️⃣ fs (File System)</h2>
<p>Used to read, write, and manage files.</p>

<pre><code>const fs = require('fs');

fs.writeFileSync('test.txt', 'Hello World');
const data = fs.readFileSync('test.txt', 'utf-8');

console.log(data);</code></pre>

<hr>

<h2>2️⃣ path</h2>
<p>Helps handle file and directory paths.</p>

<pre><code>const path = require('path');

const filePath = path.join(__dirname, 'test.txt');
console.log(filePath);</code></pre>

<hr>

<h2>3️⃣ os</h2>
<p>Provides system-related information.</p>

<pre><code>const os = require('os');

console.log(os.platform());
console.log(os.cpus());</code></pre>

<hr>

<h2>4️⃣ http</h2>
<p>Used to create servers.</p>

<pre><code>const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Server Running');
});

server.listen(3000);</code></pre>

<hr>

<h2>5️⃣ events</h2>
<p>Used for event-driven programming.</p>

<pre><code>const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('greet', () => {
  console.log('Hello Event');
});

emitter.emit('greet');</code></pre>

<hr>

<h2>6️⃣ url</h2>
<p>Used to parse URLs.</p>

<pre><code>const url = require('url');

const myUrl = new URL('http://localhost:3000/?name=Apurava');

console.log(myUrl.searchParams.get('name'));</code></pre>

<hr>

<h2>7️⃣ crypto</h2>
<p>Used for hashing and security.</p>

<pre><code>const crypto = require('crypto');

const hash = crypto.createHash('sha256')
  .update('password')
  .digest('hex');

console.log(hash);</code></pre>

</div>

<hr>

<h3>✅ Summary</h3>
<p>Core modules provide powerful built-in tools to handle files, servers, system info, events, and security — essential for backend development.</p>




## 📦 NPM & Package Management

<p>Learn how to use <b>external libraries</b> to speed up development and manage project dependencies efficiently.</p>

<hr>

<h3>🎯 Goal</h3>
<p>Manage third-party libraries and automate tasks using npm.</p>

<hr>

<div style="background:#0f172a; padding:20px; border-radius:10px; color:white; font-family:Arial;">

<h2>📘 Topics to Learn</h2>

<ul>
  <li>npm basics</li>
  <li>package.json</li>
  <li>Dependencies vs DevDependencies</li>
  <li>Semantic Versioning</li>
  <li>Common packages (nodemon, dotenv)</li>
  <li>Scripts in npm</li>
</ul>

<hr>

<h2>1️⃣ npm Basics</h2>
<p>npm (Node Package Manager) is used to install and manage packages.</p>

<pre><code>npm init -y        // create package.json
npm install express
npm uninstall express</code></pre>

<hr>

<h2>2️⃣ package.json</h2>
<p>This file stores project metadata and dependencies.</p>

<pre><code>{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node app.js"
  }
}</code></pre>

<hr>

<h2>3️⃣ Dependencies vs DevDependencies</h2>

<ul>
  <li><b>dependencies:</b> Required for production</li>
  <li><b>devDependencies:</b> Used only during development</li>
</ul>

<pre><code>npm install express        // dependency
npm install nodemon -D     // devDependency</code></pre>

<hr>

<h2>4️⃣ Semantic Versioning</h2>
<p>Version format: <b>MAJOR.MINOR.PATCH</b></p>

<pre><code>"express": "^4.18.2"</code></pre>

<ul>
  <li><b>^</b> → allows minor updates</li>
  <li><b>~</b> → allows patch updates</li>
</ul>

<hr>

<h2>5️⃣ Common Packages</h2>

<ul>
  <li><b>nodemon:</b> Auto-restart server</li>
  <li><b>dotenv:</b> Manage environment variables</li>
</ul>

<pre><code>npm install nodemon -D
npm install dotenv</code></pre>

<hr>

<h2>6️⃣ npm Scripts</h2>
<p>Automate commands using scripts.</p>

<pre><code>{
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  }
}</code></pre>

<pre><code>npm run dev</code></pre>

</div>

<hr>

<h3>✅ Summary</h3>
<p>npm helps manage dependencies, automate workflows, and use powerful third-party libraries efficiently in your projects.</p>



## 🌐 Creating Server with Node.js

<p>Learn how to build a <b>basic backend server</b> using Node.js without any frameworks.</p>

<hr>

<h3>🎯 Goal</h3>
<p>Build backend logic, handle requests, and send responses using core Node.js modules.</p>

<hr>

<div style="background:#0f172a; padding:20px; border-radius:10px; color:white; font-family:Arial;">

<h2>📘 Topics to Learn</h2>

<ul>
  <li>HTTP server using http module</li>
  <li>Handling routes manually</li>
  <li>Request methods (GET, POST, PUT, DELETE)</li>
  <li>Parsing request body</li>
  <li>Sending JSON response</li>
</ul>

<hr>

<h2>1️⃣ Create Basic HTTP Server</h2>
<p>Use the built-in <b>http module</b> to create a server.</p>

<pre><code>const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Server Running');
});

server.listen(3000, () => {
  console.log('Server started on port 3000');
});</code></pre>

<hr>

<h2>2️⃣ Handling Routes Manually</h2>
<p>Use <b>req.url</b> to manage routes.</p>

<pre><code>const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home Page');
  } else if (req.url === '/about') {
    res.end('About Page');
  } else {
    res.end('404 Not Found');
  }
});</code></pre>

<hr>

<h2>3️⃣ Request Methods</h2>
<p>Handle different HTTP methods using <b>req.method</b>.</p>

<pre><code>if (req.method === 'GET') {
  res.end('GET Request');
}

if (req.method === 'POST') {
  res.end('POST Request');
}</code></pre>

<hr>

<h2>4️⃣ Parsing Request Body</h2>
<p>Read incoming data from client.</p>

<pre><code>let body = '';

req.on('data', chunk => {
  body += chunk;
});

req.on('end', () => {
  console.log(body);
  res.end('Data received');
});</code></pre>

<hr>

<h2>5️⃣ Sending JSON Response</h2>
<p>Send structured data as JSON.</p>

<pre><code>res.writeHead(200, { 'Content-Type': 'application/json' });

res.end(JSON.stringify({
  message: 'Success'
}));</code></pre>

</div>

<hr>

<h3>✅ Summary</h3>
<p>Using Node.js core modules, you can create servers, handle routes, process requests, and send responses — forming the base of backend development.</p>




















## 🚀 Express.js (Most Important)

<p><b>Express.js</b> is a minimal and flexible Node.js framework that simplifies backend development and helps you build APIs quickly.</p>

<hr>

<h3>🎯 Goal</h3>
<p>Build scalable and maintainable APIs efficiently using Express.js.</p>

<hr>

<div style="background:#0f172a; padding:20px; border-radius:10px; color:white; font-family:Arial;">

<h2>📘 Topics to Learn</h2>

<ul>
  <li>What is Express</li>
  <li>Express setup</li>
  <li>Routing</li>
  <li>Middleware</li>
  <li>Request & Response objects</li>
  <li>Error handling</li>
  <li>Static files</li>
  <li>Express Router</li>
</ul>

<hr>

<h2>1️⃣ What is Express?</h2>
<p>Express is a lightweight framework that provides tools for routing, middleware, and handling HTTP requests easily.</p>

<hr>

<h2>2️⃣ Express Setup</h2>

<pre><code>npm init -y
npm install express</code></pre>

<pre><code>const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Server running on port 3000');
});</code></pre>

<hr>

<h2>3️⃣ Routing</h2>
<p>Handle different routes using HTTP methods.</p>

<pre><code>app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});</code></pre>

<hr>

<h2>4️⃣ Middleware</h2>
<p>Middleware functions run before the final request handler.</p>

<pre><code>app.use((req, res, next) => {
  console.log('Middleware running');
  next();
});</code></pre>

<hr>

<h2>5️⃣ Request & Response Objects</h2>

<pre><code>app.get('/user', (req, res) => {
  console.log(req.query);
  res.json({ message: 'User data' });
});</code></pre>

<hr>

<h2>6️⃣ Error Handling</h2>

<pre><code>app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Something went wrong' });
});</code></pre>

<hr>

<h2>7️⃣ Static Files</h2>

<pre><code>app.use(express.static('public'));</code></pre>

<p>Serve HTML, CSS, and images from the <b>public</b> folder.</p>

<hr>

<h2>8️⃣ Express Router</h2>
<p>Organize routes into separate files.</p>

<pre><code>// routes/user.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('User Route');
});

module.exports = router;</code></pre>

<pre><code>// app.js
const userRoutes = require('./routes/user');
app.use('/users', userRoutes);</code></pre>

</div>

<hr>

<h3>✅ Summary</h3>
<p>Express.js simplifies backend development by providing powerful routing, middleware, and API handling capabilities.</p>




## 🌐 RESTful API Development

<p>Learn how to design and build <b>clean, scalable, and reusable APIs</b> following REST principles.</p>

<hr>

<h3>🎯 Goal</h3>
<p>Build professional APIs with proper structure, naming, and scalability.</p>

<hr>

<div style="background:#0f172a; padding:20px; border-radius:10px; color:white; font-family:Arial;">

<h2>📘 Topics to Learn</h2>

<ul>
  <li>REST architecture</li>
  <li>CRUD operations</li>
  <li>Route naming conventions</li>
  <li>Controllers & Services</li>
  <li>Pagination</li>
  <li>Filtering & Sorting</li>
  <li>API Versioning</li>
</ul>

<hr>

<h2>1️⃣ REST Architecture</h2>
<p>REST (Representational State Transfer) is a design pattern for building APIs using HTTP methods.</p>

<ul>
  <li>GET → Fetch data</li>
  <li>POST → Create data</li>
  <li>PUT → Update data</li>
  <li>DELETE → Remove data</li>
</ul>

<hr>

<h2>2️⃣ CRUD Operations</h2>

<pre><code>// Create
POST /users

// Read
GET /users

// Update
PUT /users/1

// Delete
DELETE /users/1</code></pre>

<hr>

<h2>3️⃣ Route Naming Conventions</h2>
<p>Use clear and consistent naming.</p>

<pre><code>/users        // get all users
/users/1      // get single user
/users        // create user
</code></pre>

<p><b>Best Practice:</b> Use plural nouns (users, products, orders)</p>

<hr>

<h2>4️⃣ Controllers & Services</h2>
<p>Separate logic for clean architecture.</p>

<pre><code>// controller
const getUsers = (req, res) => {
  res.json({ message: "Users list" });
};

// service (business logic)
const fetchUsers = () => {
  return [];
};</code></pre>

<hr>

<h2>5️⃣ Pagination</h2>

<pre><code>GET /users?page=1&limit=10</code></pre>

<pre><code>const page = 1;
const limit = 10;
const offset = (page - 1) * limit;</code></pre>

<hr>

<h2>6️⃣ Filtering & Sorting</h2>

<pre><code>GET /users?age=20&sort=desc</code></pre>

<pre><code>SELECT * FROM users
WHERE age = 20
ORDER BY created_at DESC;</code></pre>

<hr>

<h2>7️⃣ API Versioning</h2>
<p>Version APIs for future updates.</p>

<pre><code>/api/v1/users
/api/v2/users</code></pre>

</div>

<hr>

<h3>✅ Summary</h3>
<p>RESTful APIs provide a structured way to build scalable backend systems with clean routes, proper logic separation, and efficient data handling.</p>










## 🗄️ Database (MongoDB + Mongoose)

<p>A backend application is incomplete without a <b>database</b>. Learn how to store, manage, and retrieve data efficiently using MongoDB and Mongoose.</p>

<hr>

<h3>🎯 Goal</h3>
<p>Store and manage application data properly with scalable database design.</p>

<hr>

<div style="background:#0f172a; padding:20px; border-radius:10px; color:white; font-family:Arial;">

<h2>📘 Topics to Learn</h2>

<ul>
  <li>What is a Database</li>
  <li>SQL vs NoSQL</li>
  <li>MongoDB basics</li>
  <li>Collections & Documents</li>
  <li>CRUD operations</li>
  <li>Mongoose schemas & models</li>
  <li>Relationships</li>
  <li>Indexing</li>
</ul>

<hr>

<h2>1️⃣ What is a Database?</h2>
<p>A database is used to store and manage data in an organized way for applications.</p>

<hr>

<h2>2️⃣ SQL vs NoSQL</h2>

<ul>
  <li><b>SQL:</b> Structured data, tables (MySQL, PostgreSQL)</li>
  <li><b>NoSQL:</b> Flexible data, JSON-like documents (MongoDB)</li>
</ul>

<hr>

<h2>3️⃣ MongoDB Basics</h2>
<p>MongoDB is a NoSQL database that stores data in JSON-like format.</p>

<pre><code>{
  "name": "Apurava",
  "age": 21
}</code></pre>

<hr>

<h2>4️⃣ Collections & Documents</h2>

<ul>
  <li><b>Collection:</b> Group of documents (like a table)</li>
  <li><b>Document:</b> Single record (JSON object)</li>
</ul>

<hr>

<h2>5️⃣ CRUD Operations</h2>

<pre><code>// Create
db.users.insertOne({ name: "John" });

// Read
db.users.find();

// Update
db.users.updateOne({ name: "John" }, { $set: { age: 25 } });

// Delete
db.users.deleteOne({ name: "John" });</code></pre>

<hr>

<h2>6️⃣ Mongoose Schemas & Models</h2>
<p>Mongoose helps structure and interact with MongoDB easily.</p>

<pre><code>const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const User = mongoose.model('User', userSchema);</code></pre>

<hr>

<h2>7️⃣ Relationships</h2>
<p>Handle relationships between data.</p>

<pre><code>// Example: User with posts
{
  name: "Apurava",
  posts: ["postId1", "postId2"]
}</code></pre>

<hr>

<h2>8️⃣ Indexing</h2>
<p>Improve query performance.</p>

<pre><code>userSchema.index({ name: 1 });</code></pre>

</div>

<hr>

<h3>✅ Summary</h3>
<p>MongoDB with Mongoose provides a flexible and powerful way to manage data, design schemas, and build scalable backend applications.</p>







## 🔐 Authentication & Authorization

<p>Security is critical in backend development. Learn how to <b>protect user data</b> and control access to resources.</p>

<hr>

<h3>🎯 Goal</h3>
<p>Secure your application using authentication and authorization techniques.</p>

<hr>

<div style="background:#0f172a; padding:20px; border-radius:10px; color:white; font-family:Arial;">

<h2>📘 Topics to Learn</h2>

<ul>
  <li>Authentication vs Authorization</li>
  <li>JWT (JSON Web Token)</li>
  <li>Password hashing (bcrypt)</li>
  <li>Login & Register APIs</li>
  <li>Role-based access</li>
  <li>Refresh tokens</li>
</ul>

<hr>

<h2>1️⃣ Authentication vs Authorization</h2>

<ul>
  <li><b>Authentication:</b> Verifying user identity (Login)</li>
  <li><b>Authorization:</b> Granting access to resources</li>
</ul>

<hr>

<h2>2️⃣ JWT (JSON Web Token)</h2>
<p>Used to securely transmit user data between client and server.</p>

<pre><code>const jwt = require('jsonwebtoken');

const token = jwt.sign({ userId: 1 }, 'secret', { expiresIn: '1h' });

console.log(token);</code></pre>

<hr>

<h2>3️⃣ Password Hashing (bcrypt)</h2>
<p>Never store plain passwords. Always hash them.</p>

<pre><code>const bcrypt = require('bcrypt');

const hash = await bcrypt.hash('password123', 10);

const isMatch = await bcrypt.compare('password123', hash);</code></pre>

<hr>

<h2>4️⃣ Register API</h2>

<pre><code>app.post('/register', async (req, res) => {
  const { password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  res.json({ message: 'User Registered', password: hashed });
});</code></pre>

<hr>

<h2>5️⃣ Login API</h2>

<pre><code>app.post('/login', async (req, res) => {
  const { password } = req.body;

  const isValid = await bcrypt.compare(password, 'hashedPassword');

  if (!isValid) return res.status(401).send('Invalid');

  const token = jwt.sign({ id: 1 }, 'secret');

  res.json({ token });
});</code></pre>

<hr>

<h2>6️⃣ Role-Based Access</h2>

<pre><code>const checkAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).send('Access Denied');
  }
  next();
};</code></pre>

<hr>

<h2>7️⃣ Refresh Tokens</h2>
<p>Used to generate new access tokens without logging in again.</p>

<pre><code>// Example concept
const accessToken = jwt.sign({ id: 1 }, 'secret', { expiresIn: '15m' });
const refreshToken = jwt.sign({ id: 1 }, 'refreshSecret');</code></pre>

</div>

<hr>

<h3>✅ Summary</h3>
<p>Authentication and authorization are essential for securing applications, protecting user data, and controlling access to system resources.</p>
