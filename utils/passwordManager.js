const bcrypt = require("bcrypt");

const hashPassword = async function(password, saltRounds) {
   let bcrypted = {hash: '', salt: ''};
   try {
      try {
         const salt = await bcrypt.genSalt(parseInt(saltRounds));
         bcrypted.salt = salt;
         const hash = await bcrypt.hash(password, salt);
         bcrypted.hash = hash;
      } finally {
         return bcrypted;
      }
   } catch (err) {
      console.error(err.message);
   }
 }

 module.exports.hashPassword = hashPassword;

/*
module.exports.validatePassword = function(hash) {
   bcrypt
      .compare(password, hash)
      .then(res => {
         console.log('Validated -> ', res);
         return true;
      })
      .catch(err => {
         console.error(err.message);
         return false;
      });
}
*/
