import { createSlice } from "@reduxjs/toolkit";

const Gpt1 = createSlice({
  name: "GPT_DATA1",
  initialState: false,
  reducers: {
    ADDGPT: (state, action) => {
      return !state;
    },
  },
});
export const { ADDGPT } = Gpt1.actions;
export default Gpt1.reducer;
