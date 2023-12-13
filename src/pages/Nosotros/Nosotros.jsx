import "./Nosotros.css";

import React from "react";

const Nosotros = () => {
  return (
    <>
      <div className="container_nosotros">
        <div className="titulo_somos">
          <h1>Quienes somos</h1>
        </div>

        <div className="text_container">
          <p>
            En 2023 se creó HRTalents como Gestora de Recursos Humanos. Quienes
            formamos parte de HRTalents apostamos por el derecho a la igualdad
            de oportunidades para que estas personas puedan acceder a empleos de
            mayor cualificación, estables y adaptables.
          </p>
          <p>
            HRTalents somos una empresa española creada con el mejor software.
            Este permite que las gestiones de control de los empleados de una
            empresa sean efectivas, automáticas y unificadas para obtener
            excelentes resultados. Adiós caos. Bienvenido a <b>HRTalents</b>
          </p>
        </div>
        <div className="container_valores">
          <div className="titulo_valores">
            <h3>Nuestros valores</h3>
          </div>

          <div className="flex_valores">
            <div className="valor1">
              <h2>Honestidad</h2>
              <p>
                Consideramos que la base para crear una cultura de trabajo
                idónea y coherente con el comportamiento empresa-cliente, es la
                Honestidad con la que los atendemos, lo que nos ha permitido
                generar un ambiente de confianza.
              </p>
            </div>
            <div className="valor2">
              <h2>Transparencia</h2>
              <p>
                El eje central de este negocio lo constituye nuestros clientes,
                cubrir sus demandas, resolver sus problemas y mejorar sus
                experiencias, son nuestros principales objetivos para poner a su
                disposición de manera transparente nuestros valores.
              </p>
            </div>
            <div className="valor3">
              <h2>Equipo apasionado</h2>
              <p>
                Contamos con un equipo de empleados muy apasionado por el
                trabajo que realiza, ofreciendo a nuestros clientes una atención
                personalizada y adaptada a sus necesidades, los cuales son muy
                bien recibidos como parte de la familia HRTalens.
              </p>
            </div>
            <div className="valor4">
              <h2>Diferenciación</h2>
              <p>
                <b>HRTalents</b> día a día genera tendencia en la Gestión de
                Recursos Humanos. Nos especializamos en dar servicio a los
                colectivos más desfavorecidos a nivel social y laboral: mujeres
                y hombres mayores de 35 años afectados por una discapa- cidad
                superior al 33%, que presentan dificultades para tener acceso a
                un empleo y/o al mantenimiento del mismo.
              </p>
            </div>
          </div>
          <div className="flex_lema">
            <h2>Atención humanizada de Calidad y responsabilidad</h2>
            <p>
              <b> Es el lema de HRTalens</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nosotros;
