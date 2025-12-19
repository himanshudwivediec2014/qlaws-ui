import React from "react";
import { motion } from "framer-motion";
import TestimonialCarousel from "../../components/TestimonialsSection/TestimonialCarousel/TestimonialCarousel";
import styles from "./TestimonialSection.module.css";
import avatarImage from "../../../../assets/avatar.png";

const sampleTestimonials = [
    {
        id: "1",
        text: "qlaws.ai is shaping up to be an innovative solution for legal professionals. Even during testing, the platform has shown how it can save time and improve efficiency in legal research.",
        avatar: avatarImage,
        author: "Sarah J.",
        designation: "Data Analyst, TechCorp",
    },
    {
        id: "2",
        text: "qlaws.ai is shaping up to be an innovative solution for legal professionals. Even during testing, the platform has shown how it can save time and improve efficiency in legal research.",
        avatar: avatarImage,
        author: "Daniel O.",
        designation: "Senior Associate",
    },
    {
        id: "3",
        text: "qlaws.ai is shaping up to be an innovative solution for legal professionals. Even during testing, the platform has shown how it can save time and improve efficiency in legal research.",
        avatar: avatarImage,
        author: "Aisha R.",
        designation: "Head of Litigation",
    },
];

const TestimonialsSection: React.FC = () => {
    return (
        <div className={styles["testimonials-wrapper"]}>
            <motion.div
                className={styles["testimonials-title-section"]}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <motion.div
                    className={styles["testimonials-badge"]}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h6 className={styles["testimonials-badge-text"]}>
                        wall of love
                    </h6>
                </motion.div>

                <motion.h2
                    className={styles["testimonials-title"]}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    What they're Saying
                </motion.h2>
            </motion.div>

            <motion.div
                className={styles["carousel-wrapper"]}
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
                        },
                    },
                }}
            >
                <TestimonialCarousel testimonials={sampleTestimonials} />

                <motion.div
                    className={styles["testimonials-counters"]}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <motion.div
                        className={styles["counter"]}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className={styles["counter-title"]}>100k+</div>
                        <div className={styles["counter-subtitle"]}>
                            Clauses used To train ai
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles["counter"]}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className={styles["counter-title"]}>5000+</div>
                        <div className={styles["counter-subtitle"]}>
                            Contracts Processed
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles["counter"]}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className={styles["counter-title"]}>98%</div>
                        <div className={styles["counter-subtitle"]}>
                            Faster Contract Review
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default TestimonialsSection;
