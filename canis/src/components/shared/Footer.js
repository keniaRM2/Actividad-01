
import React from "react";
import { BsFacebook, BsTwitter, BsYoutube, BsLinkedin } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default () => {

    return (

        <div>
           <footer>
                <div className="footer-content">
                    <h3>Territorio de Calidad</h3>
                   
                    <Link className="btn link-success" to="/nosotros">Acerca de nosotros</Link> | 
                    <Link className="btn link-success" to="/privacidad">Política de privacidad</Link> | 
                    <Link className="btn link-success" to="/terminosYcondiciones">Términos y condiciones</Link> | 
                    <Link className="btn link-success" to="/avisoLegal">Aviso legal</Link> | 
                    <Link className="btn link-success" to="/cookies">Política de cookies</Link> | 
                    <Link className="btn link-success" to="/contacto">Contacto</Link> | 
                    
                    <ul className="socials">
                    <li> <BsFacebook/></li>
                    <li><BsTwitter/></li>
                    <li><BsYoutube/></li>
                    <li><BsLinkedin/></li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2023 </p>
                </div>
            </footer> 
        </div>
    )
}

