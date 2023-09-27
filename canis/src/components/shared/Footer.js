import React from "react";

const Footer = () => {
  return (
    <div className="col-md-12">
      <footer id="footer" className="container">
        <div id="pie-pagina" className="container">
          <div className="row content-span-tb">
            <div className="custom">
              <table style={{ backgroundColor: "#f4f4f4", width: "100%" }}>
                <tbody>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td style={{ height: "200px" }} width="238">
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdm_OCLell8njgsCJYYvAckgJbTojA1nGDLv2bHrFTnchFWtQ/viewform"
                        target="_blank"
                      >
                        <img
                          src="http://www.utez.edu.mx/images/2019/02/buzon_dudas.png"
                          alt="Quejas y sugerencias UTEZ"
                          width="138"
                          height="150"
                        />
                      </a>
                    </td>
                    <td style={{ height: "150px" }} width="238">
                      <a
                        href="http://buzonciudadano.morelos.gob.mx/"
                        target="_blank"
                      >
                        <img
                          src="http://www.utez.edu.mx/images/2017/feb/buzon_de_quejas.png"
                          alt="Buzón de quejas y sugerencias en línea"
                          width="138"
                          height="165"
                        />
                      </a>
                    </td>
                    <td
                      style={{ height: "200px", textAlign: "center" }}
                      width="138"
                    >
                      <p>
                        <a
                          title="avisos-de-privacidad"
                          href="/index.php/ubicacion"
                          
                        >
                          <img
                            src="http://www.utez.edu.mx/images/web/IconoTelefono.png"
                            alt="Avisos de Privacidad"
                            width="100"
                            height="130"
                          />
                        </a>
                      </p>
                      <p>&nbsp;</p>
                    </td>
                    <td
                      style={{ height: "200px", textAlign: "center" }}
                      width="138"
                    >
                      <p>
                        <a
                          title="avisos-de-privacidad"
                          href="/index.php/avisos-de-privacidad"
                          
                        >
                          <img
                            src="http://www.utez.edu.mx/images/web/IconoAviso_Privacidad.png"
                            alt="Avisos de Privacidad"
                            width="100"
                            height="130"
                          />
                        </a>
                      </p>
                      <p>&nbsp;</p>
                    </td>
                    <td style={{ height: "200px" }} width="600">
                      <iframe
                        style={{ border: 0 }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3997.4350115088523!2d-99.20030440182333!3d18.851499449046152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdd8bad2a5ef7d%3A0xddfd0f46aac691ee!2sUniversidad%20Tecnol%C3%B3gica%20Emiliano%20Zapata%20UTEZ!5e0!3m2!1ses-419!2smx!4v1693856468481!5m2!1ses-419!2smx"
                        width="600"
                        height="200"
                        allowFullScreen
                        title="Google Maps"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
