import { createSlice } from "@reduxjs/toolkit";

const interactionSlice = createSlice({
  name: "interaction",
  initialState: {
    history: [],
  },
  reducers: {
    addInteraction: (state, action) => {
      state.history.push(action.payload);
    },
  },
});

export const { addInteraction } = interactionSlice.actions;

export default interactionSlice.reducer;