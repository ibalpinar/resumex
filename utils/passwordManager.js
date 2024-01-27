const bcrypt = require("bcrypt");

const hashPassword = async function(password, saltRounds) {
   let rhash;
   try {
      const salt = await bcrypt.genSalt(parseInt(saltRounds));
      const hash = await bcrypt.hash(password, salt);
      rhash = hash;
   } catch (err) {
      console.error(err.message);
   } finally {
      return rhash;
   }
}

module.exports.hashPassword = hashPassword;
