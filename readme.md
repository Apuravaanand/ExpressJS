<!-- Add this style once at top -->
<style>
  body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #e5e7eb;
    background-color: #020617;
  }

  h1 { color: #22c55e; }
  h2 { color: #38bdf8; }
  h3 { color: #facc15; }

  p { color: #cbd5f5; }

  b { color: #f97316; }

  code {
    color: #22c55e;
  }

  pre {
    background: #020617;
    padding: 10px;
    border-radius: 8px;
    color: #22c55e;
    overflow-x: auto;
  }

  ul li {
    color: #cbd5f5;
    margin-bottom: 6px;
  }

  hr {
    border-color: #1e293b;
  }

  .card {
    background:#0f172a;
    padding:20px;
    border-radius:10px;
    color:white;
  }
</style>

<div class="card">

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









<hr><hr>






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


<hr><hr>

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


<hr><hr>




# 🚀 Creating Server with Node.js

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















<hr><hr>




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


<hr><hr>

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







<hr><hr>


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



<hr><hr>



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


<hr>
<hr>

## ⚙️ Middleware & Advanced Express

<p>Improve your backend architecture by using <b>advanced Express concepts</b> to build secure, scalable, and production-ready applications.</p>

<hr>

<h3>🎯 Goal</h3>
<p>Write clean, secure, and production-ready backend code using middleware and best practices.</p>

<hr>

<div style="background:#0f172a; padding:20px; border-radius:10px; color:white; font-family:Arial;">

<h2>📘 Topics to Learn</h2>

<ul>
  <li>Custom middleware</li>
  <li>Global error handler</li>
  <li>Request validation</li>
  <li>Rate limiting</li>
  <li>CORS</li>
  <li>Helmet (security headers)</li>
</ul>

<hr>

<h2>1️⃣ Custom Middleware</h2>
<p>Create reusable logic that runs before route handlers.</p>

<pre><code>const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(logger);</code></pre>

<hr>

<h2>2️⃣ Global Error Handler</h2>
<p>Handle all errors in one place.</p>

<pre><code>app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: 'Internal Server Error' });
});</code></pre>

<hr>

<h2>3️⃣ Request Validation</h2>
<p>Validate incoming data before processing.</p>

<pre><code>app.post('/user', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  res.json({ message: 'Valid Data' });
});</code></pre>

<hr>

<h2>4️⃣ Rate Limiting</h2>
<p>Prevent abuse by limiting API requests.</p>

<pre><code>const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

app.use(limiter);</code></pre>

<hr>

<h2>5️⃣ CORS</h2>
<p>Allow or restrict cross-origin requests.</p>

<pre><code>const cors = require('cors');

app.use(cors());</code></pre>

<hr>

<h2>6️⃣ Helmet (Security)</h2>
<p>Secure your app by setting HTTP headers.</p>

<pre><code>const helmet = require('helmet');

app.use(helmet());</code></pre>

</div>

<hr>

<h3>✅ Summary</h3>
<p>Advanced Express concepts help you build secure, maintainable, and production-ready backend systems with proper error handling and protection.</p>

<hr><hr>


# 📁 File Upload & Cloud Storage

<p>Handle real-world features like uploading images and managing files securely using <b>Node.js and cloud services</b>.</p>

<hr>

<h3>🎯 Goal</h3>
<p>Manage user files efficiently with proper validation, storage, and security.</p>

<hr>

<div style="background:#0f172a; padding:20px; border-radius:10px; color:white; font-family:Arial;">

<h2>📘 Topics to Learn</h2>

<ul>
  <li>Multer (file upload middleware)</li>
  <li>File validation</li>
  <li>Image upload</li>
  <li>Cloudinary / AWS S3 basics</li>
  <li>File security</li>
</ul>

<hr>

<h2>1️⃣ Multer (File Upload)</h2>
<p>Multer is used to handle multipart/form-data (file uploads).</p>

<pre><code>const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded');
});</code></pre>

<hr>

<h2>2️⃣ File Validation</h2>
<p>Validate file type and size before uploading.</p>

<pre><code>const upload = multer({
  limits: { fileSize: 1024 * 1024 }, // 1MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'image/jpeg') {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  }
});</code></pre>

