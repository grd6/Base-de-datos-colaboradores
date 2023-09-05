import { useState } from "react";
import "./App.css";
import Listado from "./assets/Listado";
import { base } from "./assets/BaseColaboradores";
import Buscador from "./assets/Buscador";
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./assets/Formulario";
import Alert from "./assets/Alert";

function App() {
  const [data, setbasedata] = useState(base);
  const [datosFilter, setdatosFilter] = useState(data);
  console.log(data);
  console.log(datosFilter);
  const [myAlert, setMyAlert] = useState({
    error: "",
    msg: "",
    color: "",
  });
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="table-responsive">
          <Buscador data={data} datosFilter={setdatosFilter} />
          <Listado
            data={data}
            setbasedata={setbasedata}
            datosFilter={datosFilter}
            setdatosFilter={setdatosFilter}
          />
        </div>
        <div className="ms-5">
          <Formulario
            data={data}
            setbasedata={setbasedata}
            datosFilter={datosFilter}
            setdatosFilter={setdatosFilter}
            setMyAlert={setMyAlert}
          />
          {myAlert.msg && <Alert info={myAlert} />}
        </div>
      </div>
    </>
  );
}

export default App;
