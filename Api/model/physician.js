const mongoose = require("mongoose");

const physicanSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  gender: { type: String },
  password: { type: String },
  confirmPassword: { type: String },
});

module.exports = mongoose.model("Physician", physicanSchema);
