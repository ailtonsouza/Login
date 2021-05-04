const express = require("express");

const AddressController = require("../controllers/AddressController");
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const adressRoutes = express.Router();

adressRoutes.use(ensureAuthenticated)

adressRoutes.post("/:user_id", AddressController.store);
adressRoutes.get("/:user_id", AddressController.index);

module.exports = adressRoutes;
