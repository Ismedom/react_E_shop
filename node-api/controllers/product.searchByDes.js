//
app.get("/protected-route", authenticateApiKey, (req, res) => {
  res.json({ message: "Access granted to protected route" });
});
