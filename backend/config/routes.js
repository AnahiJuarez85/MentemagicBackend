const Users = require('../auth/auth.controller');
const Letters = require('../letters/letters.controller');
const Results = require('../results/results.controller');

module.exports = (router) => {
  router.post('/register', Users.createUser);
  router.post('/login', Users.loginUser);
  router.post('/createLetter', Letters.createLetter);
  router.get('/readLetters', Letters.readLetters);
  router.post('/createResult', Results.createResult);
  router.get('/readResults', Results.readResults);
  router.get('/getResultByName/:nombre', Results.getResultByName);
  router.get('/getResultsTotals', Results.getResultsTotals); 
  router.get('/getResultsByEvaluacion', Results.getResultsByEvaluacion); 
}