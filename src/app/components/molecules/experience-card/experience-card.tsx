"use client";
import { TExperienceCard } from "./experience.types";
import styles from "./experience-card.module.css";
import Chip from "../../atoms/chip/chip";
import { useState } from "react";
import TechnologyList from "../tecnologies-list/tecnologies-list";
import TechnologyDetails from "../tecnologies-details/tecnologies-details";

const ExperienceCard = ({ experience }: TExperienceCard) => {
    const { role, companyName, tags, period, about, skills } = experience;
    const [currentTechnology, setCurrentTechnology] = useState(skills[0]);

    const handleTechnologyClick = (technology) => {
        setCurrentTechnology(technology);
    };
    return (
        <div className={styles.experienceCard}>
            <h4 className={styles.cardTitle}>{role}</h4>
            <div className={styles.experienceInfoContainer}>
                <div className={styles.experienceInfoContent}>
                    <span>
                        {companyName}
                        {"  "}
                        <span className={styles.smallText}>[ {period} ]</span>
                    </span>

                    <div className={styles.tagsContainer}>
                        {tags.map((tag) => (
                            <Chip title={tag.title} color={tag.color} />
                        ))}
                    </div>
                    <ul>
                        {about.map((item) => (
                            <li>{item}</li>
                        ))}
                    </ul>
                </div>
                <TechnologyList
                    technologies={skills}
                    onTechnologyClick={handleTechnologyClick}
                    currentTechnology={currentTechnology}
                />
            </div>

            <div className={styles.technologiesInfoContainer}>
                <TechnologyDetails currentTechnology={currentTechnology} />
            </div>
        </div>
    );
};

export default ExperienceCard;
