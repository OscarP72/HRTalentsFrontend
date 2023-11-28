import './Empleados.css';

import { useEffect, useState } from 'react';

import API from '../../API/API';

const Empleados = () => {
  const [empleados, setEmpleados] = useState([]);
  const [selectedEmpleado, setSelectedEmpleado] = useState(null);
  useEffect(() => {
    API.get('/employeess').then((res) => {
      setEmpleados(res.data);
    });
  }, []);

  const openModal = (empleado) => {
    setSelectedEmpleado(empleado);
    // Abre el modal usando el identificador del modal
    const modal = new window.bootstrap.Modal(document.getElementById('myModal'));
    modal.show();
  };

  return (
    <main className="empleados">
      <div className="container mt-3">
        {empleados.map((empleado) => (
          <div key={empleado._id}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => openModal(empleado)}
            >
              Ver detalles
            </button>
          </div>
        ))}
        <div
          className="modal fade"
          id="myModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Detalles del Empleado</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>Nª Empleado:{selectedEmpleado?.emplid}</p>
                <p>Nombre:{selectedEmpleado?.name}</p>
                <p>Apellidos:{selectedEmpleado?.lastname}</p>
                <p>Nif:{selectedEmpleado?.nif}</p>
                <p>Teléfono:{selectedEmpleado?.phone}</p>
                <p>Fecha de Nacimiento:{selectedEmpleado?.birthdate}</p>
                <p>Fecha de Alta:{selectedEmpleado?.dischargeDate}</p>
                <p>Fecha de Baja:{selectedEmpleado?.enddate}</p>
                <p>Estado Civil:{selectedEmpleado?.maritalstatus}</p>
                <p>Hijos:{selectedEmpleado?.children}</p>
                <p>Cif:{selectedEmpleado?.cif}</p>
                <p>Compañia:{selectedEmpleado?.company}</p>
                <p>Nº Seg. Social:{selectedEmpleado?.ssnumber}</p>
                <p>Dirección:{selectedEmpleado?.addresses}</p>
                <p>Departamento:{selectedEmpleado?.department}</p>
                {selectedEmpleado?.laborInformation
                  .filter((info) => info._id !== undefined)
                  .map((info) => (
                    <div key={info._id}>
                      <p>Salario: {info.salary}</p>
                      <p>Cargo: {info.job}</p>
                      <p>Categoria: {info.position}</p>
                    </div>
                  ))}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Empleados;
