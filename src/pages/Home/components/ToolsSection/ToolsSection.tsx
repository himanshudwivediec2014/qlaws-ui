import React from "react";
import styles from "./ToolsSection.module.css";

const ToolsSection: React.FC = () => {
    return (
        <div className={styles["our-tools-section"]}>
            <div className={styles["our-tools-title-section"]}>
                <div className={styles["our-tools-badge"]}>
                    <h6 className={styles["tools-badge-text"]}>Our Tools</h6>
                </div>

                <h2 className={styles["our-tools-title"]}>
                    Powerful{" "}
                    <span className={styles["title-sub-text"]}>Legal AI</span>{" "}
                    Tools to enhance your workflow
                </h2>

                <h6 className={styles["our-tools-subtitle"]}>
                    Leverage cutting-edge Al technology to transform your legal
                    practice and deliver exceptional results for your clients.
                </h6>
            </div>
            <div className={styles["tools-showcase"]}></div>
        </div>
    );
};

export default ToolsSection;
