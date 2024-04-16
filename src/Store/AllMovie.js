import { createSlice } from "@reduxjs/toolkit";

const AllD = createSlice({
  name: "AllMovie",
  initialState: [],
  reducers: {
    addAllMovies: (state, action) => {
      return action.payload;
    },
  },
});
export const { addAllMovies } = AllD.actions;
export default AllD.reducer;
