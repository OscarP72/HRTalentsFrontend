import './contacto.css';

import axios from 'axios';
import React, { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    motivo: '',
  });

  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:8080/contact/send-email',
        formData,
      );
      console.log(response.data);

      setMensajeEnviado(true);
      setFormData({
        nombre: '',
        apellido: '',
        email: '',
        motivo: '',
      });
      setTimeout(() => {
        setMensajeEnviado(false);
      }, 5000);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <div className="page">
      <div className="contact-info">
        <h2>Te escuchamos</h2>
        <p>
          Puedes ponerte en contacto con nosotros escribiéndonos un correo electrónico o,
          si lo prefieres, llamándonos por teléfono. Estaremos encantados de atenderte y
          brindarte todo el apoyo necesario. ¡Esperamos saber de ti pronto!
        </p>
        <p>
          Teléfono: +34 91 110 61 06
          <br />
          Correo electrónico: info@rhtalents.com
        </p>
      </div>

      <form className="contact" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={formData.apellido}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="motivo"
          placeholder="Motivo de contacto"
          value={formData.motivo}
          onChange={handleChange}
        />
        <input type="submit" value="Enviar" />
      </form>
      {mensajeEnviado && (
        <p style={{ color: 'red', fontSize: '1.5em' }}>Mensaje Enviado</p>
      )}
    </div>
  );
};

export default Contacto;
