import React from "react";
import NavBar from "./components/elements/Navbar";
import Footer from "./components/elements/Footer";
import { Outlet } from "react-router-dom";
import "./style/style.css";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div style={{ minHeight: "70vh" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
