import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ScrollToTop.module.css";

const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Show button when page is scrolled down and calculate progress
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;

        setScrollProgress(scrollPercent);
        setIsVisible(scrollTop > 300);
    };

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={styles["scroll-to-top"]}>
            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        onClick={scrollToTop}
                        className={styles["scroll-button"]}
                        aria-label="Scroll to top"
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        whileHover={{ 
                            scale: 1.1, 
                            y: -4,
                            transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.9 }}
                    >
                    <svg
                        className={styles["progress-ring"]}
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                    >
                        <circle
                            className={styles["progress-ring-circle-bg"]}
                            cx="30"
                            cy="30"
                            r="26"
                        />
                        <circle
                            className={styles["progress-ring-circle"]}
                            cx="30"
                            cy="30"
                            r="26"
                            style={{
                                strokeDashoffset: 163.36 - (163.36 * scrollProgress) / 100,
                            }}
                        />
                    </svg>
                    <svg
                        className={styles["arrow-icon"]}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 19V5M12 5L5 12M12 5L19 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ScrollToTop;

