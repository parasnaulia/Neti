const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "content-type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzViZDA5NzA5ODA4MmQzMTU4ZjEwZGQwNzY0ZTcyZiIsInN1YiI6IjY1ZTg1OGFhZWIwOTMyMDE4NzFjODQ3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FyE-AVgQbH0dVaE0IsWljJ-JeNE_qHrtTQlT0EUZdy0",
  },
};
async function fetching() {
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    options
  );
  const jsonData = await data.json();
  console.log(jsonData);
}
fetching();
