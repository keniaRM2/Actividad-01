import React from "react";
import Navbar from "../../components/shared/Navbar";

import buzon_de_quejas from '../../assets/images/buzon_de_quejas.png';
import buzon_dudas from '../../assets/images/buzon_dudas.png';
import telefono from '../../assets/images/IconoTelefono.png';
import privacidad from '../../assets/images/IconoAviso_Privacidad.png'
function ContactsView() {
  return (
    <>
    <Navbar/>
      <div className="container">
        <div className="row">
          <div>
            <h1 className="text-success">Contactanos</h1>
            <div className="d-flex gap-4">
              <p>
                Av. Universidad Tecnológica No.1, Col. Palo Escrito, C.P. 62760,
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
            </div>
            <div className="d-flex gap-4">
              <p>Emiliano Zapata, Morelos. Tel. (01 777) 3 68 11 65</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-telephone"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>
            </div>
            <p className="fw-bold">
              Comunícate sin costo al 01 800 050 UTEZ(8839)
            </p>
            <div className="text-center">
            <h1 className="text-success">Ubicacion</h1>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.828576851627!2d-99.20331042497726!3d18.850288459019986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdd8bad2a5ef7d%3A0xddfd0f46aac691ee!2sUniversidad%20Tecnol%C3%B3gica%20Emiliano%20Zapata%20UTEZ!5e0!3m2!1ses!2smx!4v1694216937715!5m2!1ses!2smx"
                width="1200"
                height="450"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <footer id="footer" className="container">
        <div id="pie-pagina" className="container">
          <div className="row content-span-tb">
            <div className="custom">
              <table style={{ backgroundColor: "#f4f4f4", width: "100%" }}>
                <tbody>
                  <tr style={{ verticalAlign: "middle" }}>
                    <td style={{ height: "200px" }} width="138">
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdm_OCLell8njgsCJYYvAckgJbTojA1nGDLv2bHrFTnchFWtQ/viewform"
                        target="_blank"
                        rel="alternate"
                      >
                        <img
                          src={buzon_dudas}
                          alt="Quejas y sugerencias UTEZ,"
                          width="138"
                          height="150"
                        />
                      </a>
                    </td>
                    <td style={{ height: "150px" }} width="138">
                      <a
                        href="http://buzonciudadano.morelos.gob.mx/"
                        target="_blank"
                        rel="alternate"
                      >
                        <img
                          src={buzon_de_quejas}
                          alt="Buzón de quejas y sugerencias en línea,"
                          width="138"
                          height="185"
                        />
                      </a>
                    </td>
                    <td
                      style={{ height: "200px", textAlign: "center" }}
                      width="138"
                    >
                      <p>
                        <a href="/index.php/ubicacion" rel="alternate">
                          <img
                            src={telefono}
                            alt="Ubica la universidad aquí,"
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
                          rel="alternate"
                        >
                          <img
                            src={privacidad}
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
                        style={{ border: "0" }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3997.4350115088523!2d-99.20030440182333!3d18.851499449046152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdd8bad2a5ef7d%3A0xddfd0f46aac691ee!2sUniversidad%20Tecnol%C3%B3gica%20Emiliano%20Zapata%20UTEZ!5e0!3m2!1ses-419!2smx!4v1693856468481!5m2!1ses-419!2smx"
                        width="600"
                        height="200"
                        allowFullScreen="allowFullScreen"
                      ></iframe>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default ContactsView;
