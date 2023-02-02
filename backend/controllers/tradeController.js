const asyncHandler = require("express-async-handler");
const Trade = require("../models/tradeModel");
const User = require("../models/userModel");

// @desc Post buy
// @route POST /api/trade/buy
// @acces private
const postBuy = asyncHandler(async (req, res) => {
  const { amount, price, coinId } = req.body;
  const amountInt = parseInt(amount);
  if (!amountInt || !price || !coinId) {
    res.status(400);
    throw new Error("please add all fields");
  }

  // check if price > Balance
  const total = amount * price;
  if (total > req.user.balance) {
    res.status(400);
    throw new Error("No enough balance");
  }

  // check if this coin exist
  const exist = await Trade.findOne({ coinId, userId: req.user.id });
  if (exist) {
    exist.price = exist.price + total;
    exist.amount = exist.amount + amountInt;
    await exist.save();
    res.status(200).json(exist);
  } else {
    const neww = await Trade.create({
      userId: req.user.id,
      coinId,
      amount,
      price: total,
    });
    res.status(200).json(neww);
  }
  req.user.balance = req.user.balance - total;
  await req.user.save();
});

// @desc Post sell
// @route POST /api/trade/sell
// @acces private
const postSell = asyncHandler(async (req, res) => {
  const { amount, price, coinId } = req.body;
  const amountInt = parseInt(amount);
  if (!amountInt || !price || !coinId) {
    res.status(400);
    throw new Error("please add all fields");
  }

  const total = amountInt * price;

  // if amount >= owend amound
  const exist = await Trade.findOne({ coinId, userId: req.user.id });
  if (amount > exist.amount) {
    res.status(400);
    throw new Error("You dont have any thing to sell");
  } else {
    exist.price = exist.price - total;
    exist.amount = exist.amount - amountInt;
    await exist.save();
    res.status(200).json(exist);
  }

  if (exist.amount === 0) {
    await Trade.deleteOne({ coinId, userId: req.user.id });
  }
  req.user.balance = req.user.balance + total;
  await req.user.save();
});

// @desc Get data
// @route GET /api/trade/data
// @acces private
const getData = asyncHandler(async (req, res) => {
  const coins = await Trade.find({ userId: req.user.id });
  res.status(200).json(coins);
});

module.exports = {
  postBuy,
  postSell,
  getData,
};
