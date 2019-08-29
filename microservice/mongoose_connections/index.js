const url = require('url');
const mongoose = require('mongoose');

let connection = mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

module.exports = {
  mongoose: mongoose, 
  connection : connection
};


