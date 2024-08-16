import React from "react";
import NavBar from "./components/elements/Navbar";
import Footer from "./components/elements/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
