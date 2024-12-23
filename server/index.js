const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  const open = await import("open");
  open.default(`http://localhost:${PORT}/api`);
});
