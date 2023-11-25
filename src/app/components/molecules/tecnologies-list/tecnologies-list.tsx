import React from "react";
import PropTypes from "prop-types";
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

TechnologyList.propTypes = {
    technologies: PropTypes.array.isRequired,
    onTechnologyClick: PropTypes.func.isRequired,
    currentTechnology: PropTypes.object.isRequired,
};

export default TechnologyList;
