const express = require("express");
const ProfileController = require("../controllers/ProfileController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const profileRoutes = express.Router();

profileRoutes.use(ensureAuthenticated)

profileRoutes.post("/", ProfileController.store);
profileRoutes.post("/user/:user_id", ProfileController.store_user_profile);
profileRoutes.post("/permission/:permission_id", ProfileController.store_permission_profile);
profileRoutes.get("/findByUser/:user_id", ProfileController.find_permission_by_user);

module.exports = profileRoutes;
