import "./Home.css";

import React from "react";

const Home = () => {
  return (
    <>
      <div className="main_container">
        <div className="poster">
          <img src="./public/img/preview.jpg" alt="Preview" />
        </div>
      </div>
      <div className="container_titulo">
        <div className="titulo">
          <h1>HRTalens</h1>
        </div>
      </div>

      <div className="banner">
        <h2>
          Reduce las gestiones-Impulsa el negocio-Empodera a las personas.
        </h2>
      </div>
      <div className="formulario">
        <h2>Solicite una demostración gratuita</h2>
        <p>
          El software de RR.HH. que convierte las gestiones de control horario,
          ausencias, gastos o nóminas en automáticas, efectivas y unificadas.
          Adiós caos. Bienvenido a HRTalens.
        </p>
        <input type="text" name="nombre" placeholder="Nombre" required />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          required
        />
        <input type="submit" value="Enviar" />
      </div>
    </>
  );
};

export default Home;
