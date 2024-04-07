const bcrypt = require('bcrypt');

const hashPassword = async function (password, saltRounds) {
   try {
      const salt = await bcrypt.genSalt(parseInt(saltRounds));
      const hash = await bcrypt.hash(password, salt);
      return hash;
   } catch (err) {
      console.error(err.message);
      return -1;
   }
};

const bcryptPassword = async function (password) {
   const bcrypted = await hashPassword(password, process.env.SALT_ROUNDS).then((rHash) => {
      return rHash;
   });
   return bcrypted;
};

const comparePassword = async function (password, hash) {
   try {
      return bcrypt.compare(password, hash).then((result) => {
         return result;
      });
   } catch (err) {
      console.error(err.message);
      return -1;
   }
};

const removePasswordKey = function (user) {
   let tempUser = {
      _id: user._id,
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      userTypeId: user.userTypeId,
      countryId: user.countryId,
      resumes: user.resumes,
      isSuspended: user.isSuspended,
      isEmailConfirmed: user.isEmailConfirmed,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      deletedAt: user.deletedAt,
   };
   return tempUser;
};

module.exports = {
   comparePassword,
   removePasswordKey,
   bcryptPassword,
};
