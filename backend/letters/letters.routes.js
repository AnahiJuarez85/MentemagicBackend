const Letters = require('./letters.controller');
module.exports = (router) => {
  router.post('/createLetter', Letters.createLetter);
}