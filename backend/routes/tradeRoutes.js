const { request } = require("express");
const express = require("express");
const router = express.Router();
const {
  postBuy,
  postSell,
  getData,
} = require("../controllers/tradeController");
const { protect } = require("../middleware/authMiddleware");

router.post("/buy", protect, postBuy);
router.post("/sell", protect, postSell);
router.get("/data", protect, getData);

module.exports = router;
