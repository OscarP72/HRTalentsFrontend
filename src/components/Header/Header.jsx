import "./Header.css";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";


const Header = () => {
    
  const { user, logout } = useContext(UserContext);
  
    return (
    <header>
      <h1>HRTalents</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/empleados">Empleados</NavLink>
          </li>
          <li>
            <NavLink to="/laborales">Laborales</NavLink>
          </li>
          
          {user !== null ? (
            <>
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
                <NavLink to="/register">Register</NavLink>
              </li>
            </>
          )}
          
          <li>
            <NavLink to="/notfound">NotFound</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
