const express = require("express");
//const testRoutes = require("./routes/testRoutes"); // Fix typo here
const dotenv = require("dotenv");
const calculatorRoutes = require("./routes/calcRoutes");
//const userRoutes = require("./routes/userRoutes");
dotenv.config();

const app = express();
const port = process.env.PORT || 3000; // Default to 3000 if PORT is not defined

// Route setup
app.use(express.json());
//app.use("/tests", testRoutes);
app.use("/calculator", calculatorRoutes);
//app.use("/users", userRoutes);
//app.use("/home", express.static("public")); // Serve static files from 'public' on '/home'

// Catch-all route
app.use("/", (req, res) => {
  res.send("Hello");
});

// Start server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
