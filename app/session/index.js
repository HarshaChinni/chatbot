"use strict";

const session = require("express-session");
const MongooseStore = require("connect-mongo")(session);
const config = require("../config");
const db = require("../db");

if (process.env.NODE_ENV === "production") {
  module.exports = session({
    resave: false,
    saveUninitialized: false,
    secret: config.secretKey,
    store: new MongooseStore({
      mongooseConnection: db.Mongoose.connection
    })
  });
} else {
  module.exports = session({
    resave: false,
    saveUninitialized: true,
    secret: config.secretKey,
    store: new MongooseStore({
      mongooseConnection: db.Mongoose.connection
    })
  });
}
