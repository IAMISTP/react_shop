import { createSlice, current } from "@reduxjs/toolkit";

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
      const check = state.find((element) => element.id === action.payload.id);
      if (check === undefined) {
        state.push({
          id: action.payload.id,
          name: action.payload.title,
          count: 1,
        });
      } else {
        check.count += 1;
      }
    },
    delItem(state, action) {
      console.log(current(state));
      let result = state.filter((data) => data.id !== action.payload);
      return result;
    },
  },
});

export let { changeCount, increase, subtract, addItem, delItem } =
  baskets.actions;
export default baskets;
