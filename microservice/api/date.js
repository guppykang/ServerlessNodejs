const moment = require('moment');
const { mongoose } = require('../mongoose_connections');

const dateSchema = new mongoose.Schema({
  current : String
 });

const date = mongoose.model("Date", dateSchema);

module.exports = async (req, res) => {
  const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  const uploadResponse = await date.create({ current : currentTime });
  console.log('HIIIIII MOMMM')
  res.end( currentTime );
}
