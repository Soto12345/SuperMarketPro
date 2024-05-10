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
const TablaCategorias = () => {
  const [categorias, setCategorias] = useState([]);

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
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Todas las categorías</h1>
      <TableContainer component={Paper} style={{ maxWidth: "600px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Categoría</strong>
              </TableCell>
              <TableCell>
                <strong>Descripción</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categorias.map((categoria) => (
              <TableRow key={categoria._id}>
                <TableCell>{categoria.name}</TableCell>
                <TableCell>{categoria.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TablaCategorias;
