import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import { PRODUCTS } from "../../Data/products";
import { DB_URL } from "../../Constants/firebase";
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
          date: new Date().toLocaleDateString(),
          items: items,
        }),
      });
      const data = res.json();
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
        // state.value.total.push(item.quantity * item.price);
      }
    },
    removeItem: () => {},
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

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
