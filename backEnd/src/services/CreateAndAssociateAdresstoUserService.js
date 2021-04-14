const AdressRepository = require("../repository/adressRepository");
const UserRepository = require("../repository/userRepository");
const AppError = require ('../utils/AppError');

class CreateAndAssociateAdresstoUserService {

  async execute({ user_id, zipcode, street, password, number })  {
    const user = await UserRepository.findByPk(user_id);

    if (!user) {
      throw new AppError("User not found",401);
    }
   
      const adress = await AdressRepository.create({
        zipcode,
        street,
        password,
        number,
        user_id,
      });

      return adress;

  }
}

module.exports =  CreateAndAssociateAdresstoUserService;


