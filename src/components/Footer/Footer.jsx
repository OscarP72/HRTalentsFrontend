import "./Footer.css";

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialIcons = [
    { name: "facebook", url: "https://www.facebook.com" },
    { name: "twitter", url: "https://www.twitter.com" },
    { name: "instagram", url: "https://www.instagram.com" },
    { name: "youtube", url: "https://www.youtube.com" },
    { name: "linkedin", url: "https://www.linkedin.com" },
  ];

  return (
    <>
      <div className="container">
        <div className="social-icons">
          {socialIcons.map((icon, index) => (
            <a
              key={index}
              href={icon.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={`./assets/iconos/${icon.name}.png`} alt={icon.name} />
            </a>
          ))}
        </div>
      </div>

      <div className="container_copyright">
        <div className="copyright">
          <img src="./assets/iconos/copyright.png" alt="Símbolo de copyright" />

          <p>Copyright © 2023 HRTalents</p>
        </div>
      </div>
      <div className="footer">
        <div className="links">
          <Link
            to="./public/pdf/politica-privacidad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p> Política de privacidad</p>
          </Link>

          <a
            href="./public/pdf/politica-cookies.pdf"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <p>Política de cookies</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
