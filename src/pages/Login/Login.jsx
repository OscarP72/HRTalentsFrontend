
import './Login.css';

import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../context/userContext';
import API from '../../services/API';

const Login = () => {
  //Almacenamos la funcionalidad del useNavigate
  const navigate = useNavigate();
  const { login } = useContext(UserContext);


  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const body = new FormData();
    body.append('username', usernameRef.current.value);
    body.append('password', passwordRef.current.value);

    API.post('/users/login', body)

      .then((res) => {
        login(
          {
            username: res.data.username,
            avatar: res.data.avatar,
            id: res.data.id,
          },
          res.data.token,
        );
        navigate('/empleados');
      })
      .catch((error) => {
        alert('USUARIO NO VALIDO', error);

      });
  };

  return (

    <main className="login">
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Usuario</label>
        <input id="username" type="text" minLength={3} required ref={usernameRef} />
        <label htmlFor="password">Contraseña</label>
        <input id="password" type="password" minLength={8} required ref={passwordRef} />

        <button type="submit">Login</button>
      </form>
    </main>
  );
};

export default Login;