<hr>

<h2>3️⃣ Image Upload</h2>
<p>Handle image uploads from client.</p>

<pre><code>&lt;form action=\"/upload\" method=\"POST\" enctype=\"multipart/form-data\"&gt;
  &lt;input type=\"file\" name=\"file\" /&gt;
  &lt;button type=\"submit\"&gt;Upload&lt;/button&gt;
&lt;/form&gt;</code></pre>

<hr>

<h2>4️⃣ Cloud Storage (Cloudinary Example)</h2>
<p>Store files in cloud instead of local storage.</p>

<pre><code>const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload('file.jpg', (result) => {
  console.log(result.secure_url);
});</code></pre>

<hr>

<h2>5️⃣ File Security</h2>
<p>Protect your application from malicious uploads.</p>

<ul>
  <li>Validate file type & size</li>
  <li>Rename files securely</li>
  <li>Store files in cloud (avoid local exposure)</li>
</ul>

</div>

<hr>

<h3>✅ Summary</h3>
<p>File upload and cloud storage are essential for real-world apps, enabling users to upload and manage files securely and efficiently.</p>

<hr>
<hr>


# ⚙️ Environment & Configuration

<p>Manage different environments and keep your application <b>secure, flexible, and production-ready</b> using environment variables and configuration patterns.</p>

<hr>

<h3>🎯 Goal</h3>
<p>Enable safe and flexible deployment across development and production environments.</p>

<hr>

<div style="background:#0f172a; padding:20px; border-radius:10px; color:white; font-family:Arial;">

<h2>📘 Topics to Learn</h2>

<ul>
  <li>.env files</li>
  <li>Environment variables</li>
  <li>Development vs Production setup</li>
  <li>Config file structure</li>
</ul>

<hr>

<h2>1️⃣ .env Files</h2>
<p>Store sensitive data like API keys and database URLs.</p>

<pre><code>PORT=3000
DB_URL=mongodb://localhost:27017/app
JWT_SECRET=mysecret</code></pre>

<p><b>Install dotenv:</b></p>

<pre><code>npm install dotenv</code></pre>

<pre><code>require('dotenv').config();</code></pre>

<hr>

<h2>2️⃣ Environment Variables</h2>
<p>Access variables using <b>process.env</b>.</p>

<pre><code>const port = process.env.PORT;
console.log(port);</code></pre>

<hr>

<h2>3️⃣ Dev vs Production Setup</h2>

<ul>
  <li><b>Development:</b> Debugging, local database</li>
  <li><b>Production:</b> Optimized, secure configs</li>
</ul>

<pre><code>if (process.env.NODE_ENV === 'production') {
  console.log('Running in production');
}</code></pre>

<hr>

<h2>4️⃣ Config File Structure</h2>
<p>Organize configuration in separate files.</p>

<pre><code>// config/db.js
module.exports = {
  url: process.env.DB_URL
};</code></pre>

<pre><code>// app.js
const db = require('./config/db');
console.log(db.url);</code></pre>

<hr>

<h2>🔐 Best Practices</h2>

<ul>
  <li>Never commit .env file to GitHub</li>
  <li>Use .env.example for reference</li>
  <li>Keep secrets secure</li>
  <li>Use different configs for dev & production</li>
</ul>

</div>

<hr>

<h3>✅ Summary</h3>
<p>Environment configuration ensures your application is secure, scalable, and adaptable across different deployment stages.</p><hr><hr>



# 🧪 Testing & Debugging

<p>Ensure application quality by writing tests and debugging issues effectively. This is essential for building <b>reliable and maintainable backend systems</b>.</p>

<hr>

<h3>🎯 Goal</h3>
<p>Build bug-free applications with proper testing and debugging practices.</p>

<hr>

<div style="background:#0f172a; padding:20px; border-radius:10px; color:white; font-family:Arial;">

<h2>📘 Topics to Learn</h2>

<ul>
  <li>Unit testing</li>
  <li>Integration testing</li>
  <li>Jest / Mocha</li>
  <li>API testing with Postman</li>
  <li>Debugging Node.js</li>
</ul>

<hr>

<h2>1️⃣ Unit Testing</h2>
<p>Test individual functions or components.</p>

