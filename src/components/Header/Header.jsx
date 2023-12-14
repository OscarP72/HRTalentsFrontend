import './Header.css';

import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import LogoFinal from '../../assets/logo/LogoFinal.png';
import { UserContext } from '../../context/userContext';

const Header = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <div className="header_container">
      <div className="flex_logo">
        <img src={LogoFinal} alt="LogoFinal" />
      </div>
      {user !== null && <h2>Hola {user.username}</h2>}
      <nav className="flex_nav">
        <ul>
          <li>
            <NavLink to="/" className="navLink">
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/nosotros" className="navLink">
              Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink to="/ofertasempleo" className="navlink">
              Ofertas de Empleo
            </NavLink>
          </li>
          <li>
            <NavLink to="/enviocurriculum" className="navlink">
              Envianos tu CV
            </NavLink>
          </li>

          {user !== null ? (
            <>
              <li>
                <NavLink to="/empleados" className="navLink">
                  Empleados
                </NavLink>
              </li>

              <li>
                <NavLink to="/profile" className="navLink">
                  Profile
                </NavLink>
              </li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login" className="navLink">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/register" className="navLink">
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink to="/contacto" className="navLink">
                  Contacto
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
