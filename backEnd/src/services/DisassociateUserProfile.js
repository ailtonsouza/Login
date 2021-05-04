const ProfileRepository = require("../repository/profileRepository");
const UserRepository = require("../repository/userRepository");
const AppError = require ('../utils/AppError');

class DisassociateUserProfileService {

  async execute({ user_id,  profile_name})  {

    const user = await UserRepository.findByPk(user_id)

    if (!user) {
        throw new AppError('User doesnt exists.');
    }

    const profile = await ProfileRepository.findOne({where: { name: profile_name }})

    if (!profile) {
      throw new AppError('Profile doesnt exists.');
    }

    await user.removeProfile(profile)

  }
}

module.exports =  DisassociateUserProfileService;


