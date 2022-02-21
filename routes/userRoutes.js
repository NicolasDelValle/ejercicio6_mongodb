const express = require("express");
const routes = express.Router();
//controllers
const { showUser, addUser } = require("../controllers/userControllers");
//middlewares

//Routes

routes.get("/", showUser);

module.exports = routes;
