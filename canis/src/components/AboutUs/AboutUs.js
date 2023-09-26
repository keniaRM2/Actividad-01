import React from "react";
import Logo from "./Logo";
import Header from "./Header";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="row">
      <Logo/>
      <Header/>
      </div>
      <div className="row">
        <img
          src="http://www.utez.edu.mx/images/2022/02/Portada-conocenos.png"
          alt="imagen"
          className="img"
        />
      </div>
      <br />
      <div className="row">
      </div>
    </div>
  );
};

export default AboutUs;