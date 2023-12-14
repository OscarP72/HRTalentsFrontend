import './PoliticaPrivacidad.css';

import React, { useState } from 'react';

const PoliticaPrivacidad = () => {
  const [setPoliticaAceptada] = useState(false);

  const handleAceptar = () => {
    setPoliticaAceptada(true);
  };

  return (
    <div className="politica_privacidad">
      <h2>Política de Privacidad de HRTalens</h2>
      <p>

        almacenamiento de datos y estudios de marketing para adecuar el Contenido ofertado
        al Usuario, así como mejorar la calidad, funcionamiento y navegación por el Sitio
        Web. En el momento en que se obtengan los datos personales, se informará al
        Usuario acerca del fin o fines específicos del tratamiento a que se destinarán los
        datos personales; es decir, del uso o usos que se dará a la información

        Personales y garantía de los derechos digitales, solo los mayo-res de 14 años
        podrán otorgar su consentimiento para el tratamiento de sus datos personales de
        forma lícita por HRTalents. Si se trata de un menor de 14 años, será necesario el
        consentimiento de los padres o tutores para el tratamiento, y este solo se

        datos de carácter personal y se evite la destrucción, pérdida o alteración
        accidental o ilícita de datos personales transmitidos, conservados o tratados de
        otra forma, o la comunicación o acceso no autorizados a dichos datos.Sin embargo,
        debido a que HRTalents no puede garantizar la inexpugabilidad de internet ni la
        ausencia total de hackers u otros que accedan de modo fraudulento a los datos
        personales, el Responsable del tratamiento se compromete a comunicar al Usuario
        sin dilación indebida cuan-do ocurra una violación de la seguridad de los datos
        personales que sea probable que entrañe un alto riesgo para los derechos y
        libertades de las personas físicas. Siguiendo lo establecido en el artículo 4 del
        RGPD, se entiende por violación de la seguridad de los datos personales toda
        violación de la seguridad que ocasione la destrucción, pérdida o alteración
        accidental o ilícita de datos personales transmitidos, conservados o tratados de
        auto-matizados, el Usuario tendrá derecho a recibir del Responsable del
        tratamiento sus datos perso-nales en un formato estructurado, de uso común y
        lectura mecánica, y a transmitirlos a otro res-ponsable del tratamiento. Siempre
        que sea técnicamente posible, el Responsable del tratamiento transmitirá
        directamente los datos a ese otro responsable.Derecho de oposición: Es el derecho
        del Usuario a que no se lleve a cabo el tratamiento de sus datos de carácter
        personal o se cese el tratamiento de los mismos por parte de HRTalents.Derecho a
        no ser a no ser objeto de una decisión basada únicamente en el tratamiento automa-
        tizado, incluida la elaboración de perfiles: Es el derecho del Usuario a no ser
        objeto de una deci-sión individualizada basada únicamente en el tratamiento
        automatizado de sus datos personales, incluida la elaboración de perfiles,
        existente salvo que la legislación vigente establezca lo contra-rio.Así pues, el
        Usuario podrá ejercitar sus derechos mediante comunicación escrita dirigida al
        Res- ponsable del tratamiento con la referencia “RGPD-”, especificando: Nombre,
        apellidos del Usuario y copia del DNI. En los casos en que se admita la
        representación, será también necesaria la identificación por el mismo medio de la
        persona que representa al Usuario, así como el documento acreditativo de la
        representación. La fotocopia del DNI podrá ser sustituida, por cualquier otro
        medio válido en derecho que acredite la identidad. Petición con los motivos
        específicos de la solicitud o información a la que se quiere acceder.Domicilio a
        efecto de notificaciones.Fecha y firma del solicitante. Todo documento que
        acredite la petición que formula.Esta solicitud y todo otro documento adjunto
        podrá enviarse a la siguiente dirección y/o correo electrónico:Dirección
        postal:Correo electrónico: dwhrsoft@gmail.comEnlaces a sitios web de tercerosEl
        Sitio Web puede incluir hipervínculos o enlaces que permiten acceder a páginas web
        de terce-ros distintos de HRTalents, y que por tanto no son operados por
        HRTalents. Los titulares de di-chos sitios web dispondrán de sus propias políticas
        de protección de datos, siendo ellos mismos, en cada caso, responsables de sus
        propios ficheros y de sus propias prácticas de privacidad. Reclamaciones ante la
        autoridad de controlEn caso de que el Usuario considere que existe un problema o
        infracción de la normativa vigente en la forma en la que se están tratando sus
        datos personales, tendrá derecho a la tutela judicial efectiva y a presentar una
        reclamación ante una autoridad de control, en particular, en el Estado en el que
        tenga su residencia habitual, lugar de trabajo o lugar de la supuesta infracción.
        En el caso de España, la autoridad de control es la Agencia Española de Protección
        de Datos (http://www.agpd.es).II. ACEPTACIÓN Y CAMBIOS EN ESTA POLÍTICA DE
        PRIVACIDADEs necesario que el Usuario haya leído y esté conforme con las
        condiciones sobre la protección de datos de carácter personal contenidas en esta
        Política de Privacidad, así como que acepte el tratamiento de sus datos personales
        para que el Responsable del tratamiento pueda proceder al mismo en la forma,
        durante los plazos y para las finalidades indicadas. El uso del Sitio Web
        impli-cará la aceptación de la Política de Privacidad del mismo. HRTalents se
        reserva el derecho a modificar su Política de Privacidad, de acuerdo a su propio
        criterio, o motivado por un cambio legislativo, jurisprudencial o doctrinal de la
        Agencia Española de Protección de Datos. Los cambios o actualizaciones de esta
        Política de Privacidad no serán notificados de forma explícita al Usuario. Se
        recomienda al Usuario consultar esta página de for-ma periódica para estar al
        tanto de los últimos cambios o actualizaciones.Esta Política de Privacidad fue
        actualizada para adaptarse al Reglamento (UE) 2016/679 del Parlamento Europeo y
        del Consejo, de 27 de abril de 2016, relativo a la protección de las perso-nas
        físicas en lo que respecta al tratamiento de datos personales y a la libre
        circulación de estos datos (RGPD) y a la Ley Orgánica 3/2018, de 5 de diciembre,
        de Protección de Datos Personales y garantía de los derechos digitales.Este
        documento de Política de Privacidad de un sitio web ha sido creado mediante el
        generador de plantilla de política de privacidad online el día 01/07/2021.
      </p>
      <button onClick={handleAceptar}>Aceptar</button>
    </div>
  );
};

export default PoliticaPrivacidad;
