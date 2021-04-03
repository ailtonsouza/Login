const express = require("express");
const ProfileController = require("../controllers/ProfileController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const profileRoutes = express.Router();

profileRoutes.use(ensureAuthenticated)

profileRoutes.post("/", ProfileController.store);
profileRoutes.post("/:user_id", ProfileController.store_user_profile);

module.exports = profileRoutes;
