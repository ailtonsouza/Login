const { Model, DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

class Permission extends Model {
  static init(sequelize) {
    sequelize.define('profile_permissions',{
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
    })
  
    super.init(
      {
        id: {
          primaryKey: true,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
        },
        name: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "permissions",
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Profile, {
      foreignKey: "permission_id",
      through: "profile_permissions",
      as: "profile",
    });
  }
}
module.exports = Permission;
