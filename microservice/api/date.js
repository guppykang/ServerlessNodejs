const moment = require('moment');
const { mongoose, connection } = require('../mongoose_connections');

module.exports = (req, res) => {
  const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  let model = mongoose.model
  res.end(currentTime);
}
