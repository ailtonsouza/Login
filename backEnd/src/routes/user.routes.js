const express = require("express");
const UserController = require("../controllers/UserController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const userRoutes = express.Router();

userRoutes.post("/", UserController.store);
userRoutes.get("/", ensureAuthenticated, UserController.index);
userRoutes.post("/authenticate", UserController.authenticate);
userRoutes.get("/profiles/:user_id", UserController.find_user_profiles);

module.exports = userRoutes;
