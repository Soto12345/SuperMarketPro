import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [showCategoriasDropdown, setShowCategoriasDropdown] = useState(false);
  const [showProductosDropdown, setShowProductosDropdown] = useState(false);

  const toggleCategoriasDropdown = () => {
    setShowCategoriasDropdown(!showCategoriasDropdown);
  };

  const toggleProductosDropdown = () => {
    setShowProductosDropdown(!showProductosDropdown);
  };

  return (
    <>
      <div className="header d-block w-100">
        <div className="d-flex">
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary w-100">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                SuperMarketPro
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Inicio
                    </a>
                  </li>
                  <li
                    className={`nav-item dropdown ${
                      showCategoriasDropdown ? "show" : ""
                    }`}
                    onClick={toggleCategoriasDropdown}
                  >
                    <a
                      className="nav-link dropdown-toggle"
                      href="#categorias"
                      id="categoriasDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded={showCategoriasDropdown ? "true" : "false"}
                    >
                      Categorías
                    </a>
                    <ul
                      className={`dropdown-menu ${
                        showCategoriasDropdown ? "show" : ""
                      }`}
                      aria-labelledby="categoriasDropdown"
                    >
                      <li>
                        <Link className="dropdown-item" to="/agregarcategoria">
                          Agregar
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/eliminarcategoria">
                          Eliminar
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/principal">
                          Ver
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={`nav-item dropdown ${
                      showProductosDropdown ? "show" : ""
                    }`}
                    onClick={toggleProductosDropdown}
                  >
                    <a
                      className="nav-link dropdown-toggle"
                      href="#productos"
                      id="productosDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded={showProductosDropdown ? "true" : "false"}
                    >
                      Productos
                    </a>
                    <ul
                      className={`dropdown-menu ${
                        showProductosDropdown ? "show" : ""
                      }`}
                      aria-labelledby="productosDropdown"
                    >
                      <li>
                      <Link className="dropdown-item" to="/agregarproducto">
                          Agregar
                        </Link>
                      </li>
                      <li>
                      <Link className="dropdown-item" to="/eliminarproducto">
                          Eliminar
                        </Link>
                      </li>
                      <li>
                      <Link className="dropdown-item" to="/verproducto">
                          Ver
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Header;
