import React from "react";
import { motion } from "framer-motion";
import { HOME_CARD_SM } from "../../constants/home-card-sm.constant";
import styles from "./ChallengesSection.module.css";
import CardSm from "../../../../shared/components/Card-sm/Card-sm";

const ChallengesSection: React.FC = () => {
    const cards = React.useMemo(() => [...HOME_CARD_SM], []);
    return (
        <div
            className={`${styles["challenge-section"]} flex flex-col items-center`}
        >
            <motion.div
                className={styles["challenge-badge"]}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
            >
                <h6 className={`${styles["badge-text"]} text-center`}>
                    The Challenge
                </h6>
            </motion.div>

            <motion.h2
                className={`${styles["challenge-title"]} text-center`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                The Problem With Today's Legal AI
            </motion.h2>

            <motion.h6
                className={`${styles["challenge-subtitle"]} text-center`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                Traditional copilots break context & fail real-world legal
                workflows.
            </motion.h6>

            <motion.div
                className={`${styles["challenge-cards"]} flex justify-center flex-wrap gap-6`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.1,
                            delayChildren: 0.4,
                        },
                    },
                }}
            >
                {cards.map((card, index) => (
                    <CardSm
                        key={index}
                        text={card.text}
                        variant={card.variant}
                        icon={card.icon}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default ChallengesSection;
