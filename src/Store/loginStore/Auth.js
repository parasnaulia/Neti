import { createSlice } from "@reduxjs/toolkit";

const Auth = createSlice({
  name: "Auth",
  initialState: false,
  reducers: {
    AuthAdd: (state, action) => {
      return !state;
    },
  },
});
export let { AuthAdd } = Auth.actions;
export default Auth.reducer;
