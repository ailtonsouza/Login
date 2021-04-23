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

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({ name, email, password });

    return res.json(user);
  },

  async authenticate(req, res) {
    const { email, password } = req.body;
    console.log(req.body);
    const authenticateUserService = new AuthenticateUserService();

    const user = await authenticateUserService.execute({ email, password });

    return res.json(user);
  },

  async find_user_profiles(req, res) {
    const { user_id } = req.params;
    console.log(user_id)

    const user = await UserRepository.findByPk(user_id, {
      include: {association: 'profiles'}
    });

    return res.json(user);
  },

};
