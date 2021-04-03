const ProfileRepository = require("../repository/profileRepository");



class CreateProfileService {

  async execute({ name })  {
    const checkProfileExists = await ProfileRepository.findOne({where: { name }})

    if (checkProfileExists) {
      throw Error('Profile name already used.');
    }

    const profile = await ProfileRepository.create({name})

    return profile;


  }
}

module.exports =  CreateProfileService;


