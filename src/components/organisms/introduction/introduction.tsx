"use client";
import Image from "next/image";
import styles from "./introduction.module.css";
import githubIcon from "../../../../public/github.svg";
import emailIcon from "../../../../public/email.svg";
import linkedinIcon from "../../../../public/linkedin.svg";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TIntroductionSection } from "./introduction.types";

const Introduction = ({
  activeSection,
  handleSectionClick,
}: TIntroductionSection) => {
  const [isCopied, setIsCopied] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.2 });

  const handleEmailIconClick = async () => {
    try {
      await navigator.clipboard.writeText("julia.gs.acosta@gmail.com");
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  return (
    <section className={styles.introduction}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
        transition={{ duration: 1 }}
        className={styles.introductionContainer}
      >
        <div className={styles.introductionContent}>
          <h1>
            Hi, I&apos;m Júlia, a{" "}
            <mark className={styles.mark}>Senior Frontend Developer</mark> and{" "}
            <mark className={styles.mark}>FullStack Feveloper</mark>!
          </h1>
          <div className={styles.about}>
            <p className={styles.description}>
              Over 5 years of Software Development experience
            </p>
            <p className={styles.description}>
              Fluent with <span>English</span> and <span>Portuguese</span>
            </p>
          </div>
        </div>
        <nav className={styles.navigation}>
          <a
            href="#projects"
            className={activeSection === "frontend" ? styles.active : ""}
            onClick={() => handleSectionClick("frontend")}
          >
            Frontend
          </a>
          <span>•</span>
          <a
            href="#projects"
            className={activeSection === "backend" ? styles.active : ""}
            onClick={() => handleSectionClick("backend")}
          >
            Backend
          </a>
          <span>•</span>
          <a
            href="#projects"
            className={activeSection === "datascience" ? styles.active : ""}
            onClick={() => handleSectionClick("datascience")}
          >
            Data Science
          </a>
        </nav>
        <div className={styles.contactLinks}>
          <a href="https://github.com/gsajulia/" target="_blank">
            <Image width={40} src={githubIcon} alt="Go to Github" />
          </a>
          <button onClick={handleEmailIconClick} className={styles.iconButton}>
            <Image width={40} src={emailIcon} alt="Copy Email" />
            {isCopied && <span className={styles.tooltip}>Copied!</span>}
          </button>
          <a
            href="https://www.linkedin.com/in/julia-gabriela-santi-acosta/"
            target="_blank"
          >
            <Image width={40} src={linkedinIcon} alt="Go to linkedin" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Introduction;
