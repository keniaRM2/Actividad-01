import React, { useState } from "react";
import Navbar from "../../components/shared/Navbar";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import onboarding from "./onboarding";

function OnboardingView() {

    const pasos = [
        { href: "#acerca", titulo: "Acerca de nosotros", elemento: "acerca", mensaje: "Bienvenido a la página 'Acerca de Nosotros'. Aquí puedes obtener información sobre nuestra organización." },
        { href: "#contacto", titulo: "Contáctanos", elemento: "contacto", mensaje: "Visita la página 'Contáctanos' para obtener detalles de contacto y enviarnos un mensaje." },
        { href: "#oferta", titulo: "Oferta Educativa", elemento: "oferta", mensaje: "Explora nuestra 'Oferta Educativa' para conocer nuestros programas de estudio." },
        { href: "#plan", titulo: "Plan de Estudio", elemento: "plan", mensaje: "Consulta el 'Plan de Estudio' para obtener información detallada sobre nuestros cursos y currículo." }
    ];

    const [mensaje, setMensaje] = useState("");
    const [mostrar, setMostrar] = useState(false);

    function LinkWithTooltip({ id, children, href, tooltip }) {
        return (
            <OverlayTrigger
                overlay={<Tooltip id={id}>{tooltip}</Tooltip>}
                placement="bottom"
                delayShow={300}
                delayHide={150}
            >
                <a  className="nav-link " href={href}>{children}</a>
            </OverlayTrigger>
        );
    }

    return (

        <>
            <><Navbar />
                <div class="container">
                    <div class="card">
                        <card class="card-body">
                            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                <a class="navbar-brand" href="#"

                                    onClick={() => {

                                        setMensaje("")
                                    }}
                                >Tu Sitio</a>
                                <button class="navbar-toggler" type="button"


                                    data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNav">
                                    <ul class="navbar-nav">

                                        {pasos.map((paso, index) => (
                                            <li class="nav-item">
                                             

                                                <LinkWithTooltip  tooltip={paso.mensaje} href={paso.href}  id="{index}">
                                                {paso.titulo}
                                                </LinkWithTooltip>


                                            </li>
                                        ))}

                                    </ul>
                                </div>
                            </nav>
                        </card>
                    </div>
                </div></><div>

                <div id="recorrido">
                    {mensaje}
                </div>
            </div></>
    );
}

export default OnboardingView;