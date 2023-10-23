const Result = require('./results.dao');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'secretkey123456';

exports.createResult = (req, res, next) => {
  const newResult = {
    nombre: req.body.nombre,
    evaluacion: req.body.evaluacion,
    letras: req.body.letras,
    resultado: req.body.resultado
  };

  Result.create(newResult, (err, result) => {
    if (err) return res.status(500).send(err);

    const dataResult = {
      nombre: result.nombre,
      evaluacion: result.evaluacion,
      letras: result.letras,
      resultado: result.resultado,
    };

    // response 
    res.send({ dataResult });  
  });
};

exports.readResults = (req, res, next) => {
  Result.getAll((err, results) => {
    if (err) return res.status(500).send(err);
    res.send({ results });  
  });
};

exports.getResultByName = (req, res, next) => {
  const nombre = req.params.nombre;

  Result.getByName(nombre, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }

    if (!result) {
      return res.status(404).send({ message: 'Registros de usuario no encontrados' });
    }

    res.status(200).send({ result });
  });
};

exports.getResultsTotals = (req, res, next) => {
  Result.countResults((err, results) => {
    if (err) return res.status(500).send(err);
    res.send({ results });  
  });
};

exports.getResultsByEvaluacion = (req, res, next) => {
  Result.countResultsByEvaluacion((err, results) => {
    if (err) return res.status(500).send(err);
    res.send({ results });  
  });
};

  
