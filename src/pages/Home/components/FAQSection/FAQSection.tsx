import React, { useState } from "react";
import styles from "./FAQSection.module.css";
import Accordion from "./Accordion/Accordion";

type FAQItem = {
    id: string;
    title: string;
    description: string;
};

const FAQ_DATA: FAQItem[] = [
    {
        id: "faq-1",
        title: "What is Qlaws AI?",
        description:
            "Qlaws AI is a suite of legal AI tools designed to help legal professionals automate document drafting, summarization, secure storage and intelligent search across their matter files.",
    },
    {
        id: "faq-2",
        title: "Can I integrate Qlaws AI with my existing tools?",
        description:
            "Yes! Qlaws AI supports integration with a wide range of tools and platforms. Our flexible APIs allow you to connect with your data sources effortlessly, enabling a smooth workflow.",
    },
    {
        id: "faq-3",
        title: "How does Qlaws AI automate tasks?",
        description:
            "Qlaws AI uses a mix of retrieval-augmented models and task-specific agents to analyze documents, extract key information, generate summaries and produce compliant drafts tailored to your needs.",
    },
    {
        id: "faq-4",
        title: "Is my data secure with Qlaws AI?",
        description:
            "Security is a top priority. Data is encrypted at rest and in transit, access controls are enforced and we provide audit logs and enterprise-grade security features.",
    },
    {
        id: "faq-5",
        title: "What kind of support do you offer?",
        description:
            "We offer onboarding, documentation, and premium support plans including SLA-backed response times and dedicated technical account managers for enterprise customers.",
    },
];

const FAQSection: React.FC = () => {
    // only one open at a time - open the second FAQ by default to resemble screenshot
    const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

    const handleToggle = (id?: string) => {
        if (!id) return;
        setOpenId((prev) => (prev === id ? null : id));
    };

    const [open, setOpen] = React.useState(0);

    const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

    return (
        <section className={`flex justify-between ${styles["faq-wrapper"]}`}>
            <div className={styles["left-section"]}>
                <div className={styles["faq-badge"]}>
                    <h2 className={styles["faq-badge-text"]}>faq</h2>
                </div>

                <h2 className={styles["faq-title"]}>
                    Frequently Asked Questions
                </h2>

                <div className={styles["faq-sub-title-section"]}>
                    <h2 className={styles["faq-subtitle"]}>
                        Still have a question?
                    </h2>

                    <p className={styles["faq-sub-info"]}>
                        <span className={styles["faq-sub-info-highlight"]}>
                            Contact us!
                        </span>{" "}
                        We'll be happy to help you.
                    </p>
                </div>
            </div>

            <div className={styles["right-section"]}>
                <div className="flex flex-col gap-4">
                    {FAQ_DATA.map((item, index) => (
                        // key is set here (React uses key; it's not forwarded as a prop)
                        <Accordion
                            key={index}
                            id={item.id} // custom prop forwarded to Accordion
                            title={item.title}
                            description={item.description}
                            isOpen={openId === item.id}
                            onToggle={handleToggle}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
