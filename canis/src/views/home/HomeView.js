
import React from "react";

import Navbar from "../../components/shared/Navbar";
import About from "../../components/shared/About";
import Footer from "../../components/shared/Footer";

import PlanEstudios from "../../components/home/PlanEstudios";
import QuienesSomos from "../../components/home/QuienesSomos";
import MisionVision from "../../components/home/MisionVision";
import OfertaEducativa from "../../components/home/OfertaEducativa";
import Carreras from "../../components/home/Carreras";


function HomeView() {

  return (
    <>
      <div>

        <Navbar />



        <div className="container" style={{ marginTop: "3%" }}> 
          <PlanEstudios />


          <div className="row">
            <div className="col-12">

              <img src="http://www.utez.edu.mx/images/2022/02/Portada-conocenos.png"
                className="img-fluid" height="550px" width="100%"
                alt="Imagen"
                ></img>

              <br />
              <br />
              <QuienesSomos />
              <MisionVision />

            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <OfertaEducativa />
            </div>
          </div>


          <br />

          <Carreras />

          <About />

          <br />
          <Footer />
        </div>

      </div>
    </>
  );
}

export default HomeView;
