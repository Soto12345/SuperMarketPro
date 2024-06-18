import { Button, TextField } from "@mui/material";
import { enviarDatos } from "../../Generales/Componentes/Backend";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Agregar = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const [redirectToPrincipal, setRedirectToPrincipal] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async () => {
    enviarDatos("/categories/", { name: name, description: description }, true)
      .then((response) => {
        if (response.error) {
          setError(true);
          console.log("Hubo un error al agregar");
          console.log(response);
        }
        if (response.status === 200) {
          setError(false);
          console.log("Categoria agregada correctamente.");
          console.log(response);
          setRedirectToPrincipal(true);
        }
      })
      .catch((error) => {
        console.error("error al enviar los datos ", error);
      });
  };
  if (redirectToPrincipal) {
    navigate("/principal");
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "400px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      >
        <h2>Agregar Elemento</h2>
        <div style={{ display: "grid", gap: "10px" }}>
          <label htmlFor="name">Nombre:</label>
          <TextField
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="description">Descripción:</label>
          <TextField
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={!name || !description}
          >
            Agregar Elemento
          </Button>
        </div>
        {error && (
          <div style={{ color: "red", marginTop: "10px", textAlign: "center" }}>
            Hubo un error al agregar el elemento.
          </div>
        )}
      </div>
    </div>
  );
};
export default Agregar;
