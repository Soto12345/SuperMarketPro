import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { enviarDatos } from "../../Generales/Componentes/Backend";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { setLocalStorageJWT } from "../../Generales/Componentes/LocalStorage";
import { getLocalStorageJWT } from "../../Generales/Componentes/LocalStorage";
const FormularioLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [redirectToPrincipal, setRedirectToPrincipal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    enviarDatos("/auth/login", { email: email, password: password },false)
      .then((response) => {
        if (response.error) {
          setError(true);
          console.log("credenciales incorrectas");
          console.log(response);
        }
        if (response.status === 200) {
          setError(false);
          console.log("Bienvenido usuario");
          console.log(response);
          setRedirectToPrincipal(true);
          setLocalStorageJWT(response.token);
          console.log(getLocalStorageJWT())
        }
      })
      .catch((error) => {
        console.error("error al enviar los datos ", error);
      });
  };
  if (redirectToPrincipal) {
    navigate('/principal');
  }
  return (
    <>
    {redirectToPrincipal && <Link to="/principal" />}
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
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="pt-3">
          <Button variant="contained" onClick={handleSubmit} disabled={!email || !password}>
            Iniciar sesión
          </Button>
        </div>
        <div className="pt-3">
          <a href="/registro">¿No tienes cuenta? puedes hacer una aqui</a>
        </div>
        {error && (
          <div
            className="pt-1 w-100 text-center"
            style={{ backgroundColor: "red", color: "white", fontSize: "20px" }}
          >
            <p>Error de credenciales</p>
          </div>
        )}
      </div>
    </>
  );
};

export default FormularioLogin;
