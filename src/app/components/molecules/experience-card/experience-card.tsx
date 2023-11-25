import { TExperienceCard } from "./experience.types";
import styles from "./experience-card.module.css";
import Chip from "../../atoms/chip/chip";

const ExperienceCard = ({ experience }: TExperienceCard) => {
    const { role, companyName, tags, period, about, skills } = experience;
    return (
        <div className={styles.experienceCard}>
            <h4 className={styles.cardTitle}>{role}</h4>
            <span>{companyName}</span>
            <div className={styles.tagsContainer}>
                {tags.map((tag) => (
                    <Chip title={tag.title} color={tag.color} />
                ))}
            </div>
            <span>{period}</span>
            <ul>
                {about.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>

            <h4>Skills</h4>
            <div className={styles.technologiesContainer}>
                {skills.map((skill) => (
                    <div className={styles.skill} key={skill.id}>
                        <img width={30} src={skill.image} alt={skill.label} />
                        {skill.label}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceCard;
