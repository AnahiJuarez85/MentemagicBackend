require('dotenv').config();
const mongoose = require('mongoose');
const dbURL = process.env.BD_URI;

module.exports = () => {

  mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Mongo connected on ${dbURL}`))
    .catch(err => console.log(`Connection has error ${err}`))

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log(`Mongo is disconnected`);
      process.exit(0)
    });
  });
}