const { hash, compare } = require('bcryptjs');

class BcryptHashProvider {
  
  static async generateHash(payload){
    return hash(payload, 8);
  }

  static async compareHash(payload , hashed) {
    return compare(payload, hashed);
  }
}

module.exports = BcryptHashProvider;