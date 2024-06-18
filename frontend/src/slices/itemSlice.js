// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   userProducts: localStorage.getItem("userProducts")
//     ? JSON.parse(localStorage.getItem("userProducts"))
//     : null,
// };

// const itemSlice = createSlice({
//   name: "items",
//   initialState,
//   reducers: {
//     setItems: (state, action) => {
//       state.userProducts = action.payload;
//       localStorage.setItem("userProducts", JSON.stringify(action.payload));
//     },
//     deleteItem: (state, action) => {},
//     updateItem: (state, action) => {},
//   },
// });

// export const { setItems } = itemSlice.actions;

// export default itemSlice.reducer;