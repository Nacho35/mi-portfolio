import React, { useState } from "react";
import "../Style/navbar.css";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  return (
    <nav className="nav">
      <div className="link1">
        <a href="#">Ignacio Morales</a>
      </div>
      <button className="menu-button" onClick={toggleMenu}>
        <FiMenu className="icon" />
      </button>

      <ul className={menuOpen ? "open" : ""} class="links">
        <div className="sections">
          <button className="svg">
            <GrClose className="icon close-button" onClick={toggleMenu} />
          </button>
          <li>
            <a className="link" href="#">
              Inicio
            </a>
          </li>
          <li>
            <a className="link" href="#">
              Acerca de
            </a>
          </li>
          <li>
            <a className="link" href="#">
              Tecnologias
            </a>
          </li>
          <li>
            <a className="link" href="#">
              Contacto
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
