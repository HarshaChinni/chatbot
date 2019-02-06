"use strict";

const config = require("../config");
const Mongoose = require("mongoose").connect(config.dbURI);

//Error is logged when the connection is failed
Mongoose.connection.on("error", error => {
  console.log("The connection error: ", error);
});

module.exports = {
  Mongoose
};
