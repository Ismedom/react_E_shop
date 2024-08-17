import React from "react";
import { NavLink } from "react-router-dom";
import NavBarData from "../../constant/NavBar";
import "../../style/style.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar-container">
        <div style={{ fontSize: "18px" }}>logo</div>
        <div className="nav-bar-items">
          {NavBarData.map(({ path, text }) => (
            <NavLink to={path} key={text} className="nav-bar-link">
              {text}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
