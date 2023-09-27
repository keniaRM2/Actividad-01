import React from "react";
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import routerConstans from "../../router/routerConstans";
export default () => {

  const menu = [
    { titulo: "Home", ruta: routerConstans.HOME },
    { titulo: "On boarding", ruta: routerConstans.ONBOARDING },
    { titulo: " Acerca de nosotros", ruta: routerConstans.ABOUTUS },
    { titulo: "Noticias", ruta: routerConstans.NEWS },
    { titulo: "Comentarios", ruta: routerConstans.COMMENT },
    { titulo: "Contáctanos", ruta: routerConstans.CONTACTS }
  ];

  return (
    <>
      <Navbar fixed="top" style={{ padding: "0"}}>
        <Navbar.Toggle />
        <Navbar.Collapse className="bg-utez">
          <Nav>
            <Nav.Link></Nav.Link>
            {menu.map((elemento, index) => (
              <Nav.Link className="text-white" key={index} href={elemento.ruta}>
                {elemento.titulo}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  
     
      <div style={{ marginBottom: "50px" }}/>
  

    </>
  );
  
};
