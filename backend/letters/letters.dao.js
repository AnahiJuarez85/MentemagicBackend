const mongoose = require('mongoose');
const letraSchema = require('./letters.model');

letraSchema.statics = {

  create: function (data, cb) {
    const letter = new this(data);
    letter.save(cb);
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
  }
}

const letterModel = mongoose.model('Letras', letraSchema);
module.exports = letterModel;