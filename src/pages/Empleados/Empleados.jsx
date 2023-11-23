import './Empleados.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import API from '../../API/API';
const Empleados = () => {
  const { name } = useParams();
  const [empleado, setEmpleado] = useState(null);

  useEffect(() => {
    API.get(`/employeess/name/${name}`).then((res) => {
      setEmpleado(res.data);
    });
  }, []);
  return (
    <main>
      {empleado !== null ? (
        <>
          <h2>{empleado.name}</h2>
          <h2>{empleado.lastname}</h2>
          <h2>{empleado.nif}</h2>
          <h2>{empleado.phone}</h2>
          <h2>{empleado.birthdate}</h2>
          <h2>{empleado.maritalstatus}</h2>
          <h2>{empleado.children}</h2>
          <h2>{empleado.cif}</h2>
          <h2>{empleado.company}</h2>
          <h2>{empleado.ssnumber}</h2>
          <h2>{empleado.addresses}</h2>
          <h2>{empleado.departament}</h2>
          <h3>Información Laboral</h3>
          <ul>
            {empleado.laboralInformations.map((laboralInformation) => (
              <li key={laboralInformation._id}>
                <h3>{laboralInformation.salary}</h3>
                <h3>{laboralInformation.job}</h3>
                <h3>{laboralInformation.position}</h3>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h2>Empleado no encontrado</h2>
      )}
    </main>
  );
};

export default Empleados;
