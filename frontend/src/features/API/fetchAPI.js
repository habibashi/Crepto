import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";

export const getCoins = async (page) => {
  const response = await axios.get(
    BASE_URL +
      "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=7d"
  );

  try {
    const coinData = [];
    for (const coins of response.data) {
      coinData.push({
        id: coins.id,
        name: coins.name,
        image: coins.image,
        price: coins.current_price,
        high_24h: coins.high_24h,
        low_24h: coins.low_24h,
        circulating_supply: coins.circulating_supply,
        symbol: coins.symbol,
        rank: coins.market_cap_rank,
        market_cap: coins.market_cap,
      });
    }
    return coinData;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const searchCoin = async (searchInput) => {
  const response = await axios.get(BASE_URL + `/search?query=${searchInput}`);

  try {
    return response.data.coins;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const chartsCoin = async (id) => {
  const response = await axios.get(
    BASE_URL + `/coins/${id}/market_chart?vs_currency=usd&days=7&interval=daily`
  );
  try {
    return response.data.prices;
  } catch (error) {
    console.log(error);
    return error;
  }
};
