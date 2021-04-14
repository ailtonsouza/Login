const HashProvider = require("../providers/BCryptHashProvider");
const UserRepository = require("../repository/userRepository");
const AppError = require("../utils/AppError");

class CreateUserService {
  async execute({ name, email, password }) {
    if ((name && email && password) === "") {
      throw new AppError("Every field should be filled", 401);
    }

    const checkUserExists = await UserRepository.findOne({ where: { email } });

    if (checkUserExists) {
      throw new AppError(
        "The Email address is already used, choose another and try again."
      );
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

module.exports = CreateUserService;
