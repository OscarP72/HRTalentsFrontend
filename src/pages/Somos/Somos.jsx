import "./Somos.css";

import React from "react";

const Somos = () => {
  return (
    <>
      <div className="container_identidad">
        <article className="quienes_somos">
          <h1>Quienes somos</h1>
          <p>
            {" "}
            HRTalents somos una empresa española que ha sido creada para ofrecer
            a quienes lo necesiten el mejor software de RR.HH.que se pueda
            encontrar hoy en el mercado. Este sofware permite que las gestiones
            de control de los empleados de una empresa sean efectiva,
            automáticas y unificadas para obtener excelentes resultados. Adiós
            caos. Bienvenido a HRTalens.{" "}
          </p>
          <p>
            El eje central de este negocio lo constituye nuestros clientes,
            cubrir sus demandas, resolver sus problemas y mejorar sus
            experiencias, son nuestros principales objetivos para poner a su
            disposición nuestros valores.
          </p>
        </article>

        <div className="container_objetivos">
          <h3>Nuestros valores</h3>
          <li>
            <strong>Honestidad</strong>
            Trabajamos con honestidad considerándole como la base para crear una
            cultura de trabajo idónea y coherente con el comportamiento
            empresa-cliente, lo que nos ha permitido generar un ambiente de
            confianza.
          </li>
          <li>
            <strong>Transparencia</strong>
            Es un valor que permite a nuestra empresa generar un proceso
            empresarial hacia nuestros clientes totalmente abierto, honesto y
            directo .
          </li>
          <li>
            <strong>Equipo apasionado</strong>
            Contamos con un equipo de empleados muy apasionado por el trabajo
            que realiza, ofreciendo a nuestros clientes una atención
            personalizada y adaptada a sus necesidades.
          </li>
          <li>
            <strong>Diferenciación</strong>
            HRTalents somos una empresa creada para marcar la diferencia con
            respecto a las otras empresas de la competencia. Ofrecemos servicios
            altamente cualificados que marcan tendencias. Contamos con
            experiencia en investigaciones de mercado de las cuales hemos
            obtenido resultados óptimos, ágiles y precisos que no permiten
            ofrecer magníficos resultados con nuestras gestiones.
          </li>
          <li>
            <strong> Atención humanizada de Calidad y responsabilidad </strong>
            Es el lema de HRTalens .
          </li>
        </div>
        <article>
          <h2>NUESTROS SERVICIOS</h2>
          <ul>
            <li>Control de asistencia</li>
            <li>Gestión de turnos</li>
            <li>Gestión de vacaciones y de ausencias</li>
            <li>Elaboración de informes</li>
          </ul>
        </article>
        <article>
          <h3>ELIGE HRTalents</h3>
        </article>
      </div>
    </>
  );
};

export default Somos;
