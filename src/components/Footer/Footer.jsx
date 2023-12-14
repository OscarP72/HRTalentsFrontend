import './Footer.css';

import React from 'react';

import LogoFinal from '../../assets/logo/LogoFinal.png';

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="content_flex">
        <div className="logo">
          <figure>
            <div className="flex_logo">
              <img src={LogoFinal} alt="LogoFinal" />
            </div>
          </figure>
        </div>
        <div className="titulo_parrafos">
          <h2>SOBRE NOSOTROS</h2>
          <p>
            En 2023 se creó HRTalents como Gestora de Recursos Humanos. El equipo de
            trabajo de HRTalents apuesta por el derecho a la igualdad de oportunidades
            para que las personas que tienen discapacidad puedan acceder a empleos de
            mayor cualificación, estables y adaptables.
          </p>
        </div>
        <div className="social_icons">
          <h2>SIGUENOS</h2>
          <div className="red-social">
            <a
              href="https://www.facebook.com/"
              className="fa fa-facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp;
            </a>
            <a
              href="https://www.instagram.com/"
              className="fa fa-instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp;
            </a>
            <a
              href="https://twitter.com/"
              className="fa fa-twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp;
            </a>
            <a
              href="https://www.youtube.com/"
              className="fa fa-youtube"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp;
            </a>
            <a
              href="https://www.linkedin.com/"
              className="fa fa-linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp;
            </a>
          </div>
        </div>
        <div className="copyrigt">
          <small>
            &copy; 2023 <b>HRTalents</b> - Todos los Derechos Reservados.
          </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
