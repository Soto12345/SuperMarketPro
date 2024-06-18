import { Button, MenuItem, Select, TextField } from "@mui/material";
import { getDatos, enviarDatos } from "../../Generales/Componentes/Backend";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AgregarProducto = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState(false);
  const [redirectToPrincipal, setRedirectToPrincipal] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [selectedCategoria, setSelectedCategoria] = useState("");
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
    enviarDatos(
      "/products/",
      {
        name: name,
        description: description,
        price: price,
        category: selectedCategoria,
      },
      true
    )
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
          <label htmlFor="price">Precio:</label>
          <TextField
            id="price"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label htmlFor="categoria">Seleccione una categoría:</label>
          <Select
            id="categoria"
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
            onClick={handleSubmit}
            disabled={!name || !description || !price || !selectedCategoria}
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
export default AgregarProducto;
