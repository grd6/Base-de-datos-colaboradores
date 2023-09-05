import { useState } from "react";
import React from "react";

const Formulario = ({
  data,
  setbasedata,
  datosFilter,
  setdatosFilter,
  setMyAlert,
}) => {
  const [dataC, setDataC] = useState({
    nombre: "",
    email: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const validar = (e) => {
    e.preventDefault();
    const { nombre, email, edad, cargo, telefono } = dataC;
    console.log("datac", dataC.email);
    const noData =
      !nombre.trim() ||
      !email.trim() ||
      !edad.trim() ||
      console.log(dataC.email);
    !cargo.trim() || !telefono.trim();
    if (noData) {
      setMyAlert({
        error: true,
        msg: "Debe de llenar todos los campos!",
        color: "alert alert-danger mt-3",
      });
    } else {
      setMyAlert({
        error: false,
        msg: "Colaborador creado",
        color: "alert alert-success mt-3",
      });
      const nuevocolaborardor = { ...dataC, id: data.length + 1 };
      console.log("nuevoC", nuevocolaborardor);
      if (!setMyAlert.error) {
        setbasedata([...data, nuevocolaborardor]);
        console.log(nuevocolaborardor);
        setdatosFilter([...data, nuevocolaborardor]);
        console.log(nuevocolaborardor);
      }
    }
  };

  const handle = (e) => {
    const id = {
      idNombre: "nombre",
      idEmail: "email",
      idEdad: "edad",
      idCargo: "cargo",
      idTelefono: "telefono",
    };
    const imp = id[e.target.id];
    if (imp) {
      //crea una copia y esta pendiente de los valores
      setDataC({ ...dataC, [imp]: e.target.value });
      console.log(setDataC);
    }
  };

  return (
    <div className="text-center ">
      <h4>Agregar Colaborador</h4>
      <form onSubmit={validar}>
        <div>
          <input
            type="text"
            value={dataC.nombre}
            className="mt-3"
            placeholder="Nombre del Colaborador"
            id="idNombre"
            onChange={handle}
          />
        </div>
        <div>
          <input
            type="email"
            value={dataC.email}
            className="mt-3"
            placeholder="Email del Colaborador"
            id="idEmail"
            onChange={handle}
          />
        </div>
        <div>
          <input
            type="text"
            value={dataC.edad}
            className="mt-3"
            placeholder="Edad de Colaborador"
            id="idEdad"
            onChange={handle}
          />
        </div>
        <div>
          <input
            type="text"
            value={dataC.cargo}
            className="mt-3"
            placeholder="Cargo del Colaborador"
            id="idCargo"
            onChange={handle}
          />
        </div>
        <div>
          <input
            type="text"
            value={dataC.telefono}
            className="mt-3"
            placeholder="Telefono del Colaborador"
            id="idTelefono"
            onChange={handle}
          />
        </div>
        <div className="mt-3">
          <button type="submit">Agregar Colaborador</button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
