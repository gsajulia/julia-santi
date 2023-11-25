import React from "react";
import PropTypes from "prop-types";
import styles from "./tecnologies-details.module.css";

const TechnologyDetails = ({ currentTechnology }) => {
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

TechnologyDetails.propTypes = {
    currentTechnology: PropTypes.object.isRequired,
};

export default TechnologyDetails;
