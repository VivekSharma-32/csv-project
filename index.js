const express = require("express");
const app = express();
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
require("dotenv").config();
const db = require("./config/mongoose");

const PORT = process.env.PORT || 8000;

app.use(expressLayouts);

//ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//routes
app.use("/", require("./routes/csvRoutes"));

//server listening
app.listen(PORT, (err) => {
  if (err) console.log("error listening on", PORT);

  console.log("listening on port", PORT);
});
