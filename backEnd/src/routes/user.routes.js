const express = require("express");
const UserController = require("../controllers/UserController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const userRoutes = express.Router();

userRoutes.post("/", UserController.store);
userRoutes.get("/", UserController.index);
userRoutes.post("/authenticate", UserController.authenticate);

module.exports = userRoutes;
