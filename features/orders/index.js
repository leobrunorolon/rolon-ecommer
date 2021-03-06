import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DB_URL } from "../../Constants/config";

const initialState = {
  value: {
    orders: [],
    loading: false,
    error: false,
  },
};

export const getOrders = createAsyncThunk(
  "orders/getOrders",
  async (user, asyncThunk) => {
    try {
      const res = await fetch(`${DB_URL}orders.json`);
      const data = Object.values(await res.json());
      const userData = data.filter((order) => order.user.email === user.email);
      return userData;
    } catch (error) {
      return rejectWithValue("Error");
    }
  }
);

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: {
    [getOrders.pending]: (state) => {
      state.value.loading = true;
    },
    [getOrders.fulfilled]: (state, { payload }) => {
      state.value.orders = payload;
      state.value.loading = false;
    },
    [getOrders.rejected]: (state) => {
      state.value.loading = false;
      state.value.error = true;
    },
  },
});

export default ordersSlice.reducer;
