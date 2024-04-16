import { useEffect, useState } from "react";
import { options } from "./Constants/Constants";
import { useSelector } from "react-redux";
// import MovieCart from "./MovieCart";
import SecondaryContainer from "./SecondaryContainer";

const VideoContainer = ({ video }) => {
  const data = useSelector((state) => {
    return state.Movie;
  });

  // console.log(data);
  // console.log("outsidde Child");
  const [v_data, setV] = useState("");

  // console.log(video);
  const fetching = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${video}/videos?language=en-US`,
      options
    );
    const jsonData = await data.json();
    setV(jsonData.results);
    // console.log("inside Child Fetch Or useEffect");
    const mainData = jsonData.results.filter((item) => {
      return item.name === "Official Trailer";
    });
    // console.log(mainData);
    setV(mainData[0].key);
  };
  // console.log(v_data);
  useEffect(() => {
    fetching();
  }, [video]);

  return (
    <>
      <div className="Div_frame">
        <iframe
          width="100%"
          height="100%"
          className="Frame1"
          src={`https://www.youtube.com/embed/${
            v_data && v_data
          }?&autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <div className="Title1">
          {" "}
          <h2 className="h2">
            {data?.results?.length > 0 && data?.results[0]?.title}
          </h2>
          <p className="p">
            {data?.results?.length > 0 && data?.results[0]?.overview}
          </p>
          <h4 className="h4">
            IMDB {data?.results?.length > 0 && data?.results[0]?.vote_average}
          </h4>
          <div className="btn">
            <button className="Play">▶️ Play</button>
            <button className="Pause"> Info</button>
          </div>
        </div>
      </div>
      <SecondaryContainer />
    </>
  );
};
export default VideoContainer;
