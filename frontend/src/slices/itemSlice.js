import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userProducts: localStorage.getItem("userProducts") ? JSON.parse(localStorage.getItem("userProducts")) : null
};

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.userProducts = action.payload;
      localStorage.setItem("userProducts", JSON.stringify(action.payload));
    },
    clearProducts: (state, actions) => {
      state.userProducts = null
      localStorage.removeItem('userProducts')
    },
    updateItem: (state, action) => { },
    deleteProductById: (state, action) => {
      const productId = action.payload;
      state.userProducts = state.userProducts.filter(
        (product) => product._id !== productId
      );
      localStorage.setItem("userProducts", JSON.stringify(state.userProducts));
    },
  },
});

export const { setItems, clearProducts, deleteProductById } = itemSlice.actions;

export default itemSlice.reducer;