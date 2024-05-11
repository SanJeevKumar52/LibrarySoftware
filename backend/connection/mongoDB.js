require("dotenv").config();

const mongoose = require("mongoose");
mongoose
  .connect(
    `mongodb+srv://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PASSWORD}@cluster0.wmjz6si.mongodb.net/library_management?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Connected To Database");
  })
  .catch((err) => {
    console.log(err);
    console.log("Error in connecting Datbase");
  });

  // mongodb+srv://sk3616593:<password>@cluster0.wmjz6si.mongodb.net/
