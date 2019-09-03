const moment = require('moment');
const  mongooseFunction  = require('../mongoose_connections');


module.exports = async (req, res) => {
  const mongoose = await mongooseFunction(); 

  const dateSchema = new mongoose.Schema({
    current : String
  });

  const date = mongoose.model("Date", dateSchema);


  const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');

  const uploadResponse = await date.create({ current : currentTime });
  
  res.json( { currentTime } );
}
