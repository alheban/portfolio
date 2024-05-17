import React, { useEffect } from "react";
import { useTheme } from "./ThemeContext";

function Projet() {
        const { isLightMode, toggleMode } = useTheme();
      
        useEffect(() => {
          if (isLightMode) {
            document.body.classList.add("light-mode");
          } else {
            document.body.classList.remove("light-mode");
          }
        }, [isLightMode]);


  return (
    <div className={`projet ${
        isLightMode ? "light-mode" : "dark-mode"
      }`}>
    <div className="projet__descriptif">
      <h3>Argentbank</h3>
      <p>
        Vous venez de rejoindre Argent Bank en tant que développeur
        front-end, une banque en ligne émergente cherchant à se
        démarquer dans le secteur bancaire. Sous la direction de Mila,
        chef de projet, vous travaillez sur la mise en place du tableau
        de bord des utilisateurs. Vous recevez deux emails du CTO, Avery
        Moreau, concernant la mise en place du dashboard. La phase 1
        implique la création d'une application web réactive avec React,
        en utilisant Redux pour gérer l'état global. 
      </p>
      <div
        className={`lien ${
          isLightMode ? "light-mode-img" : "dark-mode-img"
        }`}
      > <a>voir le code sur github</a>
        <img src="src/assets/github.svg" />
      </div>
    </div>
    <div className="projet__imag">
      <img src="./assets/test.webp"></img>
    </div>
  </div>
  )
}

export default Projet