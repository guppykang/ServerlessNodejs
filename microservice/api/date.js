const moment = require('moment');
const { mongoose, connection } = require('../mongoose_connections');

const dateSchema = new mongoose.Schema({
  current : String
 });

const date = connection.model("Date", dateSchema);

module.exports = async (req, res) => {
  const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  const uploadResponse = await date.create({ current : currentTime });
  res.end({ currentTime, uploadResponse });
}
