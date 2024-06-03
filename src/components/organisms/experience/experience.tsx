"use client";
import { useState } from "react";
import { cowmed, drakkar, fetchly, sebratec, vetta } from "@/lib/experiences";
import styles from "./experience.module.css";
import { TExperienceNavigation } from "./experience.types";

const ExperienceNavigation = ({
  experiences,
  currentExperience,
  setCurrentExperience,
}: TExperienceNavigation) => (
  <nav>
    {experiences.map((_, index) => (
      <button
        key={index}
        className={`${styles.experienceButton} ${
          index === currentExperience ? styles.selected : ""
        }`}
        onClick={() => setCurrentExperience(index)}
      >
        {experiences.length - index}
      </button>
    ))}
  </nav>
);

const Experience = () => {
  const [currentExperience, setCurrentExperience] = useState(0);
  const experiences = [vetta, sebratec, fetchly, drakkar, cowmed];

  return (
    <section className={styles.experienceSection}>
      <div className={styles.experienceContent}>
        <h2 className={styles.experienceTitle}>Experience & Skills</h2>
        {experiences.map(
          ({ companyName, period, role, about, id }, index) =>
            currentExperience === index && (
              <div key={id} className={styles.experiences}>
                <ExperienceNavigation
                  experiences={experiences}
                  currentExperience={currentExperience}
                  setCurrentExperience={setCurrentExperience}
                />
                <h4 className={styles.role}>{role}</h4>
                <span className={styles.experienceLocation}>
                  {companyName}
                  {"  "}
                  <span className={styles.smallText}>[ {period} ]</span>
                </span>
                <ul>
                  {about.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )
        )}
      </div>
      {experiences.map(
        ({ skills, id }, index) =>
          currentExperience === index && (
            <div key={id} className={styles.marquee}>
              <p>
                {skills.map((skill, index) => (
                  <span key={skill.id}>
                    {skill.label} {index !== skills.length - 1 && " • "}
                  </span>
                ))}
              </p>
            </div>
          )
      )}
    </section>
  );
};

export default Experience;
