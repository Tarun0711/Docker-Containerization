import React from "react";
import { MdDashboard } from "react-icons/md";
import { AiFillDashboard } from "react-icons/ai";
import Logo from "../Assests/Images/Logo.svg";
import "./SideNav.css";
import { Link } from "react-router-dom";
function SideNav() {
  return (
    <div>
      <div className="Sidenav">
        <img src={Logo} alt="logo" />
        <div className="icons">
          <Link style={{textDecoration:"none"}} to={"/"}>
            <MdDashboard className="icon 1" />
          </Link>
          <Link to={"/performance"}>
            <AiFillDashboard className="icon 2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
