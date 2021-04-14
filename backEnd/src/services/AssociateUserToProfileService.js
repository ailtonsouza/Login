
const ProfileRepository = require("../repository/profileRepository");
const UserRepository = require("../repository/userRepository");
const AppError = require ('../utils/AppError');
class AssociateUserToProfileService {

  async execute({ name, user_id })  {
  

    const user = await UserRepository.findByPk(user_id);

    if (!user) {
      throw new AppError("User not found", 404);
    }
    
    const profile = await ProfileRepository.findOne({
      where: { name },
    });
    
    if (!profile) {
      throw new AppError("Profile not found", 404);
    }
    
    const user_profiles = await user.addProfile(profile)

    if(!user_profiles) {
      throw new AppError('Already Associated', 200);
    } 


    return user_profiles;


  }
}

module.exports =  AssociateUserToProfileService;





