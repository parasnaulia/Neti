import { createSlice } from "@reduxjs/toolkit";

const Gpt = createSlice({
  name: "GPT_DATA",
  initialState: [],
  reducers: {
    ADDGPT: (state, action) => {
      return action.payload;
    },
  },
});
export const { ADDGPT } = Gpt.actions;
export default Gpt.reducer;
