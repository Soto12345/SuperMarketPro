import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import Header from "./Generales/Componentes/Header";
import FormularioRegistro from "./Registro/Componentes/FormularioRegistro";
import FormularioLogin from "./Login/Componentes/FormularioLogin";
import Footer from "./Generales/Componentes/Footer";
import "./App.css"
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<FormularioLogin />} />
          <Route path="/registro" element={<FormularioRegistro />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
