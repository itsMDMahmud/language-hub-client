import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-5 min-h-[calc(100vh-300px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
