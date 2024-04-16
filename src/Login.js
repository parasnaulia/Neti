import { useDispatch, useSelector } from "react-redux";
import { Toggle } from "./Store/SignUp";
import { BG_Image, hosting } from "./Constants/Constants";
import Header from "./Components/Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ADDGPT } from "./Store/loginStore/Gpt";
import { addData } from "./Store/loginStore/LoginSlice";
import { AuthAdd } from "./Store/loginStore/Auth";

const Login = () => {
  // const [gpt, setGpt] = useState(false);
  const dispatch = useDispatch();
  const [ft, setFt] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [login, setlogin] = useState({
    name: "",
    email: "",
    password: "",
  });
  // console.log(gpt);
  const toggle = useSelector((state) => {
    return state.Sign;
  });
  // console.log(data);

  useEffect(() => {
    const handleclick = async () => {
      // e.preventDefault();
      // console.log(login);
      // console.log(toggle);

      if (toggle && ft === true) {
        // Only proceed if it's sign-up mode (toggle === true)
        try {
          const response = await fetch(`${hosting}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(login), // Send login data in request body
          });

          const data = await response.json(); // Parse response as JSON
          dispatch(AuthAdd());
          // console.log(login);

          // Handle successful response (e.g., display success message, redirect)
          // console.log("Sign-up successful:", data);
          alert("You are Sign up Now you can sign in");
          dispatch(Toggle());
          localStorage.setItem("token", data.jwtToken);
          dispatch(addData(data));
          dispatch(ADDGPT());
          window.location.reload();

          // dispatch(AuthAdd());
          // dispatch(addData(data));
        } catch (error) {
          console.error("Error during sign-up:", error);

          // Handle errors appropriately (e.g., display error message)
        }
      } else if (toggle === false && ft === true) {
        try {
          const response2 = await fetch(`${hosting}/login`, {
            method: "POST",

            headers: { "Content-type": "application/json" },
            body: JSON.stringify(login),
          });
          // console.log("this is My login Datat");
          // console.log(login);
          // console.log("The Data from response2");
          let data1 = await response2.json();
          dispatch(ADDGPT());

          // console.log(data1);
          if (response2.ok) {
            // console.log("This is My data login data" + data1);

            console.log("This is data1");
            console.log(data1);
            // Assuming 'token' is your token string
            localStorage.setItem("token", data1.jwtToken);
            // setGpt(true);
            //

            // console.log(login);
            // dispatch(ADDGPT());
            dispatch(addData(data1));

            dispatch(AuthAdd());
            navigate("/browse");
            window.location.reload();
          }
        } catch (e) {
          setShow(true);
        }
      } else {
        console.log("oppop");
      }
    };
    handleclick();
  }, [ft]);

  return (
    <>
      <Header />
      <div>
        <img src={BG_Image} alt="NOIMG" className="B-img" />
        <form
          onSubmit={(e) => {
            // console.log("Form Submitted");
            e.preventDefault();

            //Now Here i will write be a new User
          }}
        >
          <div className="Form">
            <div className="sign">
              {toggle === true ? "Sign up" : "Sign In"}
            </div>
            {toggle ? (
              <div className="input-E">
                <input
                  placeholder="Enter Your Name"
                  type="text"
                  value={login.name}
                  onChange={(e) => {
                    setlogin((prev) => {
                      return { ...prev, name: e.target.value };
                    });
                  }}
                />
              </div>
            ) : (
              ""
            )}
            <div className="input-E">
              <input
                placeholder="Email or Phone"
                type="text"
                value={login.email}
                onChange={(e) => {
                  setlogin((prev) => {
                    return { ...prev, email: e.target.value };
                  });
                }}
              />
            </div>
            <div className="input-E">
              <input
                placeholder="Password"
                type="password"
                onChange={(e) => {
                  setlogin((prev) => {
                    return { ...prev, password: e.target.value };
                  });
                }}
              />
            </div>
            <div>
              <button
                className="btn-Sign"
                onClick={() => {
                  // handleclick();
                  setFt(!ft);
                }}
              >
                {toggle === false ? "Sign IN" : "Sign Up"}
              </button>
            </div>
            {show === true ? <p>Something went wrong</p> : ""}
            {toggle === false ? (
              <div className="Sign-up">
                {" "}
                is New to Netflix?
                <button className="btn-S" onClick={() => dispatch(Toggle())}>
                  Sign up
                </button>
              </div>
            ) : (
              <div className="Sign-up">
                {" "}
                Already Registered ?
                <button className="btn-S" onClick={() => dispatch(Toggle())}>
                  Sign In
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
