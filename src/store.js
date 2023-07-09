import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";
import baskets from "./store/basketsSlice";

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    baskets: baskets.reducer,
  },
});
