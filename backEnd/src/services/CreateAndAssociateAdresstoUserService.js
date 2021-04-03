const AdressRepository = require("../repository/adressRepository");
const UserRepository = require("../repository/userRepository");

class CreateAndAssociateAdresstoUserService {

  async execute({ user_id, zipcode, street, password, number })  {
    const user = await UserRepository.findByPk(user_id);

    if (!user) {
      throw Error("User not found" );
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


