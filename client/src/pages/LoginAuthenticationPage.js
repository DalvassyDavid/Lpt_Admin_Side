import { Link, Outlet } from "react-router-dom";
import "../App.css";
import admin_photo from "../images/adminphoto.jpeg";
import logo from "../images/name.png";
import { AiOutlineBars, AiFillQuestionCircle } from "react-icons/ai";
import { MdOutlineNotificationsActive, MdOutlineEmail } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { RiHomeHeartFill } from "react-icons/ri";
import { FaPeopleGroup, FaRadio } from "react-icons/fa6";
import { FcAdvertising } from "react-icons/fc";
import axios from "axios";
import { useEffect, useState } from "react";
import { TbCloudLock } from "react-icons/tb";
// import Dashboard from "../Reusables/DashboardItemsTemplate";

function LoginAuthenticationPage() {
  const [passwordtextexchange, setpasswordtextexchange] = useState("password");
  const showhidepasswordFunc = () => {
    if (passwordtextexchange == "password") {
      setpasswordtextexchange("text");
    } else {
      setpasswordtextexchange("password");
    }
  };
  return (
    <div className="LoginAuthenticationPage-container">
      <div className="LoginAuthenticationPage-container-div">
        <div className="LoginAuthenticationPage-container-div-padlock">
          <TbCloudLock size={100} />
          <div>Authentication</div>
        </div>
        <div>
          <form action="">
            <label
              for="first"
              className="LoginAuthenticationPage-container-div-input-label"
            >
              Username:
            </label>
            <input
              className="LoginAuthenticationPage-container-div-input-text"
              type="text"
              id="first"
              name="first"
              placeholder="Enter your Username"
              required
            />
            <label
              for="password"
              className="LoginAuthenticationPage-container-div-input-label"
            >
              Password:
            </label>
            <input
              className="LoginAuthenticationPage-container-div-input-password"
              type={passwordtextexchange}
              id="password"
              name="password"
              placeholder="Enter your Password"
              required
            />
            <input type="checkbox" onClick={showhidepasswordFunc} />{" "}
            <span style={{ fontSize: "15px" }}>Show Password</span>
            <br/>
            <br/>
            <br/>
            <div className="wrap">
              <button className="LoginAuthenticationPage-submit-button" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginAuthenticationPage;