<pre><code>// sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;</code></pre>

<pre><code>// sum.test.js (Jest)
const sum = require('./sum');

test('adds 2 + 3 = 5', () => {
  expect(sum(2, 3)).toBe(5);
});</code></pre>

<hr>

<h2>2️⃣ Integration Testing</h2>
<p>Test how multiple components work together.</p>

<pre><code>// Example using supertest
const request = require('supertest');
const app = require('./app');

test('GET /users', async () => {
  const res = await request(app).get('/users');
  expect(res.statusCode).toBe(200);
});</code></pre>

<hr>

<h2>3️⃣ Jest / Mocha</h2>
<p>Popular testing frameworks for Node.js.</p>

<pre><code>npm install jest -D
npm install mocha -D</code></pre>

<pre><code>// package.json
"scripts": {
  "test": "jest"
}</code></pre>

<hr>

<h2>4️⃣ API Testing (Postman)</h2>
<p>Test APIs manually using Postman.</p>

<ul>
  <li>Send GET, POST, PUT, DELETE requests</li>
  <li>Check response status and data</li>
  <li>Automate API testing workflows</li>
</ul>

<hr>

<h2>5️⃣ Debugging Node.js</h2>
<p>Find and fix bugs efficiently.</p>

<pre><code>console.log('Debugging...');</code></pre>

<pre><code>node --inspect app.js</code></pre>

<ul>
  <li>Use breakpoints in VS Code</li>
  <li>Check logs and errors</li>
  <li>Analyze stack traces</li>
</ul>

</div>

<hr>

<h3>✅ Summary</h3>
<p>Testing and debugging ensure your application works correctly, reduces bugs, and improves code quality in production environments.</p>
<hr><hr>




# ⚡ Performance & Optimization

<p>Improve your application's speed and scalability by understanding how Node.js works under the hood and applying performance best practices.</p>

<hr>

<h3>🎯 Goal</h3>
<p>Build a <b>high-performance backend</b> that can handle large traffic efficiently.</p>

<hr>

<div style="background:#0f172a; padding:20px; border-radius:10px; color:white; font-family:Arial;">

<h2>📘 Topics to Learn</h2>

<ul>
  <li>Event Loop</li>
  <li>Async operations</li>
  <li>Clustering</li>
  <li>Caching (Redis basics)</li>
  <li>Memory leaks</li>
</ul>

<hr>

<h2>1️⃣ Event Loop</h2>
<p>Node.js uses a <b>single-threaded event loop</b> to handle multiple requests efficiently.</p>

<pre><code>console.log('Start');

setTimeout(() => {
  console.log('Async Task');
}, 1000);

console.log('End');</code></pre>

<p><b>Output:</b> Start → End → Async Task</p>

<hr>

<h2>2️⃣ Async Operations</h2>
<p>Use non-blocking code to improve performance.</p>

<pre><code>// Blocking ❌
const data = fs.readFileSync('file.txt');

// Non-blocking ✅
fs.readFile('file.txt', (err, data) => {
  console.log(data);
});</code></pre>

<hr>

<h2>3️⃣ Clustering</h2>
<p>Use multiple CPU cores to scale your app.</p>

<pre><code>const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  os.cpus().forEach(() => cluster.fork());
} else {
  console.log('Worker running');
}</code></pre>

<hr>

<h2>4️⃣ Caching (Redis Basics)</h2>
<p>Store frequently used data in memory for faster access.</p>

<pre><code>// Example concept
client.set('key', 'value');
client.get('key');</code></pre>

<hr>

<h2>5️⃣ Memory Leaks</h2>
<p>Avoid unnecessary memory usage.</p>

<ul>
  <li>Remove unused variables</li>
  <li>Clear timers and listeners</li>
  <li>Avoid global variables</li>
</ul>

</div>

<hr>

<h3>✅ Summary</h3>
<p>Performance optimization ensures your backend is fast, scalable, and efficient under heavy load.</p>


<hr>
<hr>


# 🚀 Deployment & DevOps Basics

<p>Learn how to take your application from development to production by deploying it on servers and managing it efficiently.</p>

<hr>

<h3>🎯 Goal</h3>
<p>Deploy real-world applications and manage them in production environments.</p>

