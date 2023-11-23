import "./Empleados.css";
import { useState, useEffect, useRef } from "react";
import API from "../../services/API";

const Empleados = () => {
  const nameValue = useRef(null);
  const [empleadolist, setEmpleadolist] = useState([]);
  const [newEmpleado, setNewEmpleado] = useState("");

  const getEmpleados = async () => {
    const empleados = await API.get("/employeess");
    setEmpleadolist(empleados.data);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const body = new FormData();
    body.append("name", nameValue.current.value);
    body.append("lastname", lastnameValue.current.value);
    body.append("nif", nifValue.current.value);
    body.append("phone", phoneValue.current.value);
    body.append("birthdate", birthdateValue.current.value);
    body.append("dischargeDate", dischargeDateValue.current.value);
    body.append("enddate", enddateValue.current.value);
    body.append("maritalstatus", maritalstatusValue.current.value);
    body.append("children", childrenValue.current.value);
    body.append("cif", cifValue.current.value);
    body.append("company", companyValue.current.value);
    body.append("ssnumber", ssnumberValue.current.value);
    body.append("addresses", addressesValue.current.value);
    body.append("department", departmentValue.current.value);
    


    await API.post('/employeess', body, {
      headers: { "Content-Type": "multipart/form-data" },
    }).then((res) => {
      setNewEmpleado(res.data._id);
    });
  };

  const handleDelete = async (id) => {
    await API.delete(`/employeess/${id}`);
    setNewEmpleado(id)
  };

  useEffect(() => {
    getEmpleados();
  }, [newEmpleado]);

  return (
    <main className="empleados">
      <ul>
        {empleadolist.map((empleadoelement) => (
          <li key={empleadoelement._id}>
            <h2>{empleadoelement.name}</h2>
            <h2>{empleadoelement.lastname}</h2>
            <h2>{empleadoelement.nif}</h2>
            <h2>{empleadoelement.phone}</h2>
            <h2>{empleadoelement.birthdate}</h2>
            <h2>{empleadoelement.dischargeDate}</h2>
            <h2>{empleadoelement.enddate}</h2>
            <h2>{empleadoelement.maritalstatus}</h2>
            <h2>{empleadoelement.children}</h2>
            <h2>{empleadoelement.cif}</h2>
            <h2>{empleadoelement.company}</h2>
            <h2>{empleadoelement.ssnumber}</h2>
            <h2>{empleadoelement.addresses}</h2>
            <h2>{empleadoelement.department}</h2>
            <h2>{empleadoelement._id}</h2>
            


            <button onClick={() => handleDelete(empleadoelement._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <form className="forma" onSubmit={handleSubmit}>
        <input type="text" placeholder="name" ref={nameValue} />
        <button type="submit">Create</button>
      </form>
    </main>
  );
};

export default Empleados;
