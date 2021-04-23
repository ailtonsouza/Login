const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../models/User.js");
const Address = require("../models/Address.js");
const Profile = require("../models/Profile.js");
const Permission = require("../models/Permission.js");

const connection = new Sequelize(dbConfig);

User.init(connection);
Address.init(connection);
Profile.init(connection);
Permission.init(connection);

User.associate(connection.models);
Address.associate(connection.models);
Profile.associate(connection.models);
Permission.associate(connection.models);

module.exports = connection;
