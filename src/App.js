import React, { useEffect } from "react";
// import Header from "./Components/Header";
import Login from "./Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
// import { Provider } from "react-redux";
// let pp = true;
console.log("This is My Local storage data");
// pp();

const App = () => {
  // const navigate = useNavigate();
  const tog = useSelector((state) => {
    return state.Auth;
  });
  // let tog = true;
  const route = createBrowserRouter([
    {
      path: "/",
      element: tog === true ? <Browse /> : <Login />,
    },
    {
      path: "/browse",
      element: tog === true ? <Browse /> : <Login />,
    },
    {
      path: "/browse/gptsearch",
      element: tog === true ? <GptSearch /> : <Login />,
    },
  ]);

  // console.log("This is my Routes");
  // console.log(tog);
  return (
    <RouterProvider router={route}>
      {/* <Header /> */}
      {/* <Login /> */}
      {/* {tog === true ? navigate("/browse") : navigate("/")} */}
      {/* <Login /> */}
      {/* <Login /> */}
    </RouterProvider>
  );
};

export default App;
