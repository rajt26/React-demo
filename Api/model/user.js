const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    dateOfJoining: Date,
    isActive: { type: Boolean, required: true },
    isDeleted: Boolean,
    updatedAt: Date,
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
