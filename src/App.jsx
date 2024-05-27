import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";
import Projet from "./Projet";
import projetData from "./data/projets.json";

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

function App() {
  const { isLightMode, toggleMode } = useTheme();

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const [introRef, introInView] = useInView();
  const [quiRef, quiInView] = useInView();
  const [competencesRef, competencesInView] = useInView();
  const [projetRef, projetInView] = useInView();

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }, [isLightMode]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`app ${isLightMode ? "light-mode" : "dark-mode"}`}>
      <Header />
      <section id="intro" ref={introRef}>
        <motion.div className={`fond_dots ${isLightMode ? "fond_dots_light" : ""}`}
        variants={sectionVariants}
        initial="hidden"
        animate={introInView ? "visible" : "hidden"} >
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            Développeuse front-end
            <br />& Designer ux/ ui
          </motion.h2>
          <Contact />
          <motion.div className="arrow"
            initial={{ x: -20,y: 0 }}
            animate={{ x: -20 , y: [0, -10, 0] }}
            transition={{
              y: {
                duration: 1,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
            onClick={() => scrollToSection("zone_qui")}
          ></motion.div>
        </motion.div>
      </section>

      <section id="zone_qui" ref={quiRef} >
        <motion.div className="container_section"
          variants={sectionVariants}
          initial="hidden"
          animate={quiInView ? "visible" : "hidden"}
        >
          <h3 className="section__title">Qui suis-je ?</h3>
          <div className="section_contenu">
            <p>
              <img
                className="img_profil"
                src="./assets/profil.jpg"
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
        </motion.div>
      </section>
      <section id="zone_comptences" ref={competencesRef}>
        <motion.div className="container_section" variants={sectionVariants}
        initial="hidden"
        animate={competencesInView ? "visible" : "hidden"}>
          <h3 className="section__title">compétences</h3>
          <div className="container__logos">
            <div className="logo" >
              <motion.img src={logofigma} alt="logo figma"
              whileHover={{ scale: 1.1 }} 
              onMouseEnter={() => setHoveredLogo("figma")}
              onMouseLeave={() => setHoveredLogo(null)}/>
            </div>
            <div className="logo">
              <motion.img src={logohtml5} alt="logo html5"
              whileHover={{ scale: 1.1 }} 
              onMouseEnter={() => setHoveredLogo("html5")}
              onMouseLeave={() => setHoveredLogo(null)} />
            </div>
            <div className="logo"></div>

            <div className="logo">
              <motion.img src={logocss3} alt="logo css3"
              whileHover={{ scale: 1.1 }} 
              onMouseEnter={() => setHoveredLogo("css3")}
              onMouseLeave={() => setHoveredLogo(null)} />
            </div>
            <div className="logo">
              <motion.img src={logojs} alt="logo javascript"
              whileHover={{ scale: 1.1 }} 
              onMouseEnter={() => setHoveredLogo("javascript")}
              onMouseLeave={() => setHoveredLogo(null)} />
            </div>
            <div className="logo"></div>
            <div className="logo">
              <motion.img src={logogit} alt="logo git"
              whileHover={{ scale: 1.1 }} 
              onMouseEnter={() => setHoveredLogo("git")}
              onMouseLeave={() => setHoveredLogo(null)} />
            </div>
            <div className="logo">
              <motion.img src={logoredux} alt="logo redux"
              whileHover={{ scale: 1.1 }} 
              onMouseEnter={() => setHoveredLogo("redux")}
              onMouseLeave={() => setHoveredLogo(null)} />
            </div>
            <div className="logo">
              <motion.img src={logoreact} alt="logo react"
              whileHover={{ scale: 1.1 }} 
              onMouseEnter={() => setHoveredLogo("react")}
              onMouseLeave={() => setHoveredLogo(null)} />
            </div>
            <div className="logo"></div>
            <div className="logo">
              <motion.img src={logovscode} alt="logo vscode"
              whileHover={{ scale: 1.1 }} 
              onMouseEnter={() => setHoveredLogo("vscode")}
              onMouseLeave={() => setHoveredLogo(null)} />
            </div>
            <div className="logo">
              <motion.img src={logoadobe} alt="logo adobe"
              whileHover={{ scale: 1.1 }} 
              onMouseEnter={() => setHoveredLogo("adobe")}
              onMouseLeave={() => setHoveredLogo(null)} />
            </div>
            <div className="logo">
              <motion.img src={logosass} alt="logo sass"
              whileHover={{ scale: 1.1 }} 
              onMouseEnter={() => setHoveredLogo("sass")}
              onMouseLeave={() => setHoveredLogo(null)} />
            </div>
            <div className="logo"></div>
            <div className="logo">
              {" "}
              <motion.h3 whileHover={{ scale: 1.1 }} 
              style={{ userSelect: "none" }}
              onMouseEnter={() => setHoveredLogo("figma")}
              onMouseLeave={() => setHoveredLogo(null)}>UX/IU</motion.h3>
            </div>
            <div className="logo"></div>
            <div className="logo">
              <p>
                ▸ Référencement SEO <br></br>▸ Accessibilité <br></br> ▸ Méthode
                agile
              </p>
            </div>
          </div>
        </motion.div>
      </section>
      <section id="zone_projet" ref={projetRef}>
        <motion.div
          className={`container_projet ${
            isLightMode ? "light-mode" : "dark-mode"
          }`}
          variants={sectionVariants}
          initial="hidden"
          animate={projetInView ? "visible" : "hidden"}
        >
          <h3 className="title__projets">Projets</h3>
          <div className="list__projets">
            {projetData.map((projet, index) => (
              <Projet key={index} projet={projet} />
            ))}
          </div>
        </motion.div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
