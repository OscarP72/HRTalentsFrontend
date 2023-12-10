import './contacto.css';

const Contacto = () => {
  return (
    <div className="page">
      <h2>Contacto</h2>
      <form className="contact" action="mailto:dwhrsoft@gmail.com">
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellido" />
        <input type="text" placeholder="Email" />
        <textarea placeholder="Motivo de contacto" />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Contacto;
