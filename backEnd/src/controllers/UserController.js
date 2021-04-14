const UserRepository = require("../repository/userRepository");
const CreateUserService = require("../services/CreateUserService");
const AuthenticateUserService = require("../services/AuthenticateUserService");

module.exports = {
  async index(req, res) {
    // const delay = new Promise((resolve) => setTimeout(resolve, 2000));
    // await delay;

    const users = await UserRepository.findAll();

    const random = users[Math.floor(Math.random() * users.length)];

    return res.json(random);
  },

  async store(req, res) {
    // const delay = new Promise((resolve) => setTimeout(resolve, 20000));
    // await delay;

    const { name, email, password } = req.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({ name, email, password });

    return res.json(user);
  },

  async authenticate(req, res) {
    const { email, password } = req.body;
    console.log(req.body)
    const authenticateUserService = new AuthenticateUserService();

    const user = await authenticateUserService.execute({ email, password });

    return res.json(user);
  },
};
