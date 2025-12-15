import React from "react";
import { motion } from "framer-motion";
import { HOME_CARD_LG } from "../../constants/home-card-lg.constant";
import styles from "./SolutionsSection.module.css";
import CardLg from "../../../../shared/components/Card-lg/Card-lg";

const SolutionsSection: React.FC = () => {
    const solCards = React.useMemo(() => [...HOME_CARD_LG], []);

    return (
        <div className={`${styles["solution-section"]} flex flex-col items-center`}>
            <motion.div 
                className={`${styles["solution-title-section"]} flex flex-col items-center`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <motion.div 
                    className={styles["solution-badge"]}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className={`${styles["solution-badge-text"]} text-center`}>
                        The Solution
                    </h2>
                </motion.div>

                <motion.h2 
                    className={`${styles["solution-title"]} text-center`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    How Qlaws Solves This
                </motion.h2>

                <motion.h6 
                    className={`${styles["solution-subtitle"]} text-center`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    A next-generation Agentic AI system built for legal teams.
                </motion.h6>
            </motion.div>

            <motion.div 
                className={`${styles["solution-info-section"]} flex justify-start items-center gap-8`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.15,
                            delayChildren: 0.2,
                        }
                    }
                }}
            >
                {solCards.map((solCard, index) => (
                    <CardLg
                        key={index}
                        title={solCard.title}
                        text={solCard.text}
                        variant={solCard.variant}
                        icon={solCard.icon}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default SolutionsSection;
