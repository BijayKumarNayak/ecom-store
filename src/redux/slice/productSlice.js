import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addToCart } from "./cartSlice";
import axios from "axios";
export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await axios.get("https://dummyjson.com/products");
  return response.data.products;
});
const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    error: null,
    filterProducts: [],
    status: "idel",
  },

  reducers: {
    filterProducts: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      console.log(searchTerm);
      state.filterProducts = state.products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
        state.filterProducts = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addToCart, (state, action) => {
        const product = state.products.find(
          (item) => item.id === action.payload.id
        );
        if (product && product.stock > 0) {
         console.log(product.stock-=1)
        }
      });
  },
});

export const { filterProducts, reduceStock } = productsSlice.actions;

export default productsSlice.reducer;
