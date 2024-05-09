import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const TablaCategorias = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Categoría</TableCell>
            <TableCell>Descripción</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Aquí puedes mapear sobre tus datos y renderizar cada fila */}
          <TableRow>
            <TableCell>Categoría 1</TableCell>
            <TableCell>Descripción de la categoría 1</TableCell>
            <TableCell>
              {/* Botones de acción, por ejemplo, editar o eliminar */}
              <button>Editar</button>
              <button>Eliminar</button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Categoría 2</TableCell>
            <TableCell>Descripción de la categoría 2</TableCell>
            <TableCell>
              {/* Botones de acción, por ejemplo, editar o eliminar */}
              <button>Editar</button>
              <button>Eliminar</button>
            </TableCell>
          </TableRow>
          {/* Puedes agregar más filas según sea necesario */}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablaCategorias;
