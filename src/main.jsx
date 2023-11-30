import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App.jsx';
import IsAuth from './components/IsAuth/IsAuth.jsx';
import { UserContextProvider } from './context/userContext.jsx';
import EmpleadoDetail from './pages/EmpleadoDetail/EmpleadoDetail.jsx';
import Empleados from './pages/Empleados/Empleados.jsx';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Register from './pages/Register/Register.jsx';
import SobreNosotros from './pages/SobreNosotros/SobreNosotros.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route
              path="/empleados"
              element={
                <IsAuth>
                  <Empleados />
                </IsAuth>
              }
            />
            <Route path="/empleados/:name" element={<EmpleadoDetail />} />
            <Route path="/sobrenosotros" element={<SobreNosotros />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
