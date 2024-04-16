import { createSlice } from "@reduxjs/toolkit";

const loginData = createSlice({
  name: "LoginData",
  initialState: { name: "User" },
  reducers: {
    addData: (state, action) => {
      console.log("This is My add ");
      return { ...state, ...action.payload };
    },
  },
});
export const { addData } = loginData.actions;
export default loginData.reducer;
