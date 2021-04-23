const HashProvider = require("../providers/BCryptHashProvider");
const UserRepository = require("../repository/userRepository");
const { sign } = require('jsonwebtoken');
const authConfig = require('../config/auth');
const AppError = require ('../utils/AppError');

class AuthenticateUserService {
  async execute({ email, password }) {
    const user = await UserRepository.findOne({ where: { email } });

    if (!user) {
      throw new AppError("Incorrect email/password combination",401);
    }

    const passwordMatched = await HashProvider.compareHash(
      password,
      user.password
    );
 
    if (!passwordMatched) {
      throw new AppError("Incorrect email/password combination",401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

module.exports = AuthenticateUserService;
