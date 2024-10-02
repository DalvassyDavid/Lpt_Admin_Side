import { Link, Outlet } from "react-router-dom";
import "../App.css";
import admin_photo from "../images/adminphoto.jpeg";
import logo from "../images/name.png";
import { AiOutlineBars, AiFillQuestionCircle } from "react-icons/ai";
import { MdOutlineNotificationsActive, MdOutlineEmail } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { RiHomeHeartFill } from "react-icons/ri";
import { FaPeopleGroup, FaRadio } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { GrMultimedia } from "react-icons/gr";

import axios from "axios";
import { useEffect, useState } from "react";
// import Dashboard from "../Reusables/DashboardItemsTemplate";

function NavBar() {
  const [adminLoggedInDetails, setAdminLoggedInDetails] = useState({
    name: "David",
    position: "Map Media Manager",
    admin_photo: admin_photo,
  });
  


  return (
    <div>
      <div className="navbar-top-right-css">
        <div className="navbar-top-side-css">
          <div className="navbar-top-side-css-admin-photo">
            <div className="navbar-admin-photo-div">
              <img
                src={adminLoggedInDetails.admin_photo}
                className="navbar-admin-photo"
                alt="admin details loading"
              />
            </div>
            <div className="navbar-admin-name">
              <div>
                <br />
                {adminLoggedInDetails.name}
              </div>
            </div>
          </div>

          <div className="navbar-top-side-css-logo-dashboard">
            <div className="navbar-top-side-css-logo">
              <div className="navbar-top-side-css-logo-threedots-div">
                <AiOutlineBars size={35} />{" "}
              </div>
              <div className="navbar-top-side-css-logo-name">
                {/* <img
                  src={logo}
                  alt="logo"
                  className="navbar-top-side-css-logo-img"
                /> */}
                <h1>Limuru Praise Team</h1>
              </div>
              <div className="navbar-top-side-css-logo-icons">
                <div>
                  <MdOutlineNotificationsActive color="white" size={25} />
                </div>
                <div>
                  <AiFillQuestionCircle color="white" size={25} />
                </div>
                <div>
                  <MdOutlineEmail color="white" size={25} />
                </div>
              </div>
              <div className="navbar-top-side-css-logo-threedots-2-div">
                <RiLogoutCircleLine size={25} color="orange" />
                {/* <div>Logout?<div/></div> */}
              </div>
            </div>
            <div className="navbar-top-side-css-dashboard">
              <div>
                <h3>
                  Dashboard <span></span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-left-side-dashboard-css">
          <div className="navbar-left-side-css">
            <ul>
              <li>
                <div>
                  <RiHomeHeartFill size={24} color="orange" />
                </div>
                <div>
                  <Link to="stats" className="li-link">
                    Dashboard
                  </Link>
                </div>
              </li>
              <li>
                <div>
                  <FaPeopleGroup size={24} color="blue" />
                </div>
                <div>
                  <Link to="members" className="li-link">
                    Members
                  </Link>
                </div>
              </li>
              <li>
                <div>
                  <FaRadio size={24} color="green" />
                </div>
                <div>
                  <Link to="newsedit " className="li-link">
                    News_Events
                  </Link>
                </div>
              </li>
              <li>
                <div>
                  <FaYoutube size={24} color="red" />
                </div>
                <div>
                  <Link to="youtube" className="li-link">
                    YouTube
                  </Link>
                </div>
              </li>
              <li>
                <div>
                  <GrMultimedia size={24} color="red" />
                </div>
                <div>
                  <Link to="mapmedia" className="li-link">
                    Map_Media
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
