import { createSlice } from "@reduxjs/toolkit";

let baskets = createSlice({
  name: "basket",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    increase(state, action) {
      const copy = state.find((element) => element.id === action.payload);
      copy.count += 1;
    },
    subtract(state, action) {
      const copy = state.find((element) => element.id === action.payload);
      copy.count -= 1;
    },
    addItem(state, action) {
      state.push({
        id: action.payload.id,
        name: action.payload.title,
        count: 1,
      });
    },
  },
});

export let { changeCount, increase, subtract, addItem } = baskets.actions;
export default baskets;
