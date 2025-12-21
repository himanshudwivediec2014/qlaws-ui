import { motion } from "framer-motion";
import styles from "./Teams.module.css";

const TeamsSection: React.FC = () => {
    return (
        <div
            className={`${styles["our-team-section"]} flex flex-col items-center`}
        >
            <motion.div
                className={`${styles["our-team-title-section"]} flex flex-col items-center`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    className={styles["our-team-badge"]}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h6 className={`${styles["team-badge-text"]} text-center`}>
                        Our Team
                    </h6>
                </motion.div>

                <motion.h2
                    className={`${styles["our-team-title"]} text-center`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Built by a Team from Top Global Companies
                    <b /> & World-Class Institutions
                </motion.h2>

                <motion.h6
                    className={`${styles["our-team-subtitle"]} text-center`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Our team brings deep expertise in law, AI, engineering and
                    operations through years of
                    <b /> experience at leading organizations.
                </motion.h6>
            </motion.div>
            <motion.div
                className={styles["team-companies"]}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
            ></motion.div>
        </div>
    );
};

export default TeamsSection;
