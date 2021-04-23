const UserRepository = require("../repository/userRepository");
const CreateAndAssociateAdresstoUserService = require("../services/CreateAndAssociateAdresstoUserService");

module.exports = {
  async store(req, res) {
    const { user_id } = req.params;
    const { zipcode, street, password, number } = req.body;

      const createAndAssociateAdresstoUserService = new CreateAndAssociateAdresstoUserService();

      const adress = await createAndAssociateAdresstoUserService.execute({
        user_id,
        zipcode,
        street,
        password,
        number,
      });

      return res.json(adress);
  
  },

  async index(req, res) {
    const { user_id } = req.params;

    const adresses = await UserRepository.findByPk(user_id, {
      include: { association: "addresses" },
    });

    if (!adresses) {
      return res.status(400).json({ error: "User not found" });
    }

    return res.json(adresses);
  },
};
