import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../Data/products";
import { DB_URL } from "../../Constants/config";
const initialState = {
  value: {
    cart: [],
    total: 0,
    response: {},
    loading: false,
    error: false,
  },
};

export const confirmPurchase = createAsyncThunk(
  "cart/confirm",
  async (items, asyncThunk) => {
    try {
      const res = await fetch(`${DB_URL}orders.json`, {
        method: "POST",
        body: JSON.stringify({
          id: items.id,
          date: items.date,
          user: items.user,
          item: items.cart,
          total: items.total,
        }),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue("Error");
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const productRepeat = state.value.cart.find(
        (product) => product.id === action.payload.id
      );
      if (productRepeat) {
        state.value.cart.map((item) => {
          if (item.id === action.payload.id) item.quantity++;
          return item;
        });
      } else {
        const product = PRODUCTS.find(
          (product) => product.id === action.payload.id
        );

        state.value.cart.push({ ...product, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const productDelet = state.value.cart.filter(
        (product) => product.id !== action.payload
      );
      state.value.cart = productDelet;
    },
    totalItem: (state) => {
      let total = 0;
      state.value.cart.forEach((item) => {
        total += item.quantity * item.price;
      });
      state.value.total = total.toFixed(2);
    },
    cleanItem: (state, _) => {
      state.value = initialState.value;
    },
  },
  extraReducers: {
    [confirmPurchase.pending]: (state) => {
      state.value.loading = true;
    },
    [confirmPurchase.fulfilled]: (state, { payload }) => {
      state.value.response = payload;
      state.value.loading = false;
    },
    [confirmPurchase.rejected]: (state) => {
      state.value.loading = false;
      state.value.error = true;
    },
  },
});

export const { addItem, removeItem, totalItem, cleanItem } = cartSlice.actions;

export default cartSlice.reducer;
