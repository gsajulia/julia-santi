import { cowmed, drakkar, fetchly, sebratec } from "@/app/lib/experiences";
import ExperienceCard from "../../molecules/experience-card/experience-card";
import { TExperience } from "@/app/models/base";
import styles from "./experience.module.css";

const Experience = () => {
    const experiences: TExperience[] = [cowmed, drakkar, fetchly, sebratec];

    return (
        <section>
            <h1 className={styles.title}>Experience & Skills</h1>
            {experiences.map((experience) => (
                <ExperienceCard experience={experience} />
            ))}
        </section>
    );
};

export default Experience;
