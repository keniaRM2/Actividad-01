import React from "react";
import Navbar from "../../components/shared/Navbar";
import './onboarding.js'

function OnboardingView(){

    return (
        
        <>
        <><Navbar />
            <div class="container">
                <div class="card">
                    <card class="card-body">
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <a class="navbar-brand" href="#">Tu Sitio</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link" href="#acerca">Acerca de Nosotros</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#contacto">Contáctanos</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#oferta">Oferta Educativa</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#plan">Plan de Estudio</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </card>
                </div>
            </div></><div>
                <div id="recorrido"></div>
            </div></>
    );
}

export default OnboardingView;