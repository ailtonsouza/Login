const express = require("express");
const userRoutes = require("./routes/user.routes");
const profileRoutes = require("./routes/profile.routes");
const adressRoutes = require("./routes/adress.routes");

const routes = express.Router();

routes.use('/users', userRoutes)
routes.use('/adress', adressRoutes)
routes.use('/profile', profileRoutes)

module.exports = routes;
