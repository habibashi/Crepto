import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";

export const getCoins = async () => {
  const { data } = await axios.get(
    BASE_URL +
      "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=7d"
  );

  try {
    const coinData = [];
    for (const coins of data) {
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
    return error;
  }
};

export const searchCoin = async (searchInput) => {
  const { data } = await axios.get(BASE_URL + `/search?query=${searchInput}`);

  try {
    return data.coins;
  } catch (error) {
    return error;
  }
};

export const getCoin = async (coinId) => {
  const { data } = await axios.get(
    BASE_URL +
      `/coins/${coinId}?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`
  );

  try {
    const coinData = {
      id: data.id,
      name: data.name,
      image: data.image.small,
      price: data.market_data.current_price.usd,
    };

    return coinData;
  } catch (error) {
    return error;
  }
};

export const chartsCoin = async (id) => {
  const { data } = await axios.get(
    BASE_URL + `/coins/${id}/market_chart?vs_currency=usd&days=7&interval=daily`
  );
  try {
    let prices = {
      prices: data.prices,
    };
    return prices;
  } catch (error) {
    console.log(error);
    return error;
  }
};
