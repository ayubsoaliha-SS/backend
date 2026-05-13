try {
  const data = await fetchData();
} catch (err) {
  console.log(err);
}


app.get('/user', async (req, res, next) => {
  try {
    const data = await db.query('SELECT...');
    res.send(data);
  } catch (err) {
    next(err); // Pass error to Express error handler
  }
});