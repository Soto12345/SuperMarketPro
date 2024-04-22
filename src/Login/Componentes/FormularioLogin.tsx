import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
const FormularioLogin = () => {
  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center" style={{padding:"80px"}}>
        <div className="text-center fs-1">Iniciar sesión</div>
        <div className="pt-3">
          <TextField id="Correo" label="Correo" variant="outlined" size="small"/>
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
          <Button variant="contained">Iniciar sesión</Button>
        </div>
        <div className="pt-3">
            <a href="/registro">¿No tienes cuenta? puedes hacer una aqui</a>
        </div>
      </div>
    </>
  );
};

export default FormularioLogin;
