1. What is Express.js?
Express is a "minimalist" web framework for Node.js. Think of it as a wrapper that simplifies Node's built-in http module.
Why use it? 
Plain Node.js requires manual parsing of URLs, bodies, and headers for every route. 
Express provides a clean API for routing, middleware, and standardized request/response handling (like res.json() or res.send()).

2. Middleware & The Chain 
Middleware functions are the "steps" a request goes through before a response is sent.
The Signature: (req, res, next) => { ... }
The Chain: Express executes these functions in the order they are defined.
next(): This is crucial. If you don't call next(), the request will hang and never move to the next function or route handler.

3. Types of Middleware Application-level:
 Bound to the app object using app.use(). 
Runs for every request.
Router-level: Bound to an instance of express.Router(). Useful for modularizing code (e.g., all /api routes).
Built-in: Ready-to-use functions like express.json() (to parse JSON bodies).
Error-handling: Identified by having 4 arguments instead of 3: (err, req, res, next).

4. Error Handling 
To trigger the error handler, you pass an argument to next()—e.g., next(new Error("Failed")). 
Express will skip all regular middleware and jump straight to the first middleware defined with 4 parameters.
Golden Rule: Always define your error-handling middleware last, after all other app.use() and route calls.

5. app.use() vs. app.get()
app.use(): Used for middleware. It matches any HTTP method (GET, POST, etc.) and matches "starts with" paths (e.g., /user matches /user/profile).
app.get(): Used for specific routes. It matches only the GET method and requires an exact path match.

6. Route Params vs. Query Strings
Route Params: Part of the URL path, used for identifying specific resources.URL: /users/42 → Access: req.params.id (defined as /users/:id)
Query Strings: Optional key-value pairs at the end of a URL, used for filtering/sorting.URL: /users?sort=desc → Access: req.query.sort
 
7. Structuring Large Applications
As an app grows, putting everything in index.js becomes a nightmare. 
A professional structure uses the Separation of Concerns:
Routes (/routes): Define the endpoints and map them to controllers. (e.g., router.get('/:id', userController.getUser)).
Controllers (/controllers): Handle the "web" logic. They extract data from req, call the necessary services, and send the res.
Services (/services): This is where the business logic lives. Services interact with the database or third-party APIs. They shouldn't know anything about req or res
.Models (/models): Define the data schema (Mongoose schemas, Sequelize models, etc.).

Why this way? 
It makes your code testable. You can test your Service logic without needing to mock an entire HTTP request.