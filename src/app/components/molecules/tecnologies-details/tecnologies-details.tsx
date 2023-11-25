import React from "react";
import styles from "./tecnologies-details.module.css";
import { TTecnologiesDetails } from "./tecnologies-details.types";

const TechnologyDetails = ({ currentTechnology }: TTecnologiesDetails) => {
    return (
        <div className={styles.technologyDetails}>
            <h2>{currentTechnology.label}</h2>
            <div className={styles.description}>
                <img
                    width={50}
                    src={currentTechnology.image}
                    alt={currentTechnology.label}
                />
                <p>{currentTechnology.description}</p>
            </div>
        </div>
    );
};

export default TechnologyDetails;
