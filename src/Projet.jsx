import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useTheme } from "./ThemeContext";

function Projet({ projet }) {
  const { isLightMode } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref);//{ once: true }

  const { scrollY } = useScroll();
  const offsetTop = ref.current ? ref.current.offsetTop : 0;

  const y1 = useTransform(scrollY, [offsetTop - 300, offsetTop + 300], [0, 0]);
  const y2 = useTransform(scrollY, [offsetTop - 300, offsetTop + 300], [0, 0]);



  return (
    <div ref={ref} className={`projet ${isLightMode ? "light-mode" : "dark-mode"}`}>
      <motion.div
        className="projet__descriptif"
        initial={{ x: -20, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
        style={{ y: y1, opacity: isInView ? 1 : 0 }}
      >
        <h3>{projet.title}</h3>
        {projet.description.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
        <div
          className="projet__tags">
          {projet.tags.map((tag, index) => (
            <img key={index} src={tag.image} alt={tag.name} className="tag"/>
          ))}
        </div>
        <div className="liens">
          {projet.liens.map((lien, index) => (
            <button
              key={index}
              onClick={() =>
                window.open(lien.url, "_blank", "noopener,noreferrer")
              }
              className="github-button"
            >
              <span>
                {lien.type === "github" ? "Lien GitHub" : "Lien Site"}
              </span>
              <img
                src={
                  lien.type === "github"
                    ? "./assets/github.svg"
                    : "./assets/website.svg"
                }
                alt={lien.type}
              />
            </button>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="projet__imag"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        style={{ y: y2 }}
      >
        <img src={projet.image} alt={projet.title} />
      </motion.div>
    </div>
  );
}

export default Projet;
