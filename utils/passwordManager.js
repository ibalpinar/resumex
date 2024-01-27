const bcrypt = require("bcrypt");

const hashPassword = async function(password, saltRounds) {
   let rhash;
   try {
      try {
         const salt = await bcrypt.genSalt(parseInt(saltRounds));
         const hash = await bcrypt.hash(password, salt);
         rhash = hash;
      } catch (e) {
         console.error(e.message);
      } finally {
         return rhash;
      }
   } catch (e) {
      console.error(e.message);
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
