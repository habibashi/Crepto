import axios from "axios";

const API_URL = "/api/trade/";

// buy coin
const buyCoin = async (coinData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.post(API_URL + "buy", coinData, config);

  return data;
};

// sell coin
const sellCoin = async (coinData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.post(API_URL + "sell", coinData, config);

  return data;
};

// get coins
const getBuysData = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.get(API_URL + "data", config);
  return data;
};

const tradeService = {
  buyCoin,
  sellCoin,
  getBuysData,
};

export default tradeService;
