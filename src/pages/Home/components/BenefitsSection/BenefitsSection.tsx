import React from "react";
import { motion } from "framer-motion";
import styles from "./BenefitsSection.module.css";
import benefitTickMarkIcon from "../../../../assets/benefit-tick-mark.png";

export interface Benefit {
    title: string;
    description: string;
    icon: string;
}

const Benefits: Benefit[] = [
    {
        title: "Compliance-Ready Outputs",
        description: "Ensure documents meet legal standards and regulations.",
        icon: benefitTickMarkIcon,
    },
    {
        title: "Scalable Solutions",
        description: "Easily grow with the demands of your data",
        icon: benefitTickMarkIcon,
    },
    {
        title: "Collaboration Tools",
        description:
            "Enable multiple team members to review and edit documents simultaneously.",
        icon: benefitTickMarkIcon,
    },
    {
        title: "Intelligent clause suggestions",
        description:
            "Get context-aware recommendations for clauses and precedents.",
        icon: benefitTickMarkIcon,
    },
    {
        title: "Secure and confidential",
        description: "Protect sensitive information with top-level security.",
        icon: benefitTickMarkIcon,
    },
    {
        title: "Automated Risk Analysis",
        description:
            "Identify potential legal risks and red flags in documents before finalizing.",
        icon: benefitTickMarkIcon,
    },
];

const BenefitsSection: React.FC = () => {
    const benefits = React.useMemo(() => Benefits, []);
    const leftColumnItems: Benefit[] = benefits.slice(0, benefits.length / 2);
    const rightColumnItems: Benefit[] = benefits.slice(benefits.length / 2);
    return (
        <div
            className={`${styles["our-benefits-section"]} flex flex-col items-center`}
        >
            <motion.div
                className={`${styles["our-benefits-title-section"]} flex flex-col items-center`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    className={styles["our-benefits-badge"]}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h6 className={styles["benefits-badge-text"]}>
                        Why Choose QLaws
                    </h6>
                </motion.div>

                <motion.h2
                    className={`${styles["our-benefits-title"]} text-center`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Why Choose Qlaws
                </motion.h2>

                <motion.h6
                    className={`${styles["our-benefits-subtitle"]} text-center`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    QLaws offers AI-driven legal drafting, summarization, Word
                    integration, clause suggestions, compliance, and top-tier
                    data security.
                </motion.h6>
            </motion.div>
            <motion.div
                className={`${styles["benefits-showcase"]} flex justify-between items-center`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <motion.div
                    className={`${styles["benefits-left-column"]} flex flex-col justify-between`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15,
                                delayChildren: 0.4,
                            },
                        },
                    }}
                >
                    {leftColumnItems?.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className={styles["benefits-card"]}
                            variants={{
                                hidden: { opacity: 0, x: -30 },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: { duration: 0.5 },
                                },
                            }}
                            whileHover={{
                                x: 8,
                                transition: { duration: 0.3 },
                            }}
                        >
                            <motion.div
                                className={`${styles["benefits-icon-holder"]} flex justify-center items-center`}
                                whileHover={{
                                    rotate: 360,
                                    transition: { duration: 0.6 },
                                }}
                            >
                                <img
                                    src={benefit.icon}
                                    alt={benefit.title}
                                    className={styles["benefits-icon"]}
                                />
                            </motion.div>

                            <h2 className={styles["benefits-title"]}>
                                {benefit.title}
                            </h2>

                            <p className={styles["benefits-description"]}>
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className={styles["benefits-centre-section"]}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                ></motion.div>

                <motion.div
                    className={`${styles["benefits-right-column"]} flex flex-col justify-between`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15,
                                delayChildren: 0.4,
                            },
                        },
                    }}
                >
                    {rightColumnItems?.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className={styles["benefits-card"]}
                            variants={{
                                hidden: { opacity: 0, x: 30 },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: { duration: 0.5 },
                                },
                            }}
                            whileHover={{
                                x: -8,
                                transition: { duration: 0.3 },
                            }}
                        >
                            <motion.div
                                className={`${styles["benefits-icon-holder"]} flex justify-center items-center`}
                                whileHover={{
                                    rotate: 360,
                                    transition: { duration: 0.6 },
                                }}
                            >
                                <img
                                    src={benefit.icon}
                                    alt={benefit.title}
                                    className={styles["benefits-icon"]}
                                />
                            </motion.div>

                            <h2 className={styles["benefits-title"]}>
                                {benefit.title}
                            </h2>

                            <p className={styles["benefits-description"]}>
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            <motion.div className={styles["actions-wrapper"]}>
                <motion.button
                    className={styles["get-started-handler"]}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95 }}
                >
                    Get Started
                </motion.button>
                <motion.button
                    className={styles["book-demo-handler"]}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95 }}
                >
                    Book a Demo
                </motion.button>
            </motion.div>
        </div>
    );
};

export default BenefitsSection;
