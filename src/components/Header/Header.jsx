import './Header.css';

import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { UserContext } from '../../context/userContext';

const Header = () => {
  const { user, logout } = useContext(UserContext);
  const [paraEmpresasOpen, setParaEmpresasOpen] = useState(false);
  const [trabajaOpen, setTrabajaOpen] = useState(false);

  const toggleParaEmpresas = () => setParaEmpresasOpen(!paraEmpresasOpen);
  const toggleTrabaja = () => setTrabajaOpen(!trabajaOpen);

  return (
    <header>
      <h1>HRTalents</h1>
      {user !== null && <h2>Hola {user.username}</h2>}
      <nav>
        <ul>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>

          <li>
            <NavLink to="/sobrenosotros">Sobre Nosotros</NavLink>
          </li>
          <li>
            <NavLink to="#" onClick={toggleParaEmpresas}>
              Para Empresas
            </NavLink>
            {paraEmpresasOpen && (
              <ul>
                <li>
                  <NavLink to="/empresas">Empresas</NavLink>
                </li>

                <li>
                  <NavLink to="/medidasalternativas">Medidas Alternativas</NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink to="#" onClick={toggleTrabaja}>
              Trabaja
            </NavLink>
            {trabajaOpen && (
              <ul>
                <li>
                  <NavLink to="/ofertasempleo">Ofertas de Empleo</NavLink>
                </li>
                <li>
                  <NavLink to="/enviocurriculum">Envianos tu CV</NavLink>
                </li>
              </ul>
            )}
          </li>

          {user !== null ? (
            <>
              <li>
                <NavLink to="/empleados">Empleados</NavLink>
              </li>
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Registro</NavLink>
              </li>
              <li>
                <NavLink to="/contacto">Contacto</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
