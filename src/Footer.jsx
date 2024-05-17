import React, { useEffect } from "react";
import logoAH from "./assets/logo_small.svg";
import { useTheme } from "./ThemeContext";
import Contact from "./Contact";

function Footer() {
    const { isLightMode, toggleMode } = useTheme();

    useEffect(() => {
      if (isLightMode) {
        document.body.classList.add("light-mode");
      } else {
        document.body.classList.remove("light-mode");
      }
    }, [isLightMode]);
  return (
    <>
  <Contact></Contact>
  <div className="container_footer">
    <a href="mailto:alheban@example.com ">alheban@gmail.com</a>
    <div className="logo_footer">
      <img src={logoAH} alt="logoAH" />
      <span>Anne.Lise H © 2024</span>
    </div>
  </div>
  </>
  )
}

export default Footer