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

  const handleLinkClick = (id) => {
    setIsMenuOpen(false); // Fermer le menu lorsqu'un lien est cliqué
  };
  


  return (
    <header className={`header ${isLightMode ? "light-mode" : "dark-mode"}`}>
      <nav className={`navbar ${isLightMode ? "light-mode" : "dark-mode"}`}>
        <div className="navbar__logo">
          <img src={logoAH} alt="logoAH" />
          <h1>Anne.Lise H</h1>
        </div>
        <div className="container_nav">
          <ul
            className={`navbar__links ${isMenuOpen ? "open" : ""} ${
              isLightMode ? "light-mode" : "dark-mode"
            }`}
          >
            <li className="navbar__item">
              <a href="/" onClick={handleLinkClick}>À propos</a>
            </li>
            <li className="navbar__item">
              <a href="#zone_comptences" className="navbar__link" onClick={handleLinkClick}>
                Compétences
              </a>
            </li>
            <li className="navbar__item">
              <a href="#zone_projet" className="navbar__link" onClick={handleLinkClick}>
                Projets
              </a>
            </li>
            <li className="navbar__item">
              <a href="mailto:alheban@gmail.com" className="navbar__link" onClick={handleLinkClick}>
                Contact
              </a>
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