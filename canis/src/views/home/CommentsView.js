import React from "react";
import Navbar from "../../components/shared/Navbar";


function CommentsView() {
  // Tu códirertgo para la vista de comentarios
  return(
    <>
    <Navbar/>
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Comentarios</h1>
        <div className="">
          <button className="btn btn-outline-success">Agregar comentario</button>
        </div>
      </div>
      <hr className="my-4" />
      <div className="row g-3">
      <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <span className="h6">Araceli García</span>
                <small>hace 1 semana</small>
              </div>
              <p>Territorio de calidad</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <span className="h6">Alba López</span>
                <small>hace 8 horas</small>
              </div>
              <p>Mejorar el equipo de computo de las aulas</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <span className="h6">Noé Martinez</span>
                <small>hace 6 días</small>
              </div>
              <p>Arreglen los aire acondicionado</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <span className="h6">Kenia Reyes</span>
                <small>hace 3 semanas</small>
              </div>
              <p>Mejorar los horarios de comida y menús de las cafeterias</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <span className="h6">Isaac Galindo</span>
                <small>hace 3 semanas</small>
              </div>
              <p>Mejorar los horarios de comida y menús de las cafeterias</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <span className="h6">Thayli</span>
                <small>hace 1 mes</small>
              </div>
              <p>No hay señal en los edificios</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default CommentsView;