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
      <div className="container mt-3">
        <div className="table-reponsive-sm">
          <table className="table table-information table-bordered">
            <thead>
              <tr>
                <th>Nº Empleado</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>NIF</th>
                <th>Teléfono</th>
                <th>F. Nacimiento</th>
                <th>F. ALta Empresa</th>
                <th>F. Baja Empresa</th>
                <th>Estado Civil</th>
                <th>Hijos</th>
                <th>CIF Empresa</th>
                <th>Empresa</th>
                <th>Nº Seg. Social</th>
                <th>Dirección</th>
                <th>Departamento</th>
              </tr>
            </thead>
            <tbody>
              {empleados.map((empleado) => (
                <tr key={empleado._id}>
                  <td>
                    <NavLink to={`/employeess/${empleado.emplid}`}>
                      {empleado.emplid}
                    </NavLink>
                  </td>
                  <td>
                    <NavLink to={`/employeess/${empleado.name}`}>{empleado.name}</NavLink>
                  </td>
                  <td>
                    <NavLink to={`/employeess/${empleado.lastname}`}>
                      {empleado.lastname}
                    </NavLink>
                  </td>
                  <td>
                    <NavLink to={`/employeess/${empleado.nif}`}>{empleado.nif}</NavLink>
                  </td>
                  <td>
                    <NavLink to={`/employeess/${empleado.phone}`}>
                      {empleado.phone}
                    </NavLink>
                  </td>
                  <td>
                    <NavLink to={`/employeess/${empleado.birthdate}`}>
                      {empleado.birthdate}
                    </NavLink>
                  </td>
                  <td>
                    <NavLink to={`/employeess/${empleado.dischargeDate}`}>
                      {empleado.dischargeDate}
                    </NavLink>
                  </td>
                  <td>
                    <NavLink to={`/employeess/${empleado.enddate}`}>
                      {empleado.enddate}
                    </NavLink>
                  </td>
                  <td>
                    <NavLink to={`/employeess/${empleado.maritalstatus}`}>
                      {empleado.maritalstatus}
                    </NavLink>
                  </td>
                  <td>
                    <NavLink to={`/employeess/${empleado.children}`}>
                      {empleado.children}
                    </NavLink>
                  </td>
                  <td>
                    <NavLink to={`/employeess/${empleado.cif}`}>{empleado.cif}</NavLink>
                  </td>
                  <td>
                    <NavLink to={`/employeess/${empleado.company}`}>
                      {empleado.company}
                    </NavLink>
                  </td>
                  <td>
                    <NavLink to={`/employeess/${empleado.ssnumber}`}>
                      {empleado.ssnumber}
                    </NavLink>
                  </td>
                  <td>
                    <NavLink to={`/employeess/${empleado.addresses}`}>
                      {empleado.addresses}
                    </NavLink>
                  </td>
                  <td>
                    <NavLink to={`/employeess/${empleado.department}`}>
                      {empleado.department}
                    </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Empleados;
