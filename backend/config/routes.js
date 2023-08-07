const Users = require('../auth/auth.controller');
const Letters = require('../letters/letters.controller');
module.exports = (router) => {
  router.post('/register', Users.createUser);
  router.post('/login', Users.loginUser);
  router.post('/createLetter', Letters.createLetter);
  router.get('/readLetters', Letters.readLetters);
}