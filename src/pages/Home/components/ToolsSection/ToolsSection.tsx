import React from "react";
import { motion } from "framer-motion";
import styles from "./ToolsSection.module.css";

const ToolsSection: React.FC = () => {
    return (
        <div className={`${styles["our-tools-section"]} flex flex-col items-center`}>
            <motion.div 
                className={`${styles["our-tools-title-section"]} flex flex-col items-center`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <motion.div 
                    className={styles["our-tools-badge"]}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h6 className={styles["tools-badge-text"]}>Our Tools</h6>
                </motion.div>

                <motion.h2 
                    className={`${styles["our-tools-title"]} text-center`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Powerful{" "}
                    <span className={styles["title-sub-text"]}>Legal AI</span>{" "}
                    Tools to enhance your workflow
                </motion.h2>

                <motion.h6 
                    className={`${styles["our-tools-subtitle"]} text-center`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Leverage cutting-edge Al technology to transform your legal
                    practice and deliver exceptional results for your clients.
                </motion.h6>
            </motion.div>
            <motion.div 
                className={styles["tools-showcase"]}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
            ></motion.div>
        </div>
    );
};

export default ToolsSection;
