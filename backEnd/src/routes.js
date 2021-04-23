const express = require("express");
const userRoutes = require("./routes/user.routes");
const profileRoutes = require("./routes/profile.routes");
const adressRoutes = require("./routes/adress.routes");
const permissionRoutes = require("./routes/permisson.routes");

const routes = express.Router();

routes.use("/users", userRoutes);
routes.use("/adress", adressRoutes);
routes.use("/profile", profileRoutes);
routes.use("/permission", permissionRoutes);

module.exports = routes;
