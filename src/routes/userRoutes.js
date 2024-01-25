const userController = require('../controllers/userController');

module.exports = (app) => {
   app.post('/api/user', userController.createUser);

   app.get('/api/user', userController.getAllUser);

   app.get('/api/user/:id', userController.getUserById);

   app.put('/api/user/:id', userController.updateUser);

   app.delete('/api/user/:id', userController.deleteUser);
 };
