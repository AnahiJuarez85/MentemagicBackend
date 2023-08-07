const Letter = require('./letters.dao');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'secretkey123456';
const letraSchema = require('./letters.model');

exports.createLetter = (req, res, next) => {

  const newLetter = {
    letra: req.body.letra,
    imagenLetra: req.body.imagenLetra,
    audioLetra: req.body.audioLetra,
    imagen1: req.body.imagen1,
    audioImagen1: req.body.audioImagen1,
    imagen2: req.body.imagen2,
    audioImagen2: req.body.audioImagen2,
    imagen3: req.body.imagen3,
    audioImagen3: req.body.audioImagen3
  }
  Letter.create(newLetter, (err, letter) => {
    
    if (err) return res.status(500).send(err);

    const dataLetter = {
      letra: letter.letra,
    }
    // response 
    res.send({ dataLetter });  
  });
}

exports.readLetters = (req, res, next) =>  {
  
  Letter.getAll((err, letters) => {
    
    if (err) return res.status(500).send(err);
    res.send({ letters });  
  });
}
