const express = require("express");
require('dotenv').config();
// const path = require("path");
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

// set the backend server port
const port = process.env.PORT || 5000;

// setup routes
app.use('/api/users', userRoutes);
app.use('/posts', postRoutes);

// TODO add the code to serve build folder

const server = app.listen(port, () => {
  console.log(`Backend server running and listening on port ${port}`);
});
