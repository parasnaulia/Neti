import { configureStore } from "@reduxjs/toolkit";
import SignUp from "./SignUp";
import Slice_Video from "./Slice_Video";
import NowPlaying1 from "./Slice_Video_Cont";
import Alld from "./AllMovie";
import Gpt from "./GptData";
import login from "./loginStore/LoginSlice";
import Gpt1 from "./loginStore/Gpt";
import Auth1 from "./loginStore/Auth";
const Store = configureStore({
  reducer: {
    Sign: SignUp,
    Movie: Slice_Video,
    NowPlaying: NowPlaying1,
    AllMovie: Alld,
    GPT_DATA: Gpt,
    LoginData: login,
    GPT_DATA1: Gpt1,
    Auth: Auth1,
  },
});
export default Store;
