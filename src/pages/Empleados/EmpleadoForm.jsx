import './EmpleadoForm.css';

import React, { useState } from 'react';

const EmpleadoForm = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    emplid: '',
    name: '',
    lastname: '',
    nif: '',
    phone: '',
    birthdate: '',
    dischargeDate: '',
    enddate: '',
    maritalstatus: '',
    children: '',
    cif: '',
    company: '',
    ssnumber: '',
    addresses: '',
    department: '',
    laborinformation: [
      {
        salary: '',
        job: '',
        position: '',
      },
    ],
    image: null,
  });

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;

    if (index !== undefined) {
      const updatedLaborInformation = [...formData.laborinformation];
      updatedLaborInformation[index] = {
        ...updatedLaborInformation[index],
        [name]: value,
      };

      setFormData({
        ...formData,
        laborinformation: updatedLaborInformation,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleAddLaborInformation = () => {
    setFormData({
      ...formData,
      laborinformation: [
        ...formData.laborinformation,
        { salary: '', job: '', position: '' },
      ],
    });
  };

  const handleRemoveLaborInformation = (index) => {
    const updatedLaborInformation = [...formData.laborinformation];
    updatedLaborInformation.splice(index, 1);

    setFormData({
      ...formData,
      laborinformation: updatedLaborInformation,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };
  return (
    <div className="modal-overlay empleado-form">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />

          <label htmlFor="emplid">Nº Empleado:</label>
          <input
            type="text"
            id="emplid"
            name="emplid"
            value={formData.emplid}
            onChange={handleInputChange}
          />

          <label htmlFor="lastname">Apellidos:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
          />
          <label htmlFor="nif">NIF:</label>
          <input
            type="text"
            id="nif"
            name="nif"
            value={formData.nif}
            onChange={handleInputChange}
          />
          <label htmlFor="phone">Teléfono:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <label htmlFor="birthdate">Fecha de Nacimiento:</label>
          <input
            type="text"
            id="birthdate"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleInputChange}
          />
          <label htmlFor="dischargeDate">Fecha de Alta:</label>
          <input
            type="text"
            id="dischargeDate"
            name="dischargeDate"
            value={formData.dischargeDate}
            onChange={handleInputChange}
          />
          <label htmlFor="enddate">Fecha de Baja:</label>
          <input
            type="text"
            id="enddate"
            name="enddate"
            value={formData.enddate}
            onChange={handleInputChange}
          />
          <label htmlFor="maritalstatus">Estado Civil:</label>
          <input
            type="text"
            id="maritalstatus"
            name="maritalstatus"
            value={formData.maritalstatus}
            onChange={handleInputChange}
          />
          <label htmlFor="children">Hijos:</label>
          <input
            type="text"
            id="children"
            name="children"
            value={formData.children}
            onChange={handleInputChange}
          />
          <label htmlFor="lastname">CIF:</label>
          <input
            type="text"
            id="cif"
            name="cif"
            value={formData.cif}
            onChange={handleInputChange}
          />
          <label htmlFor="company">Compañia:</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
          />
          <label htmlFor="ssnumber">Nº Seg Social:</label>
          <input
            type="text"
            id="ssnumber"
            name="ssnumber"
            value={formData.ssnumber}
            onChange={handleInputChange}
          />
          <label htmlFor="addresses">Dirección:</label>
          <input
            type="text"
            id="addresses"
            name="addresses"
            value={formData.addresses}
            onChange={handleInputChange}
          />
          <label htmlFor="department">Departamento:</label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
          />
          <div>
            <h4>Labor Information</h4>
            {formData.laborinformation.map((info, index) => (
              <div key={index}>
                <label htmlFor={`salary${index}`}>Salario:</label>
                <input
                  type="text"
                  id={`salary${index}`}
                  name={`salary${index}`}
                  value={info.salary}
                  onChange={(e) => handleInputChange(e, index)}
                />

                <label htmlFor={`job${index}`}>Cargo:</label>
                <input
                  type="text"
                  id={`job${index}`}
                  name={`job${index}`}
                  value={info.job}
                  onChange={(e) => handleInputChange(e, index)}
                />

                <label htmlFor={`position${index}`}>Categoría:</label>
                <input
                  type="text"
                  id={`position${index}`}
                  name={`position${index}`}
                  value={info.position}
                  onChange={(e) => handleInputChange(e, index)}
                />

                <button type="button" onClick={() => handleRemoveLaborInformation(index)}>
                  Eliminar
                </button>
              </div>
            ))}
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleAddLaborInformation}
            >
              Añadir I.L
            </button>
          </div>

          <label htmlFor="image">Imagen:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />

          <button type="submit" className="btn btn-primary">
            Agregar
          </button>
          <button type="button" onClick={onClose} className="btn btn-secondary">
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};
export default EmpleadoForm;
