import React from "react";
import AboutUs from "./AboutUs";
import MissionVision from "./MissionVision";
import Objectives from "./Objetives";


const AboutUsPage = () => {
  return (
    <div className="container">
    <div className="row">
      <AboutUs/>
      <div className="col-md-10 text-center">
        <p className="text-wrap">
        La Universidad Tecnológica Emiliano Zapata (UTEZ), es una Universidad pública creada en el año 2000 que forma parte del Sistema Nacional de Universidades Tecnológicas de la SEP, cuyo innovador modelo ofrece planes de estudio para formar Técnicas y Técnicos Superiores Universitarios e Ingenieros e Ingenieras en sólo tres años ocho meses, generando profesionistas competentes con altos niveles tecnológicos para dar respuesta a las necesidades de los sectores social y productivo de la región y del país.
        </p>
        <MissionVision/>
        <Objectives  />
      </div>
      </div>
    </div>
  );
};

export default AboutUsPage;