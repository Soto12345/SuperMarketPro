import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import FormularioRegistro from "./Registro/Componentes/FormularioRegistro";
import FormularioLogin from "./Login/Componentes/FormularioLogin";
import "./App.css";
import Agregar from "./Categorias/Componentes/Agregar";
import Header from "./Generales/Componentes/Header";
import Footer from "./Generales/Componentes/Footer";
import TablaCategorias from "./Categorias/Componentes/TablaCategorias";
import { useLocation } from "react-router-dom";
import Eliminar from "./Categorias/Componentes/Eliminar";
import AgregarProducto from "./Categorias/productos/AgregarProducto";
import EliminarProducto from "./Categorias/productos/EliminarProducto";
import TablaProductos from "./Categorias/productos/TablaProductos";
const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/registro" && (
        <Header />
      )}
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<FormularioLogin />} />
        <Route path="/registro" element={<FormularioRegistro />} />
        <Route path="/principal" element={<TablaCategorias />} />
        <Route path="/agregarcategoria" element={<Agregar />} />
        <Route path="/eliminarcategoria" element={<Eliminar />} />
        <Route path="/agregarproducto" element={<AgregarProducto/>}/>
        <Route path="/eliminarproducto" element={<EliminarProducto/>}/>
        <Route path="/verproducto" element={<TablaProductos/>}/>
      </Routes>
      {location.pathname !== "/login" && location.pathname !== "/registro" && (
        <Footer />
      )}
    </>
  );
};

export default App;
