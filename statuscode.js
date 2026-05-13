app.get("/user/:id", (req, res) => {
  const user = null;

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  res.status(200).json(user);
});