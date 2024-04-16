import { useEffect, useState } from "react";
import Header from "./Components/Header";
import { options } from "./Constants/Constants";
import VideoContainer from "./VideoContainer";
import { useDispatch, useSelector } from "react-redux";
import { AddMovie } from "./Store/Slice_Video";
import Fetching from "./Hooks/Fetching";
// import { json } from "react-router-dom";

const Browse = () => {
  // const apiKey = process.env.SECRECT_KEY;

  const dispatch = useDispatch();
  const [video, setVideo] = useState(872585);
  const data1 = useSelector((state) => {
    return state.LoginData;
  });
  // console.log("browse Page");
  // console.log("this is My Browse data" + data1);
  // console.log(data1);
  // console.log("browse PAge");

  async function fetching() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );
    const jsonData = await data.json();
    // console.log("Parent");
    // console.log(jsonData);

    setVideo(jsonData.results[0].id);
    dispatch(AddMovie(jsonData));

    // console.log("Inside Parent Fetch Or Use Effect");
    // console.log(jsonData.results[0].id);
  }
  // console.log("Parent Out");

  useEffect(() => {
    try {
      fetching();
      // window.location.reload();
    } catch (e) {
      console.log("Sorry Error is there" + e);
    }
  }, []);
  return (
    <div>
      <Header />
      <div>
        <div>
          <VideoContainer video={video} />
        </div>
        <div>List of Movies </div>
      </div>
    </div>
  );
};
export default Browse;
