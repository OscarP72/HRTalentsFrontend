import './Empleados.css';

import { useEffect, useState } from 'react';

import API from '../../services/API';

const Empleados = () => {
  const [empleados, setEmpleados] = useState([]);

  const getEmpleados = async () => {
    const result = await API.get('/employeess');
    setEmpleados(result.data);
  };

  useEffect(() => {
    getEmpleados();
  }, []);

  return (
    <main>
      <ul>
        {empleados.map((empleado) => (
          <li key={empleado._id}>
            <h2>{empleado.name}</h2>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Empleados;
