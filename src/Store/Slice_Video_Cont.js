import { createSlice } from "@reduxjs/toolkit";

const NowPlaying1 = createSlice({
  name: "NowPlaying",
  initialState: {},
  reducers: {
    addNowPlaying: (state, action) => {
      console.log("This is My Now Playing");
      return action.payload;
    },
  },
});
export const { addNowPlaying } = NowPlaying1.actions;
export default NowPlaying1.reducer;
