import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { getDatos } from "../../Generales/Componentes/Backend";
import { useEffect, useState } from "react";
const TablaProductos = () => {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const obtenerProductos = async () => {
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
  useEffect(() => {
    obtenerProductos();
    obtenerCategorias();
  }, []);
  const getCategoriaNombre = (categoryId) => {
    const categoria = categorias.find((cat) => cat._id === categoryId);
    return categoria ? categoria.name : "Desconocida";
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Todos los productos</h1>
      <TableContainer component={Paper} style={{ maxWidth: "600px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Producto</strong>
              </TableCell>
              <TableCell>
                <strong>Descripción</strong>
              </TableCell>
              <TableCell>
                <strong>Precio</strong>
              </TableCell>
              <TableCell>
                <strong>Categoria</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productos.map((producto) => (
              <TableRow key={producto._id}>
                <TableCell>{producto.name}</TableCell>
                <TableCell>{producto.description}</TableCell>
                <TableCell>{producto.price}</TableCell>
                <TableCell>{getCategoriaNombre(producto.category)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TablaProductos;
