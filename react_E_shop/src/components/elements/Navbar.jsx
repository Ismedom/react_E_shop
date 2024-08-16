import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={{ color: "#ffff" }}>
      <NavLink path="/">home</NavLink>
    </nav>
  );
};

export default NavBar;
