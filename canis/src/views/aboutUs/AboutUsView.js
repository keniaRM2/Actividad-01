import React from "react";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import AboutUsPage from "../../components/AboutUs/AboutUsPage";


const AboutUsView=()=>{

  return (
    <>
      <div>
        <Navbar/>
        <AboutUsPage/>
        <Footer/>
      </div>
    </>
  );
}

export default AboutUsView;
