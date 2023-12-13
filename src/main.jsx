import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App.jsx";
import { UserContextProvider } from "./context/userContext.jsx";
import Empleados from "./pages/Empleados/Empleados.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Nosotros from "./pages/Nosotros/Nosotros.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import PoliticaCookies from "./pages/PoliticaCookies/PoliticaCookies.jsx";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad/PoliticaPrivacidad.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Register from "./pages/Register/Register.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/empleados" element={<Empleados />} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/politicaprivacidad"
              element={<PoliticaPrivacidad />}
            />
            <Route path="/politicacookies" element={<PoliticaCookies />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
