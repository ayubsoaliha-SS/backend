What is Node.js vs. Browser JS?

Node.js is a runtime environment that lets you run JavaScript on the server. It uses Google’s V8 engine to compile JS into machine code.
The Difference: 
Browser JS interacts with the DOM (the UI). Node.js has no DOM; instead, it provides low-level APIs like fs (file system), http (networking), and os (operating system) to interact with the machine directly.

2. The Event Loop 
The Event Loop is what allows Node.js to perform non-blocking I/O operations despite being single-threaded.
How it works:
Call Stack: Executes synchronous code.
Node APIs: Asynchronous tasks (like a timer or file read) are offloaded here.
Callback Queue: Once a task finishes, its callback waits here.
Event Loop: Continuously checks if the stack is empty. If it is, it pushes the first callback from the queue to the stack to be executed.

3. Promises
A Promise is an object representing the eventual completion (or failure) of an asynchronous operation.
Difference: 
Callbacks are passed as arguments to functions; 
Promises are returned from functions. This allows for .then() and .catch() chaining, which is much cleaner than nesting.

4. Async/Await
This is syntactic sugar built on top of Promises. It makes asynchronous code look and behave like synchronous code.
Internally: When the engine hits an await, it pauses the execution of that specific async function and yields control back to the event loop. The main thread is never blocked.

CommonJS (CJS) is the legacy module system originally designed for Node.js, while ES Modules (ESM) is the modern, official ECMAScript standard used in both browsers and modern Node.js.Core 

ComparisonFeature
CommonJS (CJS).                         
Syntaxrequire() / module.exports.     
Synchronous:Blocks execution until module  is loaded ..
AnalysisDynamic: Evaluated at runtime;                   
 require() can be  imports are hoisted to the top used inside if statements.; ..
Tree-shaking.  No: Hard for bundlers to remove unused code due   to dynamic nature.                               
 ES Modules (ESM)
 import / export Loading
 Asynchronous: Allows concurrent loading of the multiple  modules
 static: Analyzed at compile time
  Yes: Static structure allows bundlers to remove "dead code easily. "

Key Practical Differences
 Default in Node.js: Files ending in .js are treated as CommonJS by default unless you add "type": "module" to your package.json.
File Extensions: ESM typically uses .mjs or requires full file paths (including extensions) for imports, whereas CJS (.cjs) can often omit extensions.
Interoperability: You can import CJS into ESM relatively easily, but using require() to load an ESM module will result in an error.
Top-Level Await: ESM supports using await at the top level of a file; CJS requires wrapping it in an async function.
Recommendation:
 For new projects, use ES Modules. It is the official standard and provides better performance optimizations for web applications.

Core Node.js Modules Beyond the ones you listed, these modules form the backbone of the runtime:

fs (File System): Allows you to interact with the file system (read/write files, create directories).

path: Provides utilities for working with file and directory paths across different operating systems.

http / https: Used to create HTTP servers or make requests to other servers.

events: Contains the EventEmitter class, used to handle custom events.

os: Provides information about the operating system (memory, CPU, uptime).

crypto: Handles OpenSSL cryptographic functions (hashing, encryption, signing).

stream: Used to handle streaming data (reading large files in chunks instead of all at once).

child_process: Allows you to run external system commands or other scripts in a new process.

url: Utilities for URL resolution and parsing.

4. on() vs. once()
on(): The listener stays active. If the event is emitted 10 times, the function runs 10 times.
once(): The listener is triggered the first time the event occurs and is then immediately removed. Perfect for one-time setup tasks or cleanup.

5. Environment Variables
These are variables external to your code that configuration settings (like API keys or Port numbers).
Access: Use process.env.VARIABLE_NAME.
Security: You should never hardcode secrets (database passwords, private keys) directly in your code.
Management: Use the dotenv package to load variables from a .env file into process.env during development. Ensure .env is added to your .gitignore.


6. package.json: 
The Project Manifest This file is the "identity card" for your project. It stores metadata (name, version) and manages your project's dependencies.
dependencies: Packages required for the application to run in production.Example: express (web framework), mongoose (database).
devDependencies: Packages only needed during development and testing. These are not installed when you deploy to production with npm install --production.Example: nodemon (auto-restarts server), jest (testing framework), eslint (code linting).
