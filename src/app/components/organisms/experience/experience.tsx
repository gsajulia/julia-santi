import { cowmed, drakkar, fetchly, sebratec } from "@/app/lib/experiences";
import ExperienceCard from "../../molecules/experience-card/experience-card";
import { TExperience } from "@/app/models/base";
import styles from "./experience.module.css";

const Experience = () => {
    const experiences: TExperience[] = [sebratec, fetchly, drakkar, cowmed];
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
