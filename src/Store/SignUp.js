import { createSlice } from "@reduxjs/toolkit";

const SignUp = createSlice({
  name: "Sign",
  initialState: false,
  reducers: {
    Toggle: (state) => {
      // console.log("This is Clicked buttaaaaon");
      return !state;
    },
  },
});
export const { Toggle } = SignUp.actions;
export default SignUp.reducer;