<hr>

<div style="background:#0f172a; padding:20px; border-radius:10px; color:white; font-family:Arial;">

<h2>📘 Topics to Learn</h2>

<ul>
  <li>Hosting options (Render, Railway, AWS)</li>
  <li>Build process</li>
  <li>PM2 (Process Manager)</li>
  <li>Reverse proxy (Nginx basics)</li>
  <li>CI/CD basics</li>
</ul>

<hr>

<h2>1️⃣ Hosting Options</h2>
<p>Deploy your app to cloud platforms.</p>

<ul>
  <li><b>Render / Railway:</b> Easy deployment</li>
  <li><b>AWS:</b> Scalable cloud infrastructure</li>
</ul>

<hr>

<h2>2️⃣ Build Process</h2>
<p>Prepare your app for production.</p>

<pre><code>npm install
npm run build
npm start</code></pre>

<hr>

<h2>3️⃣ PM2 (Process Manager)</h2>
<p>Run and manage Node.js apps in production.</p>

<pre><code>npm install -g pm2

pm2 start app.js
pm2 list
pm2 restart app</code></pre>

<hr>

<h2>4️⃣ Reverse Proxy (Nginx)</h2>
<p>Forward client requests to your Node.js server.</p>

<pre><code># nginx config example
server {
  listen 80;

  location / {
    proxy_pass http://localhost:3000;
  }
}</code></pre>

<hr>

<h2>5️⃣ CI/CD Basics</h2>
<p>Automate testing and deployment.</p>

<ul>
  <li>Continuous Integration (CI)</li>
  <li>Continuous Deployment (CD)</li>
</ul>

<pre><code># Example workflow
git push → build → test → deploy</code></pre>

</div>

<hr>

<h3>✅ Summary</h3>
<p>Deployment and DevOps practices help you run, scale, and maintain your application reliably in real-world environments.</p>


<hr><hr>

# 🚀 Real-World Projects

<p>Practice is the key to mastery. Build real-world projects to strengthen your backend skills and become <b>job-ready</b>.</p>

<hr>

<h3>🎯 Goal</h3>
<p>Apply concepts in real applications and build a strong portfolio.</p>

<hr>

<div style="background:#0f172a; padding:20px; border-radius:10px; color:white; font-family:Arial;">

<h2>📘 Projects to Build</h2>

<ul>
  <li>REST API</li>
  <li>Authentication system</li>
  <li>Blog backend</li>
  <li>E-commerce backend</li>
  <li>Social media backend</li>
  <li>Real-time chat app (Socket.io)</li>
</ul>

<hr>

<h2>1️⃣ REST API</h2>
<p>Build a structured API with proper routes, controllers, and database integration.</p>

<pre><code>GET /api/users
POST /api/users
PUT /api/users/:id
DELETE /api/users/:id</code></pre>

<hr>

<h2>2️⃣ Authentication System</h2>
<p>Implement secure login and registration.</p>

<pre><code>// Features
- JWT authentication
- Password hashing (bcrypt)
- Protected routes</code></pre>

<hr>

<h2>3️⃣ Blog Backend</h2>
<p>Create APIs for blog management.</p>

<pre><code>// Features
- Create / Read / Update / Delete posts
- Comments system
- User authentication</code></pre>

<hr>

<h2>4️⃣ E-commerce Backend</h2>
<p>Handle real-world business logic.</p>

<pre><code>// Features
- Products & categories
- Cart & orders
- Payment integration (basic)</code></pre>

<hr>

<h2>5️⃣ Social Media Backend</h2>
<p>Build scalable systems like modern apps.</p>

<pre><code>// Features
- User profiles
- Follow / unfollow
- Posts & likes</code></pre>

<hr>

<h2>6️⃣ Real-Time Chat App</h2>
<p>Use WebSockets for live communication.</p>

<pre><code>const io = require('socket.io')(server);

io.on('connection', (socket) => {
  socket.on('message', (msg) => {
    io.emit('message', msg);
  });
});</code></pre>

</div>

<hr>

<h3>✅ Summary</h3>
<p>Building real-world projects helps you apply knowledge, gain experience, and become confident in backend development.</p>



</div>
