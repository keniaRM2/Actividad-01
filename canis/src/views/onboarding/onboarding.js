import React, { useEffect, useState } from 'react';

function Onboarding() {
  const pasos = [
    { elemento: "acerca", mensaje: "Bienvenido a la página 'Acerca de Nosotros'. Aquí puedes obtener información sobre nuestra organización." },
    { elemento: "contacto", mensaje: "Visita la página 'Contáctanos' para obtener detalles de contacto y enviarnos un mensaje." },
    { elemento: "oferta", mensaje: "Explora nuestra 'Oferta Educativa' para conocer nuestros programas de estudio." },
    { elemento: "plan", mensaje: "Consulta el 'Plan de Estudio' para obtener información detallada sobre nuestros cursos y currículo." }
  ];

  const [indicePaso, setIndicePaso] = useState(0);

  useEffect(() => {
    mostrarPaso(pasos[indicePaso]);

    // Manejar clic en cualquier parte de la página para avanzar al siguiente paso
    document.addEventListener("click", () => {
      setIndicePaso((prevIndice) => {
        const nuevoIndice = prevIndice + 1;
        if (nuevoIndice < pasos.length) {
          mostrarPaso(pasos[nuevoIndice]);
          return nuevoIndice;
        } else {
          ocultarPaso();
          return prevIndice;
        }
      });
    });
  }, [indicePaso]);

  // Función para mostrar un paso del recorrido
  function mostrarPaso(paso) {
    const elemento = document.querySelector(`[href="#${paso.elemento}"]`);
    const recorrido = document.getElementById("recorrido");

    // Posiciona el recorrido junto al enlace
    const rect = elemento.getBoundingClientRect();
    recorrido.style.left = rect.left + "px";
    recorrido.style.top = rect.bottom + "px";

    // Muestra el mensaje del paso
    recorrido.innerHTML = paso.mensaje;
    recorrido.style.display = "block";
  }

  // Función para ocultar el recorrido
  function ocultarPaso() {
    const recorrido = document.getElementById("recorrido");
    recorrido.style.display = "none";
  }
  
  return (
    <div>
      {/* Contenedor para el recorrido guiado */}
      <div id="recorrido"></div>
      
      {/* Tu contenido de la aplicación React */}
      {/* ... */}
    </div>
  );

}

export default Onboarding;
