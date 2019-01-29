const express = require("express");
require('dotenv').config();
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");

const app = express();

// initialize passport
app.use(passport.initialize());
require("./passport")(passport);

// setup mongodb connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(
  () => { console.log("Database is connected") },
  (err) => { console.log("Cannot connect to the database"+ err) }
);

// import routes
const userRoutes = require("./routes/UserRoute");
const postRoutes = require("./routes/PostRoute");

// setup middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// setup express to serve the static index.html built by react
app.use(express.static(path.join(__dirname, "build")));

// set the backend server port
const port = process.env.PORT || 5000;

// setup routes
app.use('/api/users', userRoutes);
app.use('/posts', postRoutes);

// a catchall route if any API calls aren't used, then serve the index.html built by react
// this needs to be after all other routes
// used for when deoployed to Heroku
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Backend server running and listening on port ${port}`);
});
