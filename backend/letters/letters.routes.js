const Letters = require('./letters.controller');

module.exports = (router) => {
  router.post('/createLetter', Letters.createLetter);
  router.put('/updateLetter/:letra', Letters.updateLetter);
  router.get('/getLetterByLetter/:letra', Letters.getLetterByLetter); 
  router.put('/letters/:letra', lettersController.updateLetter);
  router.delete('/deletedLetter', lettersController.deleteLetter);
  };

