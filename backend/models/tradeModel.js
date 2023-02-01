const mongoose = require("mongoose");

const tradeSchema = mongoose.Schema(
  {
    text: {
      type: Number,
      required: [true, "Please add a value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Trade", tradeSchema);
