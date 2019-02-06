"use strict";

const express = require("express");
const app = express();

const chatBot = require("./app");

app.use(express.static("public"));
app.set("port", process.env.PORT || 5000);
app.set("view engine", "ejs");

app.use(chatBot.session);
app.use("/", chatBot.router);

app.listen(app.get("port"), () => {
  console.log("The server is running at port: ", app.get("port"));
});
