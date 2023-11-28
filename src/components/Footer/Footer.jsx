import './Footer.css';

const Footer = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />

      <footer className="footer fondo-secundario mt-5 pt-4 pb-4">
        <div className="footer-content d-flex flex-wrap justify-content-around">
          <div className="footer-column text-center mb-3">
            <h3 className="text-white mb-2">RhTalents</h3>
            <p className="text-white">Teléfono: 911106106</p>
            <p className="text-white">Email: info@rhtalents.com</p>
            <p className="text-white">Dirección: Calle de Fray Luis de León, 11</p>
            <p className="text-white">28012 Madrid</p>
          </div>
          <div className="footer-column text-center mb-3 mt-2">
            <div className="btn-group">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                className="btn btn-info"
                rel="noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="btn btn-danger"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-links text-center mt-4 mb-4">
          <a href="https://www.once.es" target="_blank" className="mx-2" rel="noreferrer">
            <img
              src="https://www.once.es/logo.png"
              alt="Logo de Once"
              className="img-fluid"
              style={{ maxWidth: '110px' }}
            />
          </a>
          <a href="https://www.fundaciononce.es/es" className="mx-2">
            <img
              src="https://portalentodigital.fundaciononce.es/sites/default/files/pictures/logo-gso2021.png"
              alt="Logo de Fundación Once"
              className="img-fluid"
              style={{ maxWidth: '110px' }}
            />
          </a>
          <a href="https://www.fundaciononce.es" className="mx-2">
            <img
              src="https://www.fundaciononce.es/themes/d8_base_dev_theme-8.x-1.0/logo.svg"
              alt="Logo de Fundación Once"
              className="img-fluid"
              style={{ maxWidth: '110px' }}
            />
          </a>
          <a href="https://portalentodigital.fundaciononce.es/" className="mx-2">
            <img
              src="https://portalentodigital.fundaciononce.es/sites/all/themes/foncecaptacion/logo.png"
              alt="Logo de Por Talento Digital"
              className="img-fluid"
              style={{ maxWidth: '110px' }}
            />
          </a>
          <a href="https://www.ilunion.com/es" className="mx-2">
            <img
              src="https://www.ilunion.com/themes/custom/iluniontheme/logo.svg"
              alt="Logo de Ilunión"
              className="img-fluid"
              style={{ maxWidth: '110px' }}
            />
          </a>
        </div>
      </footer>

      <div className="footer-bottom text-center mt-4 pb-4">
        <p>
          <b>&copy; 2023 RhTalents. Todos los derechos reservados.</b>
        </p>
      </div>
    </>
  );
};

export default Footer;
