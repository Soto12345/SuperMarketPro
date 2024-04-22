import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
const FormularioRegistro = () => {
  return (
    <>
      <div
        className="container d-flex flex-column justify-content-center align-items-center"
        style={{ padding: "80px" }}
      >
        <div className="text-center fs-1">Registro</div>
        <div className="pt-3">
          <TextField
            id="Nombre"
            label="Nombre"
            variant="outlined"
            size="small"
          />
        </div>
        <div className="pt-3">
          <TextField
            id="Apellido"
            label="Apellido"
            variant="outlined"
            size="small"
          />
        </div>
        <div className="pt-3">
          <TextField
            id="Correo"
            label="Correo"
            variant="outlined"
            size="small"
          />
        </div>
        <div className="pt-3">
          <TextField
            id="Password"
            label="Password"
            type="password"
            variant="outlined"
            size="small"
          />
        </div>
        <div className="pt-3">
          <Button variant="contained">Registrar</Button>
        </div>
        <div className="pt-3">
          <a href="/login">¿ya tienes cuenta? puedes iniciar sesion aqui</a>
        </div>
      </div>
    </>
  );
};
export default FormularioRegistro;
