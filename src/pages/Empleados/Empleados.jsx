import './Empleados.css';

import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import API from '../../API/API';

const Empleados = () => {
  const [empleados, setEmpleados] = useState([]);
  useEffect(() => {
    API.get('/employeess').then((res) => {
      setEmpleados(res.data);
    });
  }, []);
  return (
    <main className="empleados">
      <ul>
        {empleados.map((empleado) => (
          <li key={empleado._id}>
            <NavLink to={`/employeess/${empleado.emplid}`}>{empleado.emplid}</NavLink>
            <NavLink to={`/employeess/${empleado.name}`}>{empleado.name}</NavLink>
            <NavLink to={`/employeess/${empleado.lastname}`}>{empleado.lastname}</NavLink>
            <NavLink to={`/employeess/${empleado.nif}`}>{empleado.nif}</NavLink>
            <NavLink to={`/employeess/${empleado.phone}`}>{empleado.phone}</NavLink>
            <NavLink to={`/employeess/${empleado.birthdate}`}>
              {empleado.birthdate}
            </NavLink>
            <NavLink to={`/employeess/${empleado.dischargeDate}`}>
              {empleado.dischargeDate}
            </NavLink>
            <NavLink to={`/employeess/${empleado.maritalstatus}`}>
              {empleado.maritalstatus}
            </NavLink>
            <NavLink to={`/employeess/${empleado.children}`}>{empleado.children}</NavLink>
            <NavLink to={`/employeess/${empleado.addresses}`}>
              {empleado.addresses}
            </NavLink>
            <NavLink to={`/employeess/${empleado.department}`}>
              {empleado.department}
            </NavLink>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Empleados;
