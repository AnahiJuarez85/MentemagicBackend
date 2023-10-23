const mongoose = require('mongoose');
const resultSchema = require('./results.model');

resultSchema.statics = {

  create: function (data, cb) {
    const result = new this(data);
    result.save(cb);
  },

  get: function (id, cb) {
    this.findById(id, cb);
  },

  getAll: function (cb) {
    this.find({}, cb);
  },

  update: function (id, data, cb) {
    this.findByIdAndUpdate(id, data, { new: true }, cb);
  },

  delete: function (id, cb) {
    this.findByIdAndDelete(id, cb);
  },

  getByName: function (name, cb) {
    this.find({ nombre: name }, cb);
  },

  countResults: function (cb) {
    this.aggregate([
      {
        $group: {
          _id: "$resultado",
          y: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0, 
          name: "$_id", 
          y: 1
        }
      }
    ]).exec(cb);
  },

  countResultsByEvaluacion: function (cb) {
    this.aggregate([
      {
        $group: {
          _id: {
            resultado: "$resultado",
            evaluacion: "$evaluacion"
          },
          count: { $sum: 1 }
        }
      },
      {
        $group: {
          _id: "$_id.resultado",
          data: {
            $addToSet: {
              evaluacion: "$_id.evaluacion",
              count: "$count"
            }
          }
        }
      }
    ]).exec(cb);
  }
}

const letterModel = mongoose.model('Resultados', resultSchema);
module.exports = letterModel;