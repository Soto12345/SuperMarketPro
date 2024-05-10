import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { enviarDatos } from "../../Generales/Componentes/Backend";
import { useState } from "react";
const FormularioRegistro = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleSubmit = async () => {
    enviarDatos("/users/register",{
      name: name,
      email: email,
      address: address,
      password: password,
      phoneNumber: phoneNumber,
    },false)
      .then((response) => {
        if (response.error) {
          console.log("hubo un error al registrarse");
          console.log(response);
          setError(true);
          setSuccess(false);
        }
        if (response.status === 200) {
          console.log("usuario creado con exito");
          console.log(response);
          setSuccess(true);
          setError(false);
        }
      })
      .catch((error) => {
        console.error("error al enviar los datos ", error);
      });
  };
  return (
    <>
      <div
        className="container d-flex flex-column justify-content-end align-items-center"
        style={{ padding: "80px" }}
      >
        <div className="text-center fs-1">Registro</div>
        <div className="pt-3">
          <TextField
            id="Nombre"
            label="Nombre"
            variant="outlined"
            size="small"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>
        <div className="pt-3">
          <TextField
            id="direccion"
            label="Direccion"
            variant="outlined"
            size="small"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            required
          />
        </div>
        <div className="pt-3">
          <TextField
            id="telefono"
            label="telefono"
            variant="outlined"
            size="small"
            value={phoneNumber.toString()}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            required
          />
        </div>
        <div className="pt-3">
          <TextField
            id="Correo"
            label="Correo"
            variant="outlined"
            size="small"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div className="pt-3">
          <TextField
            id="Password"
            label="Password"
            type="password"
            variant="outlined"
            size="small"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </div>

        <div className="pt-3">
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={!name || !address || !phoneNumber || !email || !password}
          >
            Registrar
          </Button>
        </div>
        <div className="pt-3">
          <a href="/login">¿ya tienes cuenta? puedes iniciar sesion aqui</a>
        </div>
        {error && (
          <div
            className="pt-1 w-100 text-center"
            style={{ backgroundColor: "red", color: "white", fontSize: "20px" }}
          >
            <p>correo ya usado por otro usuario</p>
          </div>
        )}
        {success && (
          <div
            className="pt-1 w-100 text-center"
            style={{
              backgroundColor: "green",
              color: "white",
              fontSize: "20px",
            }}
          >
            <p>usuario Registrado con exito, favor de ingresar</p>
          </div>
        )}
      </div>
    </>
  );
};
export default FormularioRegistro;
