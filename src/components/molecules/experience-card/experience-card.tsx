"use client";
import { TExperienceCard } from "./experience.types";
import styles from "./experience-card.module.css";
import Chip from "../../atoms/chip/chip";
import { useState } from "react";
import TechnologyList from "../tecnologies-list/tecnologies-list";
import { TSkill } from "@/models/base";

const ExperienceCard = ({ experience }: TExperienceCard) => {
    const { role, companyName, tags, period, about, skills } = experience;
    const [currentTechnology, setCurrentTechnology] = useState<
        TSkill | undefined
    >();

    const handleTechnologyClick = (technology: TSkill) => {
        if (currentTechnology !== technology) setCurrentTechnology(technology);
        else setCurrentTechnology(undefined);
    };
    return (
        <div className={styles.experienceCard}>
            <h4 className={styles.cardTitle}>{role}</h4>
            <div className={styles.experienceInfoContainer}>
                <div className={styles.experienceInfoContent}>
                    <span className={styles.experienceLocation}>
                        {companyName}
                        {"  "}
                        <span className={styles.smallText}>[ {period} ]</span>
                    </span>

                    <div className={styles.tagsContainer}>
                        {tags.map((tag) => (
                            <Chip
                                key={tag.id}
                                title={tag.title}
                                color={tag.color}
                            />
                        ))}
                    </div>
                    <ul>
                        {about.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
                <TechnologyList
                    technologies={skills}
                    onTechnologyClick={handleTechnologyClick}
                    currentTechnology={currentTechnology}
                />
            </div>
        </div>
    );
};

export default ExperienceCard;