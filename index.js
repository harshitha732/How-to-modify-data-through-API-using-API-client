// index.js

const express = require("express");
const path = require("path");

const app = express();
const port = 3020;

// Middleware
app.use(express.json());
app.use(express.static("static"));

// Import task routes
const taskRoutes = require("./routes/tasks.js");
app.use("/", taskRoutes);

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
