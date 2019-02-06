"use strict";

const helper = require("../helper");

module.exports = () => {
  let routes = {
    get: {
      "/": (req, res, next) => {
        res.render("login");
      },
      "/rooms": (req, res, next) => {
        res.render("rooms");
      },
      "/chatroom": (req, res, next) => {
        res.render("chatroom");
      },
      "/getsession": (req, res, next) => {
        res.status(200).send(`My name is ${req.session.name}`);
      },
      "/setsession": (req, res, next) => {
        req.session.name = "Harsha Chinni";
        res.status(200).send("Session is set");
      }
    },
    post: {},
    NA: (req, res, next) => {
      res.status(404).sendFile(process.cwd() + "/views/404.htm");
    }
  };
  return helper.route(routes);
};
