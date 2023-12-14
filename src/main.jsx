import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App.jsx';
import IsAuth from './components/IsAuth/IsAuth.jsx';
import { UserContextProvider } from './context/userContext.jsx';
import Contacto from './pages/Contacto/Contacto.jsx';
import EmpleadoDetail from './pages/EmpleadoDetail/EmpleadoDetail.jsx';
import Empleados from './pages/Empleados/Empleados.jsx';
import Empresas from './pages/Empresas/Empresas.jsx';
import EnvioCurriculum from './pages/EnvioCurriculum/EnvioCurriculum.jsx';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import MedidasAlternativas from './pages/MedidasAlternativas/MedidasAlternativas.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import OfertasDeEmpleo from './pages/OfertasDeEmpleo/OfertasDeEmpleo.jsx';
import ParaEmpresas from './pages/ParaEmpresas/ParaEmpresas.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Register from './pages/Register/Register.jsx';
import Nosotros from './pages/Nosotros/Nosotros.jsx';
import Trabaja from './pages/Trabaja/Trabaja.jsx';

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
            <Route path="/sobrenosotros" element={<Nosotros />} />
            <Route path="/empresas" element={<Empresas />} />
            <Route path="/paraempresas" element={<ParaEmpresas />} />
            <Route path="/medidasalternativas" element={<MedidasAlternativas />} />
            <Route path="/trabaja" element={<Trabaja />} />
            <Route path="/ofertasempleo" element={<OfertasDeEmpleo />} />
            <Route path="/enviocurriculum" element={<EnvioCurriculum />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contacto" element={<Contacto />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
