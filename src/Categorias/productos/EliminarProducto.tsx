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
const EliminarProducto = () => {
  const [productos, setProductos] = useState([]);
  const [selectedProducto, setSelectedProducto] = useState("");
  const [error, setError] = useState(false);
  const [redirectToPrincipal, setRedirectToPrincipal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = () => {
    getDatos("/products/TodosProductos", true)
      .then((response) => {
        if (response.error) {
          console.log(response);
        }
        if (response.status === 200) {
          console.log(response);
          setProductos(response.products);
        }
      })
      .catch((error) => {
        console.error("error al enviar los datos ", error);
      });
  };

  const handleSubmit = async () => {
    const productoSeleccionado = productos.find(
      (producto) => producto._id === selectedProducto
    );
    if (!productoSeleccionado) {
      console.error("No se encontró la categoría seleccionada");
      return;
    }

    getDatos(`/products/delete/${productoSeleccionado.name}`, true)
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
    navigate("/verproducto");
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
        <InputLabel id="categoria-label">Seleccione un producto</InputLabel>
        <Select
          labelId="categoria-label"
          label="Seleccione un producto"
          value={selectedProducto}
          onChange={(e) => setSelectedProducto(e.target.value)}
        >
          {productos.map((producto) => (
            <MenuItem key={producto._id} value={producto._id}>
              {producto.name}
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
            Hubo un error al eliminar el producto.
          </div>
        )}
      </FormControl>
    </div>
  );
};

export default EliminarProducto;
