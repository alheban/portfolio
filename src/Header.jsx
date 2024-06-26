import React, { useState, useEffect } from "react";
import logoAH from "./assets/logo_small.svg";
import navBlack from "./assets/menu_noir.svg";
import navWhite from "./assets/menu_blanc.svg";
import btnSun from "./assets/sun.svg";
import btnMoon from "./assets/moon.svg";
import { useTheme } from "./ThemeContext";

export function Header() {
  const { isLightMode, toggleMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (id, event) => {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    setIsMenuOpen(false); // Ferme le menu lorsqu'un lien est cliqué
    scrollToSection(id); // Fait défiler vers la section cible
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const handleMailClick = () => {
    window.location.href = "mailto:alheban@gmail.com";
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar__logo">
          <img src={logoAH} alt="logoAH" />
          <a href="#" onClick={(event) => handleLinkClick("intro", event)}><h1>Anne.Lise H</h1></a>
        </div>
        <div className="container_nav">
          <ul
            className={`navbar__links ${isMenuOpen ? "open" : ""} ${
              isLightMode ? "light-mode" : "dark-mode"
            }`}
          >
            <li className="navbar__item">
            <a href="#" className="navbar__link" onClick={(event) => handleLinkClick("zone_qui", event)}>À propos</a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link" onClick={(event) => handleLinkClick("zone_comptences", event)}>
                Compétences
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link" onClick={(event) => handleLinkClick("zone_projet", event)}>
                Projets
              </a>
            </li>
            <li className="navbar__item">
              <button className="buttonnavbar" onClick={handleMailClick}>
                Contact
              </button>
            </li>
          </ul>
          <button className="mode" onClick={toggleMode}>
            <img src={isLightMode ? btnSun : btnMoon} alt="mode fond" />
          </button>
          <div className="icon">
            <button
              className={`menu-button ${isMenuOpen ? "open" : ""} `}
              onClick={handleMenuClick}
            >
              <img
                className="menu-icon"
                src={isLightMode ? navBlack : navWhite}
                alt="menu burger"
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;