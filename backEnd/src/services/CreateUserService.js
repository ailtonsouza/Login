const HashProvider = require('../providers/BCryptHashProvider');
const UserRepository = require("../repository/userRepository");

class CreateUserService {

  async execute({ name, email, password })  {
    const checkUserExists = await UserRepository.findOne({where: { email }})

    if (checkUserExists) {
      throw Error('Email address already used.');
    }

    const hashedPassword = await HashProvider.generateHash(password);

    const user = await UserRepository.create({
      name,
      email,
      password: hashedPassword,
    });    

    return user;
  }
}

module.exports =  CreateUserService;