const  mongooseFunction  = require('../mongoose_connections');

module.exports = async (req, res) => {
  const mongoose = await mongooseFunction();
  
  const dateSchema = new mongoose.Schema({
      current : String
  })
}
