import React from "react";
import styles from "./BenefitsSection.module.css";

export interface Benefit {
    title: string;
    description: string;
    icon: string;
}

const Benefits: Benefit[] = [
    {
        title: "Compliance-Ready Outputs",
        description: "Ensure documents meet legal standards and regulations.",
        icon: "src/assets/benefit-tick-mark.png",
    },
    {
        title: "Scalable Solutions",
        description: "Easily grow with the demands of your data",
        icon: "src/assets/benefit-tick-mark.png",
    },
    {
        title: "Collaboration Tools",
        description:
            "Enable multiple team members to review and edit documents simultaneously.",
        icon: "src/assets/benefit-tick-mark.png",
    },
    {
        title: "Intelligent clause suggestions",
        description:
            "Get context-aware recommendations for clauses and precedents.",
        icon: "src/assets/benefit-tick-mark.png",
    },
    {
        title: "Secure and confidential",
        description: "Protect sensitive information with top-level security.",
        icon: "src/assets/benefit-tick-mark.png",
    },
    {
        title: "Automated Risk Analysis",
        description:
            "Identify potential legal risks and red flags in documents before finalizing.",
        icon: "src/assets/benefit-tick-mark.png",
    },
];

const BenefitsSection: React.FC = () => {
    const [benefits, setBenefits] = React.useState(Benefits);
    const leftColumnItems: Benefit[] = benefits.slice(0, benefits.length / 2);
    const rightColumnItems: Benefit[] = benefits.slice(benefits.length / 2);
    return (
        <div className={styles["our-benefits-section"]}>
            <div className={styles["our-benefits-title-section"]}>
                <div className={styles["our-benefits-badge"]}>
                    <h6 className={styles["benefits-badge-text"]}>
                        Key Benefits
                    </h6>
                </div>

                <h2 className={styles["our-benefits-title"]}>
                    Why Choose Qlaws
                </h2>

                <h6 className={styles["our-benefits-subtitle"]}>
                    QLaws offers AI-driven legal drafting, summarization, Word
                    integration, clause suggestions, compliance, and top-tier
                    data security.
                </h6>
            </div>
            <div className={styles["benefits-showcase"]}>
                <div className={styles["benefits-left-column"]}>
                    {leftColumnItems?.map((benefit, index) => (
                        <div key={index} className={styles["benefits-card"]}>
                            <div className={styles["benefits-icon-holder"]}>
                                <img
                                    src={benefit.icon}
                                    alt={benefit.title}
                                    className={styles["benefits-icon"]}
                                />
                            </div>

                            <h2 className={styles["benefits-title"]}>
                                {benefit.title}
                            </h2>

                            <p className={styles["benefits-description"]}>
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className={styles["benefits-centre-section"]}></div>

                <div className={styles["benefits-right-column"]}>
                    {rightColumnItems?.map((benefit, index) => (
                        <div key={index} className={styles["benefits-card"]}>
                            <div className={styles["benefits-icon-holder"]}>
                                <img
                                    src={benefit.icon}
                                    alt={benefit.title}
                                    className={styles["benefits-icon"]}
                                />
                            </div>

                            <h2 className={styles["benefits-title"]}>
                                {benefit.title}
                            </h2>

                            <p className={styles["benefits-description"]}>
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <button className={styles["book-demo-handler"]}>Book a Demo</button>
        </div>
    );
};

export default BenefitsSection;
