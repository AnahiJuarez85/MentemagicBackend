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
  };

  Letter.create(newLetter, (err, letter) => {
    if (err) return res.status(500).send(err);

    const dataLetter = {
      letra: letter.letra,
    };

    // response 
    res.send({ dataLetter });  
  });
};

exports.readLetters = (req, res, next) => {
  Letter.getAll((err, letters) => {
    if (err) return res.status(500).send(err);
    res.send({ letters });  
  });
};

exports.updateLetter = (req, res, next) => {
  const id = req.params.id;
  
  const updatedLetter = {
    letra: req.body.letra,
    imagenLetra: req.body.imagenLetra,
    audioLetra: req.body.audioLetra,
    imagen1: req.body.imagen1,
    audioImagen1: req.body.audioImagen1,
    imagen2: req.body.imagen2,
    audioImagen2: req.body.audioImagen2,
    imagen3: req.body.imagen3,
    audioImagen3: req.body.audioImagen3
  };

  Letter.updateLetter(id, updatedLetter, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }

    res.status(200).send({ message: 'Módulo actualizado con éxito', updatedLetter: result });
  });
};
exports.getLetterByLetter = (req, res, next) => {
  const letra = req.params.letra;

  letraSchema.findOne({ letra: letra }, (err, letter) => {
    if (err) {
      return res.status(500).send(err);
    }

    if (!letter) {
      return res.status(404).send({ message: 'Módulo de letra no encontrado' });
    }

    res.status(200).send({ letter });
  });

  exports.deleteLetter = (req, res, next) => {
    const letra = req.params.letra;
  
    // Elimina el módulo por su ID
    letraSchema.findByIdAndRemove(letra, (err, deletedLetter) => {
      if (err) {
        return res.status(500).send(err);
      }
  
      if (!deletedLetter) {
        return res.status(404).send({ message: 'Módulo de letra no encontrado' });
      }
  
      res.status(200).send({ message: 'Módulo eliminado con éxito' });
    });
  };
};

  
