import { TExperienceCard } from "./experience.types";

const ExperienceCard = ({ experience }: TExperienceCard) => {
    const { role, companyName, tags, period, about, skills } = experience;
    return (
        <div>
            <h4>{role}</h4>
            <span>{companyName}</span>
            {tags.map((tag) => tag.title)}
            <span>{period}</span>
            <ul>
                {about.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>

            {skills.map((skill) => (
                <div key={skill.id}>
                    <img width={50} src={skill.image} alt={skill.label} />
                </div>
            ))}
        </div>
    );
};

export default ExperienceCard;
