import { useEffect } from "react";
import MovieCart from "./MovieCart";
import { Api_liNK, options } from "./Constants/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlaying } from "./Store/Slice_Video_Cont";
import Fetching from "./Hooks/Fetching";
import { addAllMovies } from "./Store/AllMovie";

const SecondaryContainer = () => {
  const data = useSelector((state) => {
    return state.AllMovie;
  });
  // console.log(data);
  //   console.log("This is my Now Playing" + Nowplaying);
  const item = useSelector((state) => {
    return state.NowPlaying;
  });
  //   console.log(item.results);

  const Dispatch = useDispatch();
  // const [apidata, setApi] = useState([]);
  const fetching_data = async () => {
    const data = Api_liNK.map((item) => {
      return Fetching(item.url);
    });
    const main = await Promise.all(data);
    // console.log(main);
    // console.log("This is after all promise resolved");
    // setApi(main);
    Dispatch(addAllMovies(main));
  };
  useEffect(() => {
    fetching_data();
  }, []);
  const dispatch = useDispatch();
  async function fetching() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );
    const jsonData = await data.json();
    // console.log(jsonData);
    dispatch(addNowPlaying(jsonData.results));
  }
  useEffect(() => {
    if (!(item.length > 0)) {
      fetching();
    }
  }, []);
  return (
    <>
      {data.map((item, index) => {
        return (
          <div className="MovieCont" key={index}>
            <h1> {Api_liNK[index].name}</h1> <MovieCart item={item.results} />
          </div>
        );
      })}
    </>
  );
};
export default SecondaryContainer;
