const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const htmlRoute = require("./routes/htmlRoutes");
const apiRoute = require("./routes/apiRoutes");

// set port
const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  userNewUrlParser: true,
});

app.use(htmlRoute);
app.use(apiRoute);

app.listen(PORT, () => {
  console.log(`App running on http://localhost ${PORT}`);
});
