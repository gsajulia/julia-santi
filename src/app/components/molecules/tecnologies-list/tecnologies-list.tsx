import React from "react";
import styles from "./tecnologies-list.module.css";
import { TTecnologiesList } from "./tecnologies-list.types";

const TechnologyList = ({
    technologies,
    onTechnologyClick,
    currentTechnology,
}: TTecnologiesList) => {
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
