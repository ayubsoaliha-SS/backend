//Middleware functions are the "steps" a request goes
//  through before a response is sent.
// The Signature: (req, res, next) => { ... }
// The Chain: Express executes these functions in the
//  order they are defined.
// next(): This is crucial. If you don't call next(), 
// the request will hang and never 
// move to the next function or route handler.


app.use((req, res, next) => {
  console.log("Middleware executed");
  next();
});