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
};

const comparePassword = async function(password, hash) {
   let isVerified = false;
   try {
      isVerified = bcrypt.compare(password, hash);
   } catch (err) {
      console.error(err.message);
   } finally {
      return isVerified;
   }
};

const removePasswordKey = function(user){
   let tempUser = {
      _id: user._id,
      name: user.name,
      lastname: user.lastName,
      email: user.email,
      __v: user.__v
   };
   return tempUser;
};

module.exports = {
   hashPassword,
   comparePassword,
   removePasswordKey
};
