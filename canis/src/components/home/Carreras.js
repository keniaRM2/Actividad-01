import React from "react";
import Accordion from 'react-bootstrap/Accordion';

export default () => {
  return (<div>

    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>TSU - Técnico Superior Universitario1</Accordion.Header>
        <Accordion.Body>
            <ul>
              <li>Técnico Superior Universitario en Procesos Industriales área: Manufactura</li>
              <li>Técnologías de la Información área: Infraestructura de Redes Digitales</li>
              <li>Tecnologías de la Información área: Desarrollo de Software Multiplataforma</li>
              <li>Terapia Física área: Rehabilitación</li>
              <li>Terapia física área: Turismo de Salud y Bienestar</li>
              <li>Diseño digital área: Animación</li>
              <li>Administración área: Capital Humano</li>
              <li>Contaduría</li>
              <li>Diseño y moda industrial área: Producción</li>
              <li>Mantenimiento área: Industrial</li>
              <li>Mecatrónica área: Automatización</li>
              <li>Desarrollo de negocios área: Mercadotecnia</li>
              <li>Nanotecnología área: Materiales</li>
            </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Ingeniería</Accordion.Header>
        <Accordion.Body>
            <ul>
              <li>Ingeniería en Desarrollo y Gestión de Software</li>
              <li>Ingeniería en Redes Inteligentes y Ciberseguridad</li>
              <li>Ingeniería Industrial</li>
              <li>Ingeniería en Mecatrónica</li>
              <li>Ingeniería en Nanotecnología</li>
              <li>Ingeniería en Diseño Textil y Moda</li>
              <li>Ingeniería en Mantenimiento Industrial</li>
            </ul>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Licenciatura</Accordion.Header>
        <Accordion.Body>
            <ul>
              <li>Licenciatura en Terapia Física</li>
              <li>Licenciatura en Diseño Digital y Producción Audiovisual</li>
              <li>Licenciatura en Innovación de Negocios y Mercadotecnia</li>
              <li>Licenciatura en Gestión de Capital Humano</li>
            </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </div>)
}