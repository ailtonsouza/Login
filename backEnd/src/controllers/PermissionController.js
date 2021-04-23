const PermissionRepository = require("../repository/PermissionRepository");
const CreatePermissionService = require("../services/CreatePermissionService")

module.exports = {
  async index(req, res) {
    const permissions = await PermissionRepository.findAll();

    return res.json(permissions);
  },

  async store(req, res) {
    const { name } = req.body;

    const createPermissionService = new CreatePermissionService();

    const permission = await createPermissionService.execute({ name });

    return res.json(permission);
  },
};
