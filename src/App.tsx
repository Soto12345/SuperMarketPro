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
import Body from "./Generales/Componentes/Body";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<FormularioLogin />} />
          <Route path="/registro" element={<FormularioRegistro />} />
          <Route path="/principal" element={<Body/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
