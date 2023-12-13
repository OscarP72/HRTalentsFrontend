import './EnvioCurriculum.css'; // Añade tus estilos aquí

import axios from 'axios';
import React, { useState } from 'react';

const EnvioCurriculum = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    cv: null,
  });

  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append('nombre', formData.nombre);
      data.append('apellidos', formData.apellidos);
      data.append('email', formData.email);
      data.append('cv', formData.cv);

      // Enviar datos al backend
      const response = await axios.post('http://localhost:8080/enviar-curriculum', data);

      console.log(response.data);

      setMensajeEnviado(true);
      setFormData({
        nombre: '',
        apellidos: '',
        email: '',
        cv: null,
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
      <h2>Envío de Curriculum</h2>
      {mensajeEnviado && (
        <p style={{ color: 'green', fontSize: '1.5em' }}>
          Curriculum enviado correctamente
        </p>
      )}
      <form className="envio-curriculum" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
        <input
          type="text"
          name="apellidos"
          placeholder="Apellidos"
          value={formData.apellidos}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="cv" className="upload">
          CV⤴
        </label>
        <input type="file" id="cv" accept=".pdf" onChange={handleFileChange} />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default EnvioCurriculum;
