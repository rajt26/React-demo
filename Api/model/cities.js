const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  Cityname: { type: String },
  State_id:{type:Number}
});

module.exports = mongoose.model("cities", citySchema);
