//Error Handling 
// To trigger the error handler, you pass an argument to next()—
// e.g., next(new Error("Failed")). 
// Express will skip all regular middleware and jump straight 
// to the first middleware defined with
//  4 parameters.
// Golden Rule: Always define your error-handling middleware 
// last, after all other app.use() and route calls.



app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message
  });
});