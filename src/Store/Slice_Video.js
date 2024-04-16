import { createSlice } from "@reduxjs/toolkit";

const Movie_data = createSlice({
  name: "Movie",
  initialState: {},
  reducers: {
    AddMovie: (state, action) => {
      //   console.log("this is Movie Slice");
      return action.payload;
    },
  },
});
export const { AddMovie } = Movie_data.actions;
export default Movie_data.reducer;
