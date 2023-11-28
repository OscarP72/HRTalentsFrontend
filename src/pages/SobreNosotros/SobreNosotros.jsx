import './SobreNosotros.css';

import sobreNosotros from '../../assets/sobrenosotros.jpg';

const SobreNosotros = () => {
  return (
    <div className="container">
      <h1>Bienvenido a nuestra empresa de gestión de personal</h1>
      <p>
        Somos una empresa dedicada a ofrecer soluciones integrales en la gestión de
        personal, brindando servicios que optimizan el recurso humano de tu organización.
        Nuestra misión es proporcionar herramientas efectivas para el manejo eficiente del
        talento, permitiéndote concentrarte en el crecimiento y éxito de tu empresa.
      </p>
      <img src={sobreNosotros} alt="Imagen representativa de la empresa" />
    </div>
  );
};

export default SobreNosotros;
