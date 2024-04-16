import { useDispatch, useSelector } from "react-redux";
import { LOGO, hosting } from "../Constants/Constants";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ADDAuthData, AuthAdd } from "../Store/loginStore/Auth";
import { addData } from "../Store/loginStore/LoginSlice";
import { ADDGPT } from "../Store/loginStore/Gpt";

const Header = () => {
  const navigate = useNavigate();
  const tog = useSelector((state) => {
    return state.Auth;
  });
  const dispatch = useDispatch();
  const Auth = useSelector((state) => {
    return state.Auth;
  });
  // console.log("This is My auth");
  console.log(Auth);
  useEffect(() => {
    // console.log("comes to use Effect");
    let token = localStorage.getItem("token");
    // console.log(token);
    if (token && tog === false) {
      async function verification() {
        try {
          const data = await fetch(`${hosting}/verification`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token: token }),
          });
          console.log("Post");
          const real_data = await data.json();
          dispatch(AuthAdd());
          dispatch(addData(real_data));
          dispatch(ADDGPT());
          if (real_data) {
            // dispatch(ADDAuthData(real_data));
          }
          // console.log(real_data);
        } catch (e) {
          console.log("Need To Login");
        }

        //
        // console.log(data);

        // console.log(data.ok);
      }

      verification();
    } else {
    }
  }, []);
  const [namme, setName] = useState("user");
  const gpt = useSelector((state) => {
    return state.GPT_DATA1;
  });

  const { name } = useSelector((state) => {
    return state.LoginData;
  });

  useEffect(() => {
    setName(name);
  }, [name]);
  console.log("this is Name of header");
  // console.log(name);
  // console.log(gpt);
  console.log(name);
  // console.log(gpt);
  return (
    <div className="Header">
      <div className="H-img">
        {/* <div className="ham">aknfjabnjfb</div> */}
        <div className="ham">
          {" "}
          <img
            src="../../hamburger.png"
            alt="Girl in a jacket"
            width="20px"
            height="20px"
          />
        </div>
        <img
          className="LOGO"
          src={LOGO}
          alt="NOIMG"
          style={{ height: "100%", width: "15rem" }}
        />
      </div>
      <div className="gpt-div">
        {/* <button
          onClick={() => {
            <Link to="/login"></Link>;
          }}
          className="Gpt-btn"
        >
          {" "}
          Gpt Search
        </button> */}
        {gpt && (
          <Link to="/browse/gptsearch" className="Gpt-btn">
            Gpt Search
          </Link>
        )}
      </div>

      <div className="Profile1">
        {gpt && (
          <div
            className="Logout"
            onClick={() => {
              alert("Logout Sucessfully");
              localStorage.removeItem("token");
              dispatch(AuthAdd());
              dispatch(ADDGPT());
              navigate("/");
            }}
          >
            LogOut
          </div>
        )}
        <div>
          {gpt && (
            <img
              src="https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg"
              alt="NO_Img"
              style={{ height: "3.5rem", width: "3.5rem", cursor: "pointer" }}
            />
          )}
        </div>
        {gpt && "Hello"}
        <div> {namme && gpt && namme}</div>
      </div>
    </div>
  );
};
export default Header;
