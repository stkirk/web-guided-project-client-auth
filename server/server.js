const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const port = process.env.PORT || 5000;
const app = express();
const data = require("./data");
const token = "ahuBHejkJJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA07i73Gebhu98";

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

function authenticator(req, res, next) {
  // STEP 5: authenticator is looking for a headers property in the req object that comes from our request, the headers property is an object with a key called authorization that contains our token value
  const { authorization } = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: "User must be logged in to do that." });
  }
}

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "lambda" && password === "school") {
    req.loggedIn = true;
    res.status(200).json({
      username: "lambdaSchool",
      role: "editor",
      token: token,
    });
  } else {
    res
      .status(403)
      .json({ error: "Username or Password incorrect. Please see Readme" });
  }
});

app.post("/api/logout", (req, res) => {
  //remove token from database
  res.status(200).json({
    payload: token,
  });
});

app.get("/api/data", authenticator, (req, res) => {
  setTimeout(() => {
    res.send(data);
  }, 1000);
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
