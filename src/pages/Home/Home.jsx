import './Home.css';

import axios from 'axios';
import React, { useState } from 'react';

import video from '../../assets/videos/caminando.mp4';

const Home = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    organizacion: '',
    email: '',
    telefono: '',
    contraseña: '',
    comentarios: '',
  });
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:8080/contact2/send-email2',
        formData,
      );
      console.log('Response:', response);
      console.log('Status Text:', response.statusText);

      if (response.data.success) {
        console.log('Mensaje enviado con éxito');
      } else {
        console.error('Error al enviar el formulario:', response.data.error);
      }

      setMensajeEnviado(true);
      setFormData({
        nombre: '',
        apellido: '',
        organizacion: '',
        email: '',
        telefono: '',
        contraseña: '',
        comentarios: '',
      });
      setTimeout(() => {
        setMensajeEnviado(false);
      }, 5000);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

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
        <form className="formulario" onSubmit={handleSubmit}>
          <ul className="grid_container">
            <li>
              <label htmlFor="username">Ingrese su nombre</label>
              <input
                name="nombre"
                type="text"
                value={formData.nombre}
                onChange={handleChange}
              />
            </li>
            <li>
              <label htmlFor="apellido">Ingrese su apellido</label>
              <input
                name="apellido"
                type="text"
                value={formData.apellido}
                onChange={handleChange}
              />
            </li>
            <li>
              <label htmlFor="organizacion">Nombre de la organización</label>
              <input
                name="organizacion"
                type="text"
                value={formData.organizacion}
                onChange={handleChange}
              />
            </li>
            <li>
              <label htmlFor="email">Correo electrónico</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              <p>
                Crea tu cuenta con tu dirección de email profesional para evitar
                limitaciones de envío
              </p>
            </li>
            <li>
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="number"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
              />
            </li>
            <li>
              <label htmlFor="clave">Genere una contraseña</label>
              <input
                type="password"
                name="contraseña"
                value={formData.contraseña}
                onChange={handleChange}
              />
              <p>Mínimo 1 letra mayúscula, 1 número y caracteres especiales</p>
            </li>
            <li>
              <label htmlFor="message">Comentarios:</label>
            </li>
            <div className="texto_comentarios">
              <textarea
                name="comentarios"
                rows="6"
                cols="50"
                value={formData.comentarios}
                onChange={handleChange}
              />
            </div>
            <div>
              <input type="submit" value="Enviar" />
            </div>
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
      {mensajeEnviado && (
        <p style={{ color: 'red', fontSize: '1.5em' }}>Mensaje Enviado</p>
      )}
    </div>
  );
};

export default Home;
