const UserRepository = require("../repository/userRepository");
const CreateUserService = require("../services/CreateUserService");
const AuthenticateUserService = require("../services/AuthenticateUserService");

module.exports = {
  async index(req, res) {
    const users = await UserRepository.findAll();

    return res.json(users);
  },

  async store(req, res) {
    const { name, email, password } = req.body;

    try {
      const createUserService = new CreateUserService();

      const user = await createUserService.execute({ name, email, password });

      return res.json(user);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  },

  async authenticate(req, res) {
    const { email, password } = req.body;

    try {
      const authenticateUserService = new AuthenticateUserService();

      const user = await authenticateUserService.execute({ email, password });

      return res.json(user);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  },

};
