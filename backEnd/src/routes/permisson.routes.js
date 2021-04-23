const express = require("express");
const PermissionController = require("../controllers/PermissionController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const permissonRoutes = express.Router();

permissonRoutes.use(ensureAuthenticated)

permissonRoutes.post("/", PermissionController.store);
permissonRoutes.get("/", PermissionController.index);

module.exports = permissonRoutes;
