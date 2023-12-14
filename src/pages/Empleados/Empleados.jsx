import './Empleados.css';

import { useEffect, useState } from 'react';

import API from '../../API/API';
import EmpleadoForm from './EmpleadoForm';
const Empleados = () => {
  const [empleados, setEmpleados] = useState([]);
  const [selectedEmpleado, setSelectedEmpleado] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isFormOpen, setFormOpen] = useState(false);

  useEffect(() => {
    API.get('/employeess').then((res) => {
      console.log(res.data);
      setEmpleados(res.data);
    });
  }, []);

  const openModal = (empleado) => {
    setSelectedEmpleado(empleado);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedEmpleado(null);
    setModalOpen(false);
  };

  const openForm = () => {
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
  };
  const handleSubmitForm = async (formData) => {
    try {
      const response = await API.post('/employees', formData);

      if (response.status === 200) {
        setEmpleados([...empleados, response.data]);

        closeForm();
      } else {
        console.error('Error al agregar empleado');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };
  return (
    <main className="empleados-container">
      <div className="empleados-list">
        {empleados.map((empleado) => (
          <div key={empleado._id} className="empleado-card">
            <h5>{empleado.name}</h5>
            <p>Nº Empleado: {empleado.emplid}</p>
            <button className="ver-detalles-btn" onClick={() => openModal(empleado)}>
              Ver detalles
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-content text-dark">
              <h5>Detalles del Empleado</h5>
              <p>Nª Empleado: {selectedEmpleado?.emplid}</p>
              <p>Nombre: {selectedEmpleado?.name}</p>
              <p>Apellidos: {selectedEmpleado?.lastname}</p>
              <p>Nif: {selectedEmpleado?.nif}</p>
              <p>Teléfono: {selectedEmpleado?.phone}</p>
              <p>Fecha de Nacimiento: {selectedEmpleado?.birthdate}</p>
              <p>Fecha de Alta: {selectedEmpleado?.dischargeDate}</p>
              <p>Fecha de Baja: {selectedEmpleado?.enddate}</p>
              <p>Estado Civil: {selectedEmpleado?.maritalstatus}</p>
              <p>Hijos: {selectedEmpleado?.children}</p>
              <p>Cif: {selectedEmpleado?.cif}</p>
              <p>Compañia: {selectedEmpleado?.company}</p>
              <p>Nº Seg. Social: {selectedEmpleado?.ssnumber}</p>
              <p>Dirección: {selectedEmpleado?.addresses}</p>
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
              <button className="btn btn-danger" onClick={closeModal}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
      {isFormOpen && <EmpleadoForm onSubmit={handleSubmitForm} onClose={closeForm} />}

      <button className="btn btn-primary" onClick={openForm}>
        Añadir Empleado
      </button>
    </main>
  );
};

export default Empleados;