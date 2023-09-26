import React from "react";
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

export default () => {

  const menu = [
    { titulo: "Home", ruta: "/home" },
    { titulo: "On boarding", ruta: "/xx" },
    { titulo: " Acerca de nosotros", ruta: "/nosotros" },
    { titulo: "Noticias", ruta: "/notificas" },
    { titulo: "Blog", ruta: "/blod" },
    { titulo: "Comentarios", ruta: "/comentarios" },
    { titulo: "Contáctanos", ruta: "/contactanos" }
  ];

  return (

    <Navbar fixed="top" style={{padding: "0"}}>
      <Navbar.Toggle/>
      <Navbar.Collapse className="bg-utez">
        <Nav >
          <Nav.Link>
          {/* <img src="https://placehold.co/60x50/02ac89/FFF" alt="logotipo" */}
          </Nav.Link>
          {menu.map((elemento, index) => (
          <Nav.Link className="text-white" key={index} href={elemento.ruta}>
            {elemento.titulo}
          </Nav.Link>
        ))}
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>

    
  );
};
