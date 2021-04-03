const HashProvider = require("../providers/BCryptHashProvider");
const UserRepository = require("../repository/userRepository");
const { sign } = require('jsonwebtoken');
const authConfig = require('../config/auth');

class AuthenticateUserService {
  async execute({ email, password }) {
    const user = await UserRepository.findOne({ where: { email } });

    if (!user) {
      throw Error("Incorrect email/password combination");
    }

    const passwordMatched = await HashProvider.compareHash(
      password,
      user.password
    );
 
    if (!passwordMatched) {
      throw Error("Incorrect email/password combination");
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
