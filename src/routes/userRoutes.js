const userController = require('../controllers/userController');

module.exports = (app) => {
   app.post('/api/user', userController.create);

   app.get('/api/user', userController.fetch);

   app.get('/api/user/:id', userController.get);

   app.put('/api/user/:id', userController.update);

   app.delete('/api/user/:id', userController.delete);
 };