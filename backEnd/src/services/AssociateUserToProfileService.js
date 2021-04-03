
const ProfileRepository = require("../repository/profileRepository");
const UserRepository = require("../repository/userRepository");

class AssociateUserToProfileService {

  async execute({ name, user_id })  {
  

    const user = await UserRepository.findByPk(user_id);

    if (!user) {
      throw Error("User not found" );
    }
    
    const profile = await ProfileRepository.findOne({
      where: { name },
    });
    
    if (!profile) {
      throw Error("Profile not found");
    }
    
    const user_profiles = await user.addProfile(profile)

    if(!user_profiles) {
      throw Error('Already Associated');
    } 


    return user_profiles;


  }
}

module.exports =  AssociateUserToProfileService;





