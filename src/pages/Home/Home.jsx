import './Home.css';

import React from 'react';

import video from '../../assets/videos/caminando.mp4';

const Home = () => {
  return (
    <div className="container_home">
      <div className="video_container">
        <video src={video} alt="Video" loop muted autoPlay className="video_total" />
      </div>
      <div className="texto_video">
        <div className="flex_titulo">
          <h1>Bienvenido a HRTalens</h1>
        </div>
        <div className="flex_banner">
          <h2>
            Fomentamos el empleo de las personas trabajadoras con discapacidad en el
            mercado global
          </h2>
        </div>
        <div className="flex_solicitud">
          <h3>Solicita demostración gratis</h3>
        </div>
        <div className="flex_registro">
          <h2>Regístrate</h2>
        </div>
      </div>
      <div className="container_formulario">
        <form className="grid_cuadricula">
          <ul>
            <li>
              <label htmlFor="username">Ingrese su nombre</label>
              <input id="username" name="username" type="text" />
            </li>
            <li>
              <label htmlFor="apellido">Ingrese su apellido</label>
              <input id="apellido" name="apellido" type="text" />
            </li>
            <li>
              <label htmlFor="organizacion">Nombre de la organización</label>
              <input id="empresa" name="empresa" type="text" />
            </li>
            <li>
              <label htmlFor="email">Correo electrónico</label>
              <input id="email" name="email" type="email" />
              <p>
                Crea tu cuenta con tu dirección de email profesional para evitar
                limitaciones de envío
              </p>
            </li>
            <li>
              <label htmlFor="phone">Teléfono</label>
              <input type="tel" id="phone" />
            </li>
            <li>
              <label htmlFor="clave">Genere una contraseña</label>
              <input type="password" id="contraseña" />
              <p>Mínimo 1 letra mayúscula, 1 número y caracteres especiales</p>
            </li>
            <li>
              <label htmlFor="message">Comentarios:</label>
            </li>
            <li className="texto_comentarios">
              <textarea id="message" name="mensaje" rows="6" cols="50"></textarea>
            </li>
            <button className="button">Enviar registro</button>

            <li>
              <label htmlFor="tac">
                <p>
                  <a href="../PoliticaPrivacidad" target="_blank">
                    {'Lea nuestra Política de Privacidad'}
                  </a>
                </p>
                <input id="tac" type="checkbox" name="terminos y condiciones" />
                <p> Aceptar los términos y condiciones</p>
              </label>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Home;
