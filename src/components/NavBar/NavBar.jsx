import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logoSolHaus from "../../img/logoSolHaus.png";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div className="nav-menu">
      <NavLink to="/">
        <img className="logo" src={logoSolHaus} alt="Logo de Sol Haus" />
      </NavLink>

      <nav className={`nav ${menuOpen ? "visible" : ""}`}>
        <ul className="menu">
          <li className="menu__item">
            <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Inicio
            </NavLink>
          </li>
          <li className="menu__item productos">
            <NavLink to="/productos" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Productos
            </NavLink>
            <ul className="submenu">
              <li>
                <NavLink to="/productos/bazar" className={({ isActive }) => (isActive ? "active-link" : "")}>
                  Bazar
                </NavLink>
              </li>
              <li>
                <NavLink to="/productos/organizacion" className={({ isActive }) => (isActive ? "active-link" : "")}>
                  Organización del hogar
                </NavLink>
              </li>
              <li>
                <NavLink to="/productos/reposteria" className={({ isActive }) => (isActive ? "active-link" : "")}>
                  Repostería
                </NavLink>
              </li>
              <li>
                <NavLink to="/productos/viajes" className={({ isActive }) => (isActive ? "active-link" : "")}>
                  Viajes
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="menu__item">
            <NavLink to="/informacion" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Información
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/contacto" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Contacto
            </NavLink>
          </li>
          <li className="dropdown">
            <button className="dropdown-user-btn">
              <i className="bi bi-person"></i>
            </button>
            <ul className="dropdown-content">
              <li>
                <NavLink to="/register" className={({ isActive }) => (isActive ? "active-link" : "")}>
                  Iniciar sesión
                </NavLink>
              </li>
              <li>
                <NavLink to="/register" className={({ isActive }) => (isActive ? "active-link" : "")}>
                  Registrarse
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div className="right-icons">
        <button type="button" className="search-btn" onClick={toggleSearch}>
          <i className="bi bi-search"></i>
        </button>

        {searchOpen && (
          <input type="text" className="search-input" placeholder="Buscar productos..." />
        )}

        <CartWidget menuOpen={menuOpen} />
      </div>

      <button className="hamburger" onClick={toggleMenu}>
        <i className={menuOpen ? "bi bi-x" : "bi bi-list"}></i>
      </button>
    </div>
  );
};

export default NavBar;
