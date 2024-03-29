const { path } = require('../../common');

const accountServiceSchema = {
   generateToken: {
      description: 'This endpoint gets user to get in the application. It returns an object contains a token',
      summary: 'Login, Logout and register user',
      tags: [path.ACCOUNT],
   },
};

module.exports = {
   accountServiceSchema,
};
