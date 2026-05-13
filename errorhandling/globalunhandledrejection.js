process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Log the error using a logger like Winston
  // Gracefully shut down
  process.exit(1); 
});