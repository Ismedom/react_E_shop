import React from "react";
import NavBar from "./components/elements/Navbar";
import Footer from "./components/elements/Footer";
import { Outlet } from "react-router-dom";
import "./style/style.css";

const Layout = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <NavBar />
      <div style={{ minHeight: "70vh" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
