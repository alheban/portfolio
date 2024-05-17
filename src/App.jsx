import React, { useEffect } from "react";
import { useTheme } from "./ThemeContext";
import Header from "./Header";
import Footer from "./Footer";
import logoAH from "./assets/logo_small.svg";
import logofigma from "./assets/figma.svg";
import logohtml5 from "./assets/html5.svg";
import logocss3 from "./assets/css3.svg";
import logojs from "./assets/javascript.svg";
import logogit from "./assets/git.svg";
import logoreact from "./assets/react.svg";
import logovscode from "./assets/vscode.svg";
import logoadobe from "./assets/adobe.svg";
import logoredux from "./assets/redux.svg";
import logosass from "./assets/sass.svg";
import Projet from "./Projet";
import Contact from "./Contact";

function App() {
  const { isLightMode, toggleMode } = useTheme();

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }, [isLightMode]);

  return (
    <div className={`app ${isLightMode ? "light-mode" : "dark-mode"}`}>
      <Header />
      <section>
        <div className={`fond_dots ${isLightMode ? "fond_dots_light" : ""}`}>
          <h2>
            Développeuse front-end
            <br />& Designer ux/ ui
            
          </h2>
          <Contact />
            <div className="arrow"></div>
        </div>
      </section>

      <section id="zone_qui">
        <div className="container_section">
          <h3 className="section__title">Qui suis-je ?</h3>
          <div className="section_contenu">
            <p>
              <img
                className="img_profil"
                src="src/assets/profil.jpg"
                alt="image_profil_annelise"
              />
              Anne-Lise Héban <br />
              <br />
              Je suis une développeuse front-end animée par la{" "}
              <span className="text_color">
                création d'expériences utilisateur uniques.
              </span>{" "}
              Chaque ligne de code que j'écris est alimentée par mon désir{" "}
              <span className="text_color">
                d'innover et de rendre les interfaces à la fois attrayantes et
                fonctionnelles.
              </span>{" "}
              Je crois fermement que la clé d'une conception efficace réside
              dans une empathie profonde envers les utilisateurs, et c'est cette
              conviction qui guide mon travail au quotidien. <br />
              Mon objectif est clair : concevoir des interfaces alliant
              intuitivité, esthétique, fonctionnalité et performance.
            </p>
          </div>
          <div className="container__expertise">
            <div className="expertise">
              <h3>x2</h3> expertises <br />
              front-end
              <br /> & design
            </div>
            <div className="expertise">
              <h3>100%</h3> digitale
            </div>
            <div className="expertise">
              <h3>10</h3> ans <br />
              d'experience <br /> web
            </div>
          </div>
        </div>
      </section>
      <section id="zone_comptences">
        <div className="container_section">
          <h3 className="section__title">compétences</h3>
          <div className="container__logos">
            <div className={`logo ${isLightMode ? "light-mode" : "dark-mode"}`}>
              <img src={logofigma} alt="logo figma" />
            </div>
            <div className="logo">
              <img src={logohtml5} alt="logo html5" />
            </div>
            <div className="logo"></div>

            <div className="logo">
              <img src={logocss3} alt="logo  css3" />
            </div>
            <div className="logo">
              <img src={logojs} alt="logo javascript" />
            </div>
            <div className="logo"></div>
            <div className="logo">
              <img src={logogit} alt="logo git" />
            </div>
            <div className="logo">
              <img src={logoredux} alt="logo redux" />
            </div>
            <div className="logo">
              <img src={logoreact} alt="logo react" />
            </div>
            <div className="logo"></div>
            <div className="logo">
              <img src={logovscode} alt="logo vscode" />
            </div>
            <div className="logo">
              <img src={logoadobe} alt="logo adobe" />
            </div>
            <div className="logo">
              <img src={logosass} alt="logo sass" />
            </div>
            <div className="logo"></div>
            <div className="logo">
              {" "}
              <h3>UX/IU</h3>
            </div>
            <div className="logo"></div>
            <div className="logo">
              <p>
                ▸ Référencement SEO <br></br>▸ Accessibilité <br></br> ▸ Méthode
                agile
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="zone_projet">
        <div
          className={`container_projet ${
            isLightMode ? "light-mode" : "dark-mode"
          }`}
        >
          <h3 className="title__projets">Projets</h3>
          <div className="list__projets">
            <Projet />
            <Projet />
            <Projet />
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
