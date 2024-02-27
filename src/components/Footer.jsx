import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const today = new Date();

  return (
    <footer className="p-8 text-gray-400">
      <FontAwesomeIcon className="icon hover:text-white cursor:pointer" icon={faFacebookSquare} size="2x" />
      <FontAwesomeIcon className="icon hover:text-white cursor:pointer" icon={faInstagram} size="2x" />
      <FontAwesomeIcon className="icon hover:text-white cursor:pointer" icon={faXTwitter} size="2x" />
      <FontAwesomeIcon className="icon hover:text-white cursor:pointer" icon={faYoutube} size="2x" />
      <div className="footer-links gap-2 py-8">
        <a className="hover:text-white cursor:pointer text-sm" href="/#">Idiomas e legendas</a>
        <a className="hover:text-white cursor:pointer text-sm" href="/#">Audiodescrição</a>
        <a className="hover:text-white cursor:pointer text-sm" href="/#">Central de ajuda</a>
        <a className="hover:text-white cursor:pointer text-sm" href="/#">Cartão pré-pago</a>
        <a className="hover:text-white cursor:pointer text-sm" href="/#">Imprensa</a>
        <a className="hover:text-white cursor:pointer text-sm" href="/#">Relação com investidores</a>
        <a className="hover:text-white cursor:pointer text-sm" href="/#">Carreiras</a>
        <a className="hover:text-white cursor:pointer text-sm" href="/#">Termos de uso</a>
        <a className="hover:text-white cursor:pointer text-sm" href="/#">Privacidade</a>
        <a className="hover:text-white cursor:pointer text-sm" href="/#">Avisos legais</a>
        <a className="hover:text-white cursor:pointer text-sm" href="/#">Preferências de cookies</a>
        <a className="hover:text-white cursor:pointer text-sm" href="/#">Informações corporativas</a>
        <a className="hover:text-white cursor:pointer text-sm" href="/#">Entre em contato</a>
      </div>
      <p className="text-sm">© 1997 - {today.getFullYear()} </p>
    </footer>
  );
}

export default Footer;
