app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: err.message
  });
});


app.use((err, req, res, next) => {
  console.error(err.stack); // Log for internal tracking
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    status: 'error',
    message: err.message || 'Internal Server Error'
  });
});

// use next(err): In routes, pass errors to next(err).
 app.get('/', async (req, res, next) => {
  try {
    throw new Error('Something broke');
  } catch (err) {
    next(err);
  }
});