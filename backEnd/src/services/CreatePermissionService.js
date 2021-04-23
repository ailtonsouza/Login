const PermissionRepository = require("../repository/PermissionRepository");
const AppError = require ('../utils/AppError');

class CreatePermissionService {

  async execute({ name })  {
    const checkPermissionExists = await PermissionRepository.findOne({where: { name }})

    if (checkPermissionExists) {
      throw new AppError('Permission name already used.');
    }

    const permission = await PermissionRepository.create({name})

    return permission;


  }
}

module.exports =  CreatePermissionService;
