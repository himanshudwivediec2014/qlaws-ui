import React from "react";
import { motion } from "framer-motion";
import styles from "./ToolsSection.module.css";
import aiVaultImg from "../../../../assets/ai-vault.png";
import aiDraftImg from "../../../../assets/ai-draft.png";
import workflowBuilderImg from "../../../../assets/workflow-builder.png";
import msWordImg from "../../../../assets/ms-word.png";

type ToolSize = "sm" | "lg";

interface ToolConfig {
    id: string;
    title: string;
    description: string;
    image: string;
    alt: string;
    size: ToolSize;
}

const tools: ToolConfig[] = [
    {
        id: "ai-vault",
        title: "AI Secured Vault",
        description:
            "Upload, store, and analyze thousands of documents using powerful Agentic AI.",
        image: aiVaultImg,
        alt: "AI Secured Vault",
        size: "sm",
    },
    {
        id: "ai-drafting",
        title: "AI Drafting & Summarization",
        description:
            "Generate legal documents and summaries in seconds. From contracts to case files, streamline your workflow with AI-powered drafting and concise, compliant legal summaries.",
        image: aiDraftImg,
        alt: "AI Drafting & Summarization",
        size: "lg",
    },
    {
        id: "workflow-builder",
        title: "Workflow Builder",
        description:
            "Multi-model agents designed to collaborate with professionals to deliver precise, purpose-built workflow.",
        image: workflowBuilderImg,
        alt: "Workflow Builder",
        size: "lg",
    },
    {
        id: "ms-word",
        title: "MS Word Integration",
        description:
            "Draft and summarize legal documents instantly—right inside Word.",
        image: msWordImg,
        alt: "MS Word Integration",
        size: "sm",
    },
];

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

            <div className={styles["tools-images-row"]}>
                {tools.slice(0, 2).map((tool, index) => (
                    <motion.div
                        key={tool.id}
                        className={`${styles["tool-card"]} ${
                            tool.size === "lg"
                                ? styles["tool-card-lg"]
                                : styles["tool-card-sm"]
                        }`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.2 * index }}
                    >
                        <div className={styles["tool-image-wrapper"]}>
                            <img
                                src={tool.image}
                                alt={tool.alt}
                                className={styles["tool-image"]}
                            />
                        </div>
                        <h3
                            className={`${styles["tool-title"]} text-[#1B0C25]`}
                        >
                            {tool.title}
                        </h3>
                        <p
                            className={`${styles["tool-description"]} mt-2 font-normal`}
                        >
                            {tool.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            <div className={`${styles["tools-images-row"]} mt-8`}>
                {tools.slice(2).map((tool, index) => (
                    <motion.div
                        key={tool.id}
                        className={`${styles["tool-card"]} ${
                            tool.size === "lg"
                                ? styles["tool-card-lg"]
                                : styles["tool-card-sm"]
                        }`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.2 * index }}
                    >
                        <div className={styles["tool-image-wrapper"]}>
                            <img
                                src={tool.image}
                                alt={tool.alt}
                                className={styles["tool-image"]}
                            />
                        </div>
                        <h3
                            className={`${styles["tool-title"]} text-[#1B0C25]`}
                        >
                            {tool.title}
                        </h3>
                        <p
                            className={`${styles["tool-description"]} mt-2 font-normal`}
                        >
                            {tool.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ToolsSection;
