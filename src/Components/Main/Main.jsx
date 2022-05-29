import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import "./main.scss";
import RouterLink from "../Routes/Routes";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <div className="navProf">
        <Navbar />
        <RouterLink />
      </div>
    </div>
  );
};
export default Main;
