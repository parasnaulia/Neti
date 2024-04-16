export const BG_Image =
  "https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg";
export const LOGO =
  "https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940";
export const TMDB_API_KEY = "275bd097098082d3158f10dd0764e72f";
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "content-type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzViZDA5NzA5ODA4MmQzMTU4ZjEwZGQwNzY0ZTcyZiIsInN1YiI6IjY1ZTg1OGFhZWIwOTMyMDE4NzFjODQ3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FyE-AVgQbH0dVaE0IsWljJ-JeNE_qHrtTQlT0EUZdy0",
  },
};
export const image_url = "https://image.tmdb.org/t/p/w400";
export const Api_liNK = [
  {
    url: "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    name: "Now Playing",
  },
  {
    url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    name: "Popular",
  },
  {
    url: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    name: "Top Rated",
  },
  {
    url: "https://api.themoviedb.org/3/movie/upcoming?language=en-US=&page=1",
    name: "Upcoming",
  },
];
