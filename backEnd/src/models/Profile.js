const { Model, DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

class Profile extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          primaryKey: true,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4
      },
        name: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "profiles",
      }
    );
  }

  

  static associate(models) {
    this.belongsToMany(models.User, { foreignKey: "profile_id", through: 'user_profiles', as: "users" });
  }
}
module.exports = Profile;
