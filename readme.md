```javascript
app.get("/users", getUsers);

app.post("/users", createUser);

app.put("/users/1", replaceUser);

app.patch("/users/1", updateUser);

app.delete("/users/1", deleteUser);
```

| $$
Code | Meaning      |
| ---- | ------------ |
| 200  | Success      |
| 201  | Created      |
| 400  | Bad Request  |
| 401  | Unauthorized |
| 403  | Forbidden    |
| 404  | Not Found    |
| 500  | Server Error |

$$


Term	                 Meaning
Authentication	        Who are you?
Authorization	            What can you access?

Example
// authentication
login(email, password)

// authorization
if(user.role === "admin")
4. Session-Based Authentication


What is HTTP? & The Request-Response CycleHTTP 

(Hypertext Transfer Protocol) is the "language" of the web. It is an application-layer protocol used to transmit hypermedia documents (like HTML) or data (like JSON).

The Cycle:Client Sends Request:

 The client (browser or app) opens a connection and sends an HTTP message containing a method, a URL, headers (metadata), and sometimes a body.
 Server Processes: The server parses the request, performs logic (e.g., fetching data from a database), and prepares a response.
 Server Sends Response: The server sends back a status code, headers, and the requested data (body).

Statelessness: This is the most critical feature. The server does not "remember" previous requests. Every request must contain all the information necessary to fulfill it (like an API key or token).

2. HTTP Methods (Verbs)These define the action to be performed on a resource.
GET: Retrieves data. It should have no side effects (it doesn't change anything on the server).
POST: Creates a new resource. It is usually not idempotent (sending it twice creates two items).
PUT: Replaces a resource entirely. If you miss a field in the body, that field may be deleted or set to null.
PATCH: Partially updates a resource. You only send the fields you want to change.
DELETE: Removes a resource.

3. HTTP Status CodesThese tell the client the result of their request.
200 OK: Standard success.
201 Created: Success, and a new resource was made (common after POST).
400 Bad Request: The server didn't understand the request (syntax error).
401 Unauthorized: You need to log in/authenticate.
403 Forbidden: You are logged in, but you don't have permission to see this specific resource.
404 Not Found: The resource doesn't exist.
500 Internal Server Error: The server crashed or encountered an unhandled exception.

4. What is REST? (Representational State Transfer)REST is an architectural style, not a strict protocol. It relies on these core principles:Client-Server: Separates the UI concerns from the data storage concerns.Stateless: No client context is stored on the server between requests.Cacheable: Responses must define themselves as cacheable or not to improve performance.Uniform Interface: Uses a standardized way to communicate (Resources are identified by URLs, and manipulated via HTTP methods).Layered System: A client cannot tell if it is connected directly to the end server or an intermediate (like a load balancer).

5. IdempotencyAn operation is idempotent if performing it multiple times has the same effect as performing it once.GET: Idempotent. Reading a page 10 times doesn't change the page.PUT: Idempotent. Replacing a file with the same content 10 times results in the same file.DELETE: Idempotent. Deleting an ID once removes it; deleting it again changes nothing (it’s already gone).POST: NOT idempotent. Clicking "Submit Order" twice might result in two charges.

6. API VersioningAPIs evolve, but you can’t break existing clients. There are two primary ways to version:
A. URI Versioning (Most Common)https://example.com
Pros: Easy to see, easy to cache, very clear.
Cons: "Pollutes" the URI; technically, a versioned URI points to a different resource.B. Header (Media Type) 

VersioningAccept: application/vnd.myapi.v1+json
Pros: Keeps URLs clean; follows the idea that "the resource is the same, only the representation changes."
Cons: Harder to test in a browser; requires more complex routing logic on the server.C.

 Query Parameter Versioninghttps://example.comPros: Simple to implement.Cons: Can interfere with caching and is generally considered less "RESTful" than the other two.