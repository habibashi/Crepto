const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "please add a name"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "please add an email"],
    },
    balance: {
      type: Number,
      default: 50000,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
