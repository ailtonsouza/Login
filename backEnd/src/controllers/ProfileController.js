const ProfileService = require("../services/CreateProfileService");
const AssociateUserToProfileService = require("../services/AssociateUserToProfileService");
const AssociatePermissionToProfileService = require("../services/AssociatePermissionToProfileService");
const ProfileRepository = require("../repository/profileRepository");  

module.exports = {
  async store(req, res) {
    const { name } = req.body;
    const profileService = new ProfileService();
    const profile = await profileService.execute({ name });
    return res.json(profile);
  },

  async store_user_profile(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;
    const associateUserToProfileService = new AssociateUserToProfileService();
    const user_profiles = await associateUserToProfileService.execute({
      name,
      user_id,
    });
    return res.json(user_profiles);
  },

  async store_permission_profile(req, res) {
    const { permission_id } = req.params;
    const { profile_name } = req.body;
    const associatePermissionToProfileService = new AssociatePermissionToProfileService();
    const permission_profile = await associatePermissionToProfileService.execute(
      { permission_id, profile_name }
    );
    return res.json(permission_profile);
  },

  async find_permission_by_user(req,res) {
    console.log('user_id')
    const { user_id } = req.params;
    console.log(user_id)
    const profiles = await ProfileRepository.findAll({
    attributes: ['name'],
     include: [
      {
       association: 'users', 
       through: {
        attributes: []
      }, 
       where: {id: user_id},
       attributes: [],
      }],
      include: [
        {
         association: 'permissions', 
         attributes: ['name'],
         through: {
          attributes: []
        }
        }],
   });


    return res.json(profiles);
  },
};
