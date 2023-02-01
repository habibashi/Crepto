const asyncHandler = require("express-async-handler");
const Trade = require("../models/tradeModel");

// @desc Post buy
// @route POST /api/trade
// @acces private
const postBuy = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "post buy" });
});

// @desc Post sell
// @route POST /api/trade
// @acces private
const postSell = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "post buy" });
});

// @desc Get data
// @route GET /api/trade
// @acces private
const getData = asyncHandler(async (req, res) => {
  const coins = await Trade.find();
  res.status(200).json(coins);
});

module.exports = {
  postBuy,
  postSell,
  getData,
};
