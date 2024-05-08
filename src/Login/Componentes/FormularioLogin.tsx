import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { enviarDatos } from "../../Generales/Componentes/Backend";
const FormularioLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    enviarDatos("/users/login", { email: email, password: password })
      .then((response) => {
        if (response.error) {
          console.log("credenciales incorrectas");
        }
        if (response.status === 200) {
          console.log("Bienvenido usuario");
        }
      })
      .catch((error) => {
        console.error("error al enviar los datos ", error);
      });
  };
  return (
    <>
      <div
        className="container d-flex flex-column justify-content-center align-items-center"
        style={{ padding: "80px" }}
      >
        <div className="text-center fs-1">Iniciar sesión</div>
        <div className="pt-3">
          <TextField
            id="Correo"
            label="Correo"
            variant="outlined"
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="pt-3">
          <Button variant="contained" onClick={handleSubmit}>
            Iniciar sesión
          </Button>
        </div>
        <div className="pt-3">
          <a href="/registro">¿No tienes cuenta? puedes hacer una aqui</a>
        </div>
      </div>
    </>
  );
};

export default FormularioLogin;
