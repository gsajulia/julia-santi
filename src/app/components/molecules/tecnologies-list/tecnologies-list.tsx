import React from "react";
import styles from "./tecnologies-list.module.css";

const TechnologyList = ({
    technologies,
    onTechnologyClick,
    currentTechnology,
}) => {
    return (
        <ul className={styles.technologiesList}>
            {technologies.map((technology) => (
                <li
                    key={technology.id}
                    className={`${styles.technologyListItem} ${
                        technology === currentTechnology
                            ? styles.technologyActive
                            : ""
                    }`}
                    onClick={() => onTechnologyClick(technology)}
                >
                    {technology.label}
                </li>
            ))}
        </ul>
    );
};

export default TechnologyList;
