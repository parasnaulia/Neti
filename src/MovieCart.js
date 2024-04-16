import { useEffect } from "react";
import { Api_liNK, image_url } from "./Constants/Constants";
import Fetching from "./Hooks/Fetching";
import { useDispatch, useSelector } from "react-redux";

import { addAllMovies } from "./Store/AllMovie";

const MovieCart = ({ item }) => {
  // console.log(apidata);
  // console.log(data);
  if (item && item.length > 0) {
    return item.map((movie) => (
      <div key={movie.id} className="Cart-Container">
        <div className="MovieCart">
          <div>
            {" "}
            <h4>{movie.title}</h4>
          </div>
          <div>
            <img 
              src={`${image_url}${movie?.poster_path}`}
              className="Movie-cart"
              alt="NOIMG"
            />
          </div>
        </div>
      </div>
    ));
  } else {
    return;
  }
};

export default MovieCart;
