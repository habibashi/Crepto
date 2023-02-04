import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tradeService from "./tradeService";
import { getCoin } from "../API/fetchAPI";

const initialState = {
  trade: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  isTrading: false,
  message: "",
};

// buy coin
export const buyCoin = createAsyncThunk(
  "trade/buyCoin",
  async (buyData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await tradeService.buyCoin(buyData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// sell coin
export const sellCoin = createAsyncThunk(
  "trade/sellCoin",
  async (buyData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await tradeService.sellCoin(buyData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// get coinData
export const getBuys = createAsyncThunk(
  "trade/getBuys",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const data = await tradeService.getBuysData(token);
      let newData = await Promise.all(
        data.map(async (item) => {
          const coinData = await getCoin(item.coinId);
          return {
            ...item,
            name: coinData.name,
            image: coinData.image,
          };
        })
      );
      return newData;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const tradeSlice = createSlice({
  name: "trade",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(buyCoin.pending, (state) => {
        state.isTrading = true;
      })
      .addCase(buyCoin.fulfilled, (state, action) => {
        state.isTrading = false;
        state.isSuccess = true;
      })
      .addCase(buyCoin.rejected, (state, action) => {
        state.isTrading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(sellCoin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sellCoin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(sellCoin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getBuys.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBuys.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.trade = action.payload;
      })
      .addCase(getBuys.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = tradeSlice.actions;
export default tradeSlice.reducer;
