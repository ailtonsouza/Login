const express = require("express");
const UserController = require("../controllers/UserController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const userRoutes = express.Router();

userRoutes.post("/", UserController.store);
userRoutes.get("/", ensureAuthenticated, UserController.index);
userRoutes.get("/authenticate", UserController.authenticate);

module.exports = userRoutes;
