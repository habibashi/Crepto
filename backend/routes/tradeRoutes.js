const { request } = require("express");
const express = require("express");
const router = express.Router();
const {
  postBuy,
  postSell,
  getData,
} = require("../controllers/tradeController");
const { route } = require("./userRoutes");

router.post("/buy", postBuy);
router.post("/sell", postSell);
router.get("/data", getData);

module.exports = router;
