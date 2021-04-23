const ProfileRepository = require("../repository/profileRepository");
const PermissionRepository = require("../repository/PermissionRepository");
const AppError = require("../utils/AppError");
class AssociatePermissionToProfileService {
  async execute({ permission_id, profile_name }) {
    const permission = await PermissionRepository.findByPk(permission_id);

    if (!permission) {
      throw new AppError("Permission not found", 404);
    }

    const profile = await ProfileRepository.findOne({
      where: { name: profile_name },
    });

    if (!profile) {
      throw new AppError("Profile not found", 404);
    }

    const permission_profiles = await permission.addProfile(profile);

    if (!permission_profiles) {
      throw new AppError("Already Associated", 200);
    }

    return permission_profiles;
  }
}

module.exports = AssociatePermissionToProfileService;
