import React from "react";
import { HomeCardLg } from "../../Home";
import styles from "./SolutionsSection.module.css";
import CardLg from "../../../../shared/components/Card-lg/Card-lg";

const SolutionsSection: React.FC = () => {
    const [solCards, setSolCards] = React.useState([...HomeCardLg]);

    return (
        <div className={styles["solution-section"]}>
            <div className={styles["solution-title-section"]}>
                <div className={styles["solution-badge"]}>
                    <h2 className={styles["solution-badge-text"]}>
                        The Solution
                    </h2>
                </div>

                <h2 className={styles["solution-title"]}>
                    How Qlaws Solves This
                </h2>

                <h6 className={styles["solution-subtitle"]}>
                    A next-generation Agentic AI system built for legal teams.
                </h6>
            </div>

            <div className={styles["solution-info-section"]}>
                {solCards.map((solCard, index) => (
                    <CardLg
                        key={index}
                        title={solCard.title}
                        text={solCard.text}
                        variant={solCard.variant}
                        icon={solCard.icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default SolutionsSection;
