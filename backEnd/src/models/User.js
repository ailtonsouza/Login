const { Model, DataTypes } = require("sequelize");


class User extends Model {
  static init(sequelize) {
    sequelize.define('user_profiles',{
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
          defaultValue: DataTypes.UUIDV4
      },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );


  }

  static associate(models) {
    this.hasMany(models.Address, { foreignKey: "user_id", as: "addresses" });

    
    this.belongsToMany(models.Profile, {
      foreignKey: "user_id",
      through: "user_profiles",
      as: "profiles",
    });
  }
}
module.exports = User;
