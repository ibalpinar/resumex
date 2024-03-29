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

const bcryptPassword = async function(password) {
   const bcrypted = await hashPassword(password, process.env.SALT_ROUNDS)
      .then((rHash)=>{
         return rHash;
   });
   return bcrypted;
};

const comparePassword = async function(password, hash) {
   let isVerified = false;
   try {
      isVerified = bcrypt.compare(password, hash)
         .then(result=>{
            return result;
      });
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
      lastName: user.lastName,
      email: user.email,
      userTypeId: user.userTypeId,
      countryId: user.countryId,
      resumeIds: user.resumeIds,
      isSuspended: user.isSuspended,
      isEmailConfirmed: user.isEmailConfirmed,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      deletedAt: user.deletedAt
   };
   return tempUser;
};

module.exports = {
   comparePassword,
   removePasswordKey,
   bcryptPassword
};
