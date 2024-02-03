import photo from "../../assets/foto-navbar.png";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa"; 
import { useState } from "react";
import { ZooThemes } from "../changeColor/ZooThemes";

export const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <header className="navbar-container">
      <div className="navbar-container-child">
        <div className="presentation-container">
          <figure className="presentation-image">
            <img
              src={photo}
              alt="Foto de Victor"
              className="presentation-img"
            />
          </figure>
          <h1 className="presentation-name">Victor Carvajal</h1>
          <img src="https://storage.googleapis.com/logo_victor/Logo_Victor.png" alt="Logo Victor Carvajal" className="navbar-logo"/>
        </div>
          
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          <FaBars />
        </div>
        <nav className={`nav ${isMenuOpen ? "mobile-menu-open" : ""}`}>
          <ZooThemes />
          <Link to={"/"} className="nav-anchor" onClick={toggleMenu}>Inicio</Link>
          <Link to={"/habilidades"} className="nav-anchor" onClick={toggleMenu}>Habilidades</Link>
          <Link to={"/testimonios"} className="nav-anchor" onClick={toggleMenu}>Testimonios</Link>
          <Link to={"/contacto"} className="nav-anchor" onClick={toggleMenu}>Contactame</Link>
        </nav>
      </div>
    </header>
  );
};
