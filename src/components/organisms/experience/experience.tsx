"use client";
import { useState } from "react";
import { cowmed, drakkar, fetchly, sebratec } from "@/lib/experiences";
import ExperienceCard from "../../molecules/experience-card/experience-card";
import { TExperience } from "@/models/base";
import styles from "./experience.module.css";

const Experience = ({ portfolioRepositories }) => {
    console.log(portfolioRepositories);
    const [experiences, setExperiences] = useState<TExperience[]>([
        sebratec,
        fetchly,
        drakkar,
        cowmed,
    ]);

    return (
        <section className={styles.experienceAndSkillsContainer}>
            <h1 className={styles.title}>Experience & Skills</h1>
            <div className={styles.experienceContainer}>
                {experiences.map((experience) => (
                    <ExperienceCard
                        key={experience.id}
                        experience={experience}
                    />
                ))}
            </div>
        </section>
    );
};

export default Experience;
