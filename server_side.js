const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend", "intro.html"));
});

// Handle form submission
app.post("/submit", (req, res) => {
  console.log(req.body); // Log the form data
  res.redirect("/selection.html"); // Redirect to selection page
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
