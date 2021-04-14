const ProfileRepository = require("../repository/profileRepository");
const AppError = require ('../utils/AppError');



class CreateProfileService {

  async execute({ name })  {
    const checkProfileExists = await ProfileRepository.findOne({where: { name }})

    if (checkProfileExists) {
      throw new AppError('Profile name already used.');
    }

    const profile = await ProfileRepository.create({name})

    return profile;


  }
}

module.exports =  CreateProfileService;


