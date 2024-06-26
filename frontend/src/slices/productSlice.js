import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userProducts: localStorage.getItem("userProducts") ? JSON.parse(localStorage.getItem("userProducts")) : null
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.userProducts = action.payload;
      localStorage.setItem("userProducts", JSON.stringify(action.payload));
    },
    clearProducts: (state, actions) => {
      state.userProducts = null
      localStorage.removeItem('userProducts')
    },
    updateProductById: (state, action) => { },
    deleteProductById: (state, action) => {
      const productId = action.payload;
      state.userProducts = state.userProducts.filter(
        (product) => product._id !== productId
      );
      localStorage.setItem("userProducts", JSON.stringify(state.userProducts));
    },
  },
});

export const { setProducts, clearProducts, deleteProductById } = productSlice.actions;

export default productSlice.reducer;