import { useState, useEffect } from "react";
import { getDatos } from "../../Generales/Componentes/Backend";
import { useNavigate } from "react-router-dom";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
const Eliminar = () => {
  const [categorias, setCategorias] = useState([]);
  const [selectedCategoria, setSelectedCategoria] = useState("");
  const [error, setError] = useState(false);
  const [redirectToPrincipal, setRedirectToPrincipal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    obtenerCategorias();
  }, []);

  const obtenerCategorias = () => {
    getDatos("/categories/TodasCategorias", true)
      .then((response) => {
        if (response.error) {
          console.log(response);
        }
        if (response.status === 200) {
          console.log(response);
          setCategorias(response.data);
        }
      })
      .catch((error) => {
        console.error("error al enviar los datos ", error);
      });
  };

  const handleSubmit = async () => {
    const categoriaSeleccionada = categorias.find(
      (categoria) => categoria._id === selectedCategoria
    );
    if (!categoriaSeleccionada) {
      console.error("No se encontró la categoría seleccionada");
      return;
    }

    getDatos(`/categories/delete/${categoriaSeleccionada.name}`, true)
      .then((response) => {
        if (response.error) {
          setError(true);
          console.log("Hubo un error al eliminar la categoría");
          console.log(response);
        }
        if (response.status === 200) {
          setError(false);
          console.log("Categoría eliminada correctamente.");
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
      <FormControl fullWidth style={{ maxWidth: "500px" }}>
        <InputLabel id="categoria-label">Seleccione una categoría</InputLabel>
        <Select
          labelId="categoria-label"
          label="Seleccione una categoría"
          value={selectedCategoria}
          onChange={(e) => setSelectedCategoria(e.target.value)}
        >
          {categorias.map((categoria) => (
            <MenuItem key={categoria._id} value={categoria._id}>
              {categoria.name}
            </MenuItem>
          ))}
        </Select>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          style={{ marginTop: "20px" }}
        >
          Eliminar
        </Button>
        {error && (
          <div style={{ color: "red", marginTop: "10px" }}>
            Hubo un error al eliminar la categoría.
          </div>
        )}
      </FormControl>
    </div>
  );
};

export default Eliminar;
