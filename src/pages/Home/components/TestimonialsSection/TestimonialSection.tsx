import React from "react";
import TestimonialCarousel from "../../components/TestimonialsSection/TestimonialCarousel/TestimonialCarousel";
import styles from "./TestimonialSection.module.css";

const sampleTestimonials = [
    {
        id: "1",
        text: "qlaws.ai is shaping up to be an innovative solution for legal professionals. Even during testing, the platform has shown how it can save time and improve efficiency in legal research.",
        avatar: "src/assets/avatar.png",
        name: "Sarah J.",
        designation: "Data Analyst, TechCorp",
    },
    {
        id: "2",
        text: "qlaws.ai is shaping up to be an innovative solution for legal professionals. Even during testing, the platform has shown how it can save time and improve efficiency in legal research.",
        avatar: "src/assets/avatar.png",
        name: "Daniel O.",
        designation: "Senior Associate",
    },
    {
        id: "3",
        text: "qlaws.ai is shaping up to be an innovative solution for legal professionals. Even during testing, the platform has shown how it can save time and improve efficiency in legal research.",
        avatar: "src/assets/avatar.png",
        name: "Aisha R.",
        designation: "Head of Litigation",
    },
];

const TestimonialsSection: React.FC = () => {
    return (
        <div className={styles["testimonials-wrapper"]}>
            <div className={styles["testimonials-title-section"]}>
                <div className={styles["testimonials-badge"]}>
                    <h6 className={styles["testimonials-badge-text"]}>
                        wall of love
                    </h6>
                </div>

                <h2 className={styles["testimonials-title"]}>
                    What they're Saying
                </h2>
            </div>

            <div className={styles["carousel-wrapper"]}>
                <TestimonialCarousel
                    testimonials={sampleTestimonials}
                    autoplay
                    autoplayInterval={7000}
                    showNav
                    showDots
                />

                <div className={styles["testimonials-counters"]}>
                    <div className={styles["counter"]}>
                        <div className={styles["counter-title"]}>100k+</div>
                        <div className={styles["counter-subtitle"]}>
                            Clauses used To train ai
                        </div>
                    </div>

                    <div className={styles["counter"]}>
                        <div className={styles["counter-title"]}>5000+</div>
                        <div className={styles["counter-subtitle"]}>
                            Contracts Processed
                        </div>
                    </div>

                    <div className={styles["counter"]}>
                        <div className={styles["counter-title"]}>98%</div>
                        <div className={styles["counter-subtitle"]}>
                            Faster Contract Review
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSection;
