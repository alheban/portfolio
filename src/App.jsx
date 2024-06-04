import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeContext";
import { motion, useAnimation } from "framer-motion";
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
  const [hoveredLogo, setHoveredLogo] = useState(null);
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const [introRef, introInView] = useInView();
  const [quiRef, quiInView] = useInView();
  const [competencesRef, competencesInView] = useInView();
  const [projetRef, projetInView] = useInView();

  const croixAnimation = useAnimation();

  useEffect(() => {
    if (competencesInView) {
      croixAnimation.start("visible");
    } else {
      croixAnimation.start("hidden");
    }
  }, [competencesInView, croixAnimation]);

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
        <motion.div
          className={`fond_dots ${isLightMode ? "fond_dots_light" : ""}`}
          variants={sectionVariants}
          initial="hidden"
          animate={introInView ? "visible" : "hidden"}
        >
          <motion.h2>
            Développeuse front-end
            <br />& Designer ux/ ui
          </motion.h2>
          <Contact />
          <motion.div
            className="arrow"
            initial={{ x: -20, y: 0 }}
            animate={{ x: -20, y: [0, -10, 0] }}
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

      <section id="zone_qui" ref={quiRef}>
        <motion.div
          className="container_section"
          variants={sectionVariants}
          initial="hidden"
          animate={quiInView ? "visible" : "hidden"}
        >
          <h3 className="section__title">
            Qui suis-je ?{" "}
            <motion.div className="svg-container" initial={{ rotate: 0 }}
                animate={quiInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0.2, y: 40 },
                  visible: { opacity: 0.5, rotate: 0 },
                }}
                transition={{ duration: 0.5 }}>
              <svg
                width="887"
                height="304"
                viewBox="0 0 887 304"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="7.85169"
                  height="18.2651"
                  transform="matrix(0.928056 -0.372442 0.362555 0.931962 22.229 175.924)"
                  fill="#6AA9F8"
                />

                <rect
                  width="7.85169"
                  height="18.2651"
                  transform="matrix(0.928056 -0.372442 0.362555 0.931962 22.229 31.9999)"
                  fill="#6AA9F8"
                  
                />

                <rect
                  width="7.85169"
                  height="18.2651"
                  transform="matrix(0.968079 0.250647 -0.260924 0.96536 4.76587 284.173)"
                  fill="#6AA9F8"
                />
                <rect
                  width="7.85169"
                  height="18.2651"
                  transform="matrix(0.928056 -0.372442 0.362555 0.931962 202.229 185.924)"
                  fill="#545F6C"
                />
                <rect
                  width="9.85128"
                  height="14.3235"
                  transform="matrix(0.981275 0.192614 -0.186924 0.982374 107.229 30.9999)"
                  fill="#6AA9F8"
                />
                <rect
                  width="9.86666"
                  height="22.9524"
                  transform="matrix(0.928056 -0.372442 0.362555 0.931962 86.229 166.393)"
                  fill="#6AA9F8"
                  fillOpacity="0.31"
                />
                <rect
                  width="9.89881"
                  height="22.879"
                  transform="matrix(0.806481 0.591261 -0.579292 0.81512 154.483 229)"
                  fill="#187EFF"
                />
                <rect
                  width="5.23538"
                  height="12.2279"
                  transform="matrix(-0.996986 -0.0775807 -0.0752183 0.997167 172.118 173.124)"
                  fill="#6AA9F8"
                />
                <rect
                  width="7.85169"
                  height="18.2651"
                  transform="matrix(0.928056 -0.372442 0.362555 0.931962 672.562 2.92429)"
                  fill="#6AA9F8"
                />
                <rect
                  width="7.85169"
                  height="18.2651"
                  transform="matrix(0.928056 -0.372442 0.362555 0.931962 872.563 15.9243)"
                  fill="#6AA9F8"
                />
                <rect
                  width="7.85169"
                  height="18.2651"
                  transform="matrix(0.928056 -0.372442 0.362555 0.931962 587.562 22.9243)"
                  fill="#545F6C"
                />
                <rect
                  width="7.85169"
                  height="18.2651"
                  transform="matrix(0.928056 -0.372442 0.362555 0.931962 787.562 35.9243)"
                  fill="#545F6C"
                />
                <rect
                  width="9.85128"
                  height="14.3235"
                  transform="matrix(0.981275 0.192614 -0.186924 0.982374 438.24 22)"
                  fill="#6AA9F8"
                />
                <rect
                  width="9.85128"
                  height="14.3235"
                  transform="matrix(0.981275 0.192614 -0.186924 0.982374 638.24 35)"
                  fill="#6AA9F8"
                />
                <rect
                  width="9.89881"
                  height="22.879"
                  transform="matrix(0.806481 0.591261 -0.579292 0.81512 372.585 14.2818)"
                  fill="#187EFF"
                />
                <rect
                  width="9.89881"
                  height="22.879"
                  transform="matrix(0.806481 0.591261 -0.579292 0.81512 572.585 27.2818)"
                  fill="#187EFF"
                />
                <rect
                  width="5.23538"
                  height="12.2279"
                  transform="matrix(-0.996986 -0.0775807 -0.0752183 0.997167 302.368 36.4062)"
                  fill="#6AA9F8"
                />
                <rect
                  width="5.23538"
                  height="12.2279"
                  transform="matrix(-0.996986 -0.0775807 -0.0752183 0.997167 502.368 49.4062)"
                  fill="#6AA9F8"

                />
              </svg>
            </motion.div>
          </h3>

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
              <h3>15</h3> ans <br />
              d'experience <br /> web
            </div>
          </div>
        </motion.div>
      </section>
      <section id="zone_comptences" ref={competencesRef}>
        <motion.div
          className="container_section"
          variants={sectionVariants}
          initial="hidden"
          animate={croixAnimation}
          transition={{ duration: 0.5 }}
          ref={competencesRef}
        >
          <h3 className="section__title">
            compétences{" "}
            <motion.div className="svg-container"
            initial={{y: 0}}
            animate={competencesInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0.2, y: 60 },
              visible: { opacity: 0.5,}
            }}
            transition={{ duration: 0.5 }}>
              
              <motion.svg
              
                width="887"
                height="304"
                viewBox="0 0 887 304"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="7.85169"
                  height="18.2651"
                  transform="matrix(0.928056 -0.372442 0.362555 0.931962 22.229 175.924)"
                  fill="#6AA9F8"
                />
                <rect
                  width="7.85169"
                  height="18.2651"
                  transform="matrix(0.928056 -0.372442 0.362555 0.931962 22.229 31.9999)"
                  fill="#6AA9F8"
                />
                <rect
                  width="7.85169"
                  height="18.2651"
                  transform="matrix(0.968079 0.250647 -0.260924 0.96536 4.76587 284.173)"
                  fill="#6AA9F8"
                />
                <rect
                  width="7.85169"
                  height="18.2651"
                  transform="matrix(0.928056 -0.372442 0.362555 0.931962 202.229 185.924)"
                  fill="#545F6C"
                />
                <rect
                  width="9.85128"
                  height="14.3235"
                  transform="matrix(0.981275 0.192614 -0.186924 0.982374 107.229 30.9999)"
                  fill="#6AA9F8"
                />
                <rect
                  width="9.86666"
                  height="22.9524"
                  transform="matrix(0.928056 -0.372442 0.362555 0.931962 86.229 166.393)"
                  fill="#6AA9F8"
                  fillOpacity="0.31"
                />
                <rect
                  width="9.89881"
                  height="22.879"
                  transform="matrix(0.806481 0.591261 -0.579292 0.81512 154.483 229)"
                  fill="#187EFF"
                />
                <rect
                  width="5.23538"
                  height="12.2279"
                  transform="matrix(-0.996986 -0.0775807 -0.0752183 0.997167 172.118 173.124)"
                  fill="#6AA9F8"
                />
                <rect
                  width="7.85169"
                  height="18.2651"
                  transform="matrix(0.928056 -0.372442 0.362555 0.931962 672.562 2.92429)"
                  fill="#6AA9F8"
                />
                <rect
                  width="7.85169"
                  height="18.2651"
                  transform="matrix(0.928056 -0.372442 0.362555 0.931962 872.563 15.9243)"
                  fill="#6AA9F8"
                />
                <rect
                  width="7.85169"
                  height="18.2651"
                  transform="matrix(0.928056 -0.372442 0.362555 0.931962 587.562 22.9243)"
                  fill="#545F6C"
                />
                <rect
                  width="7.85169"
                  height="18.2651"
                  transform="matrix(0.928056 -0.372442 0.362555 0.931962 787.562 35.9243)"
                  fill="#545F6C"
                />
                <rect
                  width="9.85128"
                  height="14.3235"
                  transform="matrix(0.981275 0.192614 -0.186924 0.982374 438.24 22)"
                  fill="#6AA9F8"
                />
                <rect
                  width="9.85128"
                  height="14.3235"
                  transform="matrix(0.981275 0.192614 -0.186924 0.982374 638.24 35)"
                  fill="#6AA9F8"
                />
                <rect
                  width="9.89881"
                  height="22.879"
                  transform="matrix(0.806481 0.591261 -0.579292 0.81512 372.585 14.2818)"
                  fill="#187EFF"
                />
                <rect
                  width="9.89881"
                  height="22.879"
                  transform="matrix(0.806481 0.591261 -0.579292 0.81512 572.585 27.2818)"
                  fill="#187EFF"
                />
                <rect
                  width="5.23538"
                  height="12.2279"
                  transform="matrix(-0.996986 -0.0775807 -0.0752183 0.997167 302.368 36.4062)"
                  fill="#6AA9F8"
                />
                <rect
                  width="5.23538"
                  height="12.2279"
                  transform="matrix(-0.996986 -0.0775807 -0.0752183 0.997167 502.368 49.4062)"
                  fill="#6AA9F8"
                />
              </motion.svg>
            </motion.div>
          </h3>
          <div className="container__logos">
            <div className="logo">
              <motion.img
                src={logofigma}
                alt="logo figma"
                whileHover={{ scale: 1.1 }}
                onMouseEnter={() => setHoveredLogo("figma")}
                onMouseLeave={() => setHoveredLogo(null)}
              />
            </div>
            <div className="logo">
              <motion.img
                src={logohtml5}
                alt="logo html5"
                whileHover={{ scale: 1.1 }}
                onMouseEnter={() => setHoveredLogo("html5")}
                onMouseLeave={() => setHoveredLogo(null)}
              />
            </div>
            <div className="logo">
              <motion.div
                style={{ width: "80px", height: "80px" }}
                initial={{ rotate: 0 }}
                animate={competencesInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, y: -80 },
                  visible: { opacity: 1, rotate: 0 },
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ rotate: 360 }}
                whileTap={{ rotate: 360 }}
              >
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: "relative",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <motion.path
                    d="M 0 25 H 50 M 25 0 V 50"
                    stroke="#4081f0a1"
                    strokeWidth="1"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, pathOffset: 1 }}
                    animate={{ pathLength: 1, pathOffset: 0 }}
                    transition={{ duration: 1 }}
                  />
                </svg>
              </motion.div>
            </div>

            <div className="logo">
              <motion.img
                src={logocss3}
                alt="logo css3"
                whileHover={{ scale: 1.1 }}
                onMouseEnter={() => setHoveredLogo("css3")}
                onMouseLeave={() => setHoveredLogo(null)}
              />
            </div>
            <div className="logo">
              <motion.img
                src={logojs}
                alt="logo javascript"
                whileHover={{ scale: 1.1 }}
                onMouseEnter={() => setHoveredLogo("javascript")}
                onMouseLeave={() => setHoveredLogo(null)}
              />
            </div>
            <div className="logo">
              <motion.div
                style={{ width: "80px", height: "80px" }}
                initial={{ rotate: 0 }}
                animate={competencesInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, y: -80 },
                  visible: { opacity: 1, rotate: 0 },
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ rotate: 360 }}
                whileTap={{ rotate: 360 }}
              >
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: "relative",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <polygon
                    points="25,5 45,45 5,45"
                    fill="none"
                    stroke="#4081f0a1"
                    strokeWidth="1"
                  />
                </svg>
              </motion.div>
            </div>
            <div className="logo">
              <motion.img
                src={logogit}
                alt="logo git"
                whileHover={{ scale: 1.1 }}
                onMouseEnter={() => setHoveredLogo("git")}
                onMouseLeave={() => setHoveredLogo(null)}
              />
            </div>
            <div className="logo">
              <motion.img
                src={logoredux}
                alt="logo redux"
                whileHover={{ scale: 1.1 }}
                onMouseEnter={() => setHoveredLogo("redux")}
                onMouseLeave={() => setHoveredLogo(null)}
              />
            </div>
            <div className="logo">
              <motion.img
                src={logoreact}
                alt="logo react"
                whileHover={{ scale: 1.1 }}
                onMouseEnter={() => setHoveredLogo("react")}
                onMouseLeave={() => setHoveredLogo(null)}
              />
            </div>
            <div className="logo">
              <motion.div
                style={{ width: "80px", height: "80px" }}
                initial={{ rotate: 0 }}
                animate={competencesInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, y: -100 },
                  visible: { opacity: 1, rotate: 0 },
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ rotate: 360 }}
                whileTap={{ rotate: 360 }}
              >
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: "relative",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <polygon
                    points={Array.from({ length: 6 })
                      .map((_, i) => {
                        const angle_deg = 60 * i;
                        const angle_rad = (Math.PI / 180) * angle_deg;
                        const x = 25 + 20 * Math.cos(angle_rad);
                        const y = 25 + 20 * Math.sin(angle_rad);
                        return `${x},${y}`;
                      })
                      .join(" ")}
                    fill="none"
                    stroke="#4081f0a1"
                    strokeWidth="1"
                  />
                </svg>
              </motion.div>
            </div>
            <div className="logo">
              <motion.img
                src={logovscode}
                alt="logo vscode"
                whileHover={{ scale: 1.1 }}
                onMouseEnter={() => setHoveredLogo("vscode")}
                onMouseLeave={() => setHoveredLogo(null)}
              />
            </div>
            <div className="logo">
              <motion.img
                src={logoadobe}
                alt="logo adobe"
                whileHover={{ scale: 1.1 }}
                onMouseEnter={() => setHoveredLogo("adobe")}
                onMouseLeave={() => setHoveredLogo(null)}
              />
            </div>
            <div className="logo">
              <motion.img
                src={logosass}
                alt="logo sass"
                whileHover={{ scale: 1.1 }}
                onMouseEnter={() => setHoveredLogo("sass")}
                onMouseLeave={() => setHoveredLogo(null)}
              />
            </div>
            <div className="logo">
              <motion.div
                style={{ width: "80px", height: "80px" }}
                initial={{ rotate: 0 }}
                animate={competencesInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, y: -100 },
                  visible: { opacity: 1, rotate: 0 },
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ rotate: 360 }}
                whileTap={{ rotate: 360 }}
              >
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: "relative",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <motion.path
                    d="M 0 25 H 50 M 25 0 V 50"
                    stroke="#4081f0a1"
                    strokeWidth="1"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, pathOffset: 1 }}
                    animate={{ pathLength: 1, pathOffset: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </svg>
              </motion.div>
            </div>
            <div className="logo">
              {" "}
              <motion.h3
                whileHover={{ scale: 1.1 }}
                style={{ userSelect: "none" }}
                onMouseEnter={() => setHoveredLogo("figma")}
                onMouseLeave={() => setHoveredLogo(null)}
              >
                UX/IU
              </motion.h3>
            </div>
            <div className="logo">
              <motion.div
                style={{ width: "80px", height: "80px" }}
                initial={{ rotate: 0 }}
                animate={competencesInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, y: -80 },
                  visible: { opacity: 1, rotate: 0 },
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ rotate: 360 }}
                whileTap={{ rotate: 360 }}
              >
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: "relative",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <rect
                    x="5"
                    y="5"
                    width="40"
                    height="40"
                    fill="none"
                    stroke="#4081f0a1"
                    strokeWidth="1"
                  />
                </svg>
              </motion.div>
            </div>
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
