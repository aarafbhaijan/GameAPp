import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../../lib/Store/Store";

// Define a type for the slice state
interface CartState {
  id: string[];
}

// Define the initial state using that type
const initialState: CartState = {
  id: [],
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   add:(state,actions)=>{
    state.id.push(actions.payload);
   }
  },
});

export const { add } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default cartSlice.reducer;
