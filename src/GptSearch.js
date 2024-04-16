import { useEffect, useRef, useState } from "react";
import Header from "./Components/Header";
import { BG_Image } from "./Constants/Constants";
import OpenAI from "openai";
import { useDispatch, useSelector } from "react-redux";
import { ADDGPT } from "./Store/GptData";
import MovieCart from "./MovieCart";
import Shimmer from "./Shimmer";
// import Fetching from "./Hooks/Fetching";

const GptSearch = () => {
  // const data1 = ["Avengers", "Fight club"];
  const inputData = useRef("");
  const dispatch = useDispatch();
  const [ap, setAp] = useState([]);
  const data = useSelector((state) => {
    return state.GPT_DATA;
  });
  const openai = new OpenAI({
    apiKey: process.env.API_Key,
    dangerouslyAllowBrowser: true, // This is the default and can be omitted
  });

  async function main() {
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `Act as a movie recommendation system and suggest some movies for the query : ${inputData.current.value} .Only give me name of movies with comma seperated.
          result should always look like - Spider Man, Elemental, Phir Hera Pheri."`,
        },
      ],
      model: "gpt-3.5-turbo",
    });
    // console.log(chatCompletion);
    console.log(chatCompletion?.choices[0]?.message?.content.split(", "));
    dispatch(ADDGPT(chatCompletion?.choices[0]?.message?.content.split(", ")));
  }
  // main();
  // console.log(data);
  async function DFecting(ele) {
    const pp = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${ele}&api_key=${process.env.API_Key}`
    );
    const ppjson = await pp.json();
    console.log("First promise");
    return ppjson;

    // console.log(ppjson);
  }
  const fetching_data = async () => {
    const data1 = data.map((item) => {
      return DFecting(item);
    });
    const main = await Promise.all(data1);
    // console.log(main);
    // console.log("This is after all promise resolved");
    // setApi(main);
    // Dispatch(addAllMovies(main));
    console.log(main);
    setAp(main);
  };
  useEffect(() => {
    fetching_data();
  }, [data]);

  return (
    <>
      <div className="GPT-S">
        <Header />
        <div className="div-1">
          <div>
            <input
              ref={inputData}
              className="s-input"
              placeholder="Enter the type of Movie You Want to Search"
              type="text"
            />
            <button
              className="btn-1"
              onClick={() => {
                main();
              }}
            >
              Search
            </button>
          </div>
        </div>
        <div className="div-2">
          <img className="bg-img" src={BG_Image} alt="NOIMG" />
        </div>
      </div>
      <div className="Movie-Container">
        {ap.length > 0
          ? ap.map((item, index) => {
              return (
                <div className="Gpt-cont">
                  {" "}
                  <div>
                    <MovieCart key={index} item={item.results} />
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </>
  );
};
export default GptSearch;
