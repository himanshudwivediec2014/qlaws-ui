import React from "react";
import { HomeCardSm } from "../../Home";
import styles from "./ChallengesSection.module.css";
import CardSm from "../../../../shared/components/Card-sm/Card-sm";

const ChallengesSection: React.FC = () => {
    const [cards, setCards] = React.useState([...HomeCardSm]);
    return (
        <div className={styles["challenge-section"]}>
            <div className={styles["challenge-badge"]}>
                <h6 className={styles["badge-text"]}>The Challenge</h6>
            </div>

            <h2 className={styles["challenge-title"]}>
                The Problem With Today's Legal AI
            </h2>

            <h6 className={styles["challenge-subtitle"]}>
                Traditional copilots break context & fail real-world legal
                workflows.
            </h6>

            <div className={styles["challenge-cards"]}>
                {cards.map((card, index) => (
                    <CardSm
                        key={index}
                        text={card.text}
                        variant={card.variant}
                        icon={card.icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default ChallengesSection;
