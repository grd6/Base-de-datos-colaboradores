import React from "react";
import Table from "react-bootstrap/Table";
import { BiTrash } from "react-icons/bi";

const Listado = ({ datosFilter, setbasedata, setdatosFilter, data }) => {
  console.log("En listado", datosFilter);

  const eliminarColaborador = (id) => {
    const nuevoData = data.filter((persona) => persona.id !== id);
    setbasedata(nuevoData);
    setdatosFilter(nuevoData);
  };
  return (
    <div className=" table table-responsive ">
      <Table bordered hover>
        <thead >
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {datosFilter.map((persona) => (
            <tr key={persona.id}>
              <td>{persona.id}</td>
              <td>{persona.nombre}</td>
              <td>{persona.email}</td>
              <td>{persona.edad}</td>
              <td>{persona.cargo}</td>
              <td>{persona.telefono}</td>
              <td>
                <p>
                  <BiTrash onClick={(e) => eliminarColaborador(persona.id)} />
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Listado;
