
const ProfileService = require("../services/CreateProfileService");
const AssociateUserToProfileService= require("../services/AssociateUserToProfileService");

module.exports = {
  async store(req, res) {
    const { name } = req.body;
    try {
      const profileService = new ProfileService();

      const profile = await profileService.execute({ name });

      return res.json(profile);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  },

  async store_user_profile(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;
    try {
    console.log(user_id,name)
    const associateUserToProfileService = new AssociateUserToProfileService();

    const user_profiles = await associateUserToProfileService.execute({name, user_id})

    return res.json(user_profiles);
  } catch (err) {
    return res.status(400).json(err.message);
  }
  },
};
