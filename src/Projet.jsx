import React, { useEffect } from "react";
import { useTheme } from "./ThemeContext";

function Projet({ projet }) {
  const { isLightMode } = useTheme();

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }, [isLightMode]);

  return (
    <div className={`projet ${isLightMode ? "light-mode" : "dark-mode"}`}>
      <div className="projet__descriptif">
        <h3>{projet.title}</h3>
        <p>{projet.description}</p>
        <div className={`projet__tags ${isLightMode ? "light-mode-tag" : "dark-mode-tag"}`}>
          {projet.tags.map((tag, index) => (
            <img key={index} src={tag.image} alt={tag.name} className="tag" />
          ))}
        </div>
        <div className="liens">
          {projet.liens.map((lien, index) => (
            <a key={index} href={lien.url} target="_blank" rel="noopener noreferrer" className="github-button">
              <span>{lien.type === "github" ? "Lien GitHub" : "Lien Site"}</span>
              <img src={lien.type === "github" ? "src/assets/github.svg" : "src/assets/website.svg"} alt={lien.type} />
            </a>
          ))}
        </div>
      </div>
      <div className="projet__imag">
        <img src={projet.image} alt={projet.title} />
      </div>
    </div>
  );
}

export default Projet;
