import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log("Newsletter subscription:", email);
        setEmail("");
    };

    return (
        <div className={`${styles["footer-wrapper"]} flex flex-col items-center`}>
            {/* Call-to-Action Section */}
            <motion.div 
                className={`${styles["cta-section"]} flex flex-col items-center`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <motion.h2 
                    className={`${styles["cta-title"]} mt-6 font-semibold leading-[52px] tracking-normal align-middle text-center`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Get started with Qlaws today
                </motion.h2>
                <motion.p 
                    className="font-normal text-base leading-[26px] tracking-normal text-center align-middle mt-4 text-[#555555]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    AI tools built for modern legal professionals—secure, precise, and powerful. <br/>Streamline drafting, summarization, and compliance with intelligent features designed <br/> for today's legal workflow.
                </motion.p>
                <motion.div 
                    className={`${styles["cta-buttons"]} flex justify-center items-center gap-4 mt-6`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <motion.button
                        className={`${styles["cta-button"]} ${styles["cta-button-dark"]} w-[153px] h-[40px] rounded-[6px] font-medium text-[15.1px] leading-[19.36px] tracking-normal text-white align-middle text-center`}
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Book a Demo
                    </motion.button>
                    <motion.button
                        className={`${styles["cta-button"]} ${styles["cta-button-light"]} text-center`}
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contact us
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Footer Section */}
            <motion.div 
                className={styles["footer-section"]}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
            >
                <motion.div 
                    className={styles["footer-content"]}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.2,
                            }
                        }
                    }}
                >
                    {/* Left Column - Company Info & Social Media */}
                    <motion.div 
                        className={`${styles["footer-column"]} flex flex-col`}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                        }}
                    >
                        <h2 className={styles["footer-logo"]}>QLaws.ai</h2>
                        <p className={`${styles["footer-address"]} font-normal leading-5 tracking-normal align-middle`}>
                            Brooklyn, New York <br/> 11209, US
                        </p>
                        <div className={`${styles["social-icons"]} flex gap-4`}>
                            <motion.a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles["social-icon"]} flex items-center justify-center`}
                                aria-label="Instagram"
                                whileHover={{ scale: 1.15, y: -2, transition: { duration: 0.2 } }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="2"
                                        y="2"
                                        width="20"
                                        height="20"
                                        rx="5"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="4"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                    <circle
                                        cx="17.5"
                                        cy="6.5"
                                        r="1.5"
                                        fill="currentColor"
                                    />
                                </svg>
                            </motion.a>
                            <motion.a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles["social-icon"]} flex items-center justify-center`}
                                aria-label="LinkedIn"
                                whileHover={{ scale: 1.15, y: -2, transition: { duration: 0.2 } }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                    <path
                                        d="M8 11V16M8 8V8.01M12 16V11M16 16V13.5C16 12.12 14.88 11 13.5 11C12.12 11 11 12.12 11 13.5V16"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </motion.a>
                            <motion.a
                                href="https://x.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles["social-icon"]} flex items-center justify-center`}
                                aria-label="X (Twitter)"
                                whileHover={{ scale: 1.15, y: -2, transition: { duration: 0.2 } }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18.244 2.25H21.75L14.11 11.51L22.75 21.75H15.5L9.39 13.99L2.25 21.75H-1.25L6.64 12.01L-1.75 2.25H5.5L11.11 9.49L18.244 2.25ZM17.02 19.77H19.02L7.02 4.25H4.98L17.02 19.77Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </motion.a>
                            <motion.a
                                href="https://medium.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles["social-icon"]} flex items-center justify-center`}
                                aria-label="Medium"
                                whileHover={{ scale: 1.15, y: -2, transition: { duration: 0.2 } }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13 12C13 14.7614 10.7614 17 8 17C5.23858 17 3 14.7614 3 12C3 9.23858 5.23858 7 8 7C10.7614 7 13 9.23858 13 12Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M18 12C18 14.7614 17.1046 17 16 17C14.8954 17 14 14.7614 14 12C14 9.23858 14.8954 7 16 7C17.1046 7 18 9.23858 18 12Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M21 12C21 14.7614 20.5523 17 20 17C19.4477 17 19 14.7614 19 12C19 9.23858 19.4477 7 20 7C20.5523 7 21 9.23858 21 12Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </motion.a>
                            <motion.a
                                href="https://reddit.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles["social-icon"]} flex items-center justify-center`}
                                aria-label="Reddit"
                                whileHover={{ scale: 1.15, y: -2, transition: { duration: 0.2 } }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="9"
                                        cy="13"
                                        r="1.5"
                                        fill="currentColor"
                                    />
                                    <circle
                                        cx="15"
                                        cy="13"
                                        r="1.5"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13.5C17 14.33 16.33 15 15.5 15C14.67 15 14 14.33 14 13.5C14 12.67 14.67 12 15.5 12C16.33 12 17 12.67 17 13.5ZM8.5 15C7.67 15 7 14.33 7 13.5C7 12.67 7.67 12 8.5 12C9.33 12 10 12.67 10 13.5C10 14.33 9.33 15 8.5 15ZM17 10.5C16.58 10.5 16.2 10.35 15.91 10.11C15.35 10.58 14.7 10.9 14 11.05V9.5L16.5 7L14.5 4.5L12 7V9.5C11.3 9.35 10.65 9.03 10.09 8.56C9.8 8.8 9.42 8.95 9 8.95C8.17 8.95 7.5 8.28 7.5 7.45C7.5 6.62 8.17 5.95 9 5.95C9.83 5.95 10.5 6.62 10.5 7.45C10.5 7.67 10.45 7.88 10.36 8.06C11.1 8.7 12.01 9.05 13 9.05C13.99 9.05 14.9 8.7 15.64 8.06C15.55 7.88 15.5 7.67 15.5 7.45C15.5 6.62 16.17 5.95 17 5.95C17.83 5.95 18.5 6.62 18.5 7.45C18.5 8.28 17.83 8.95 17 8.95Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </motion.a>
                        </div>
                        <p className={styles["footer-copyright"]}>
                            © 2025 Qlaws.ai
                        </p>
                    </motion.div>

                    {/* Products Column */}
                    <motion.div 
                        className={`${styles["footer-column"]} flex flex-col`}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                        }}
                    >
                        <h3 className={`${styles["footer-column-title"]} font-medium leading-5 tracking-normal align-middle`}>
                            Products
                        </h3>
                        <ul className={`${styles["footer-links"]} flex flex-col gap-3`}>
                            <li>
                                <motion.a 
                                    href="#ai-drafting" 
                                    className={styles["footer-link"]}
                                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                                >
                                    AI Drafting
                                </motion.a>
                            </li>
                            <li>
                                <motion.a 
                                    href="#ai-vault" 
                                    className={styles["footer-link"]}
                                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                                >
                                    AI vault
                                </motion.a>
                            </li>
                            <li>
                                <motion.a 
                                    href="#ai-summary" 
                                    className={styles["footer-link"]}
                                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                                >
                                    AI Summary
                                </motion.a>
                            </li>
                            <li>
                                <motion.a 
                                    href="#redlining" 
                                    className={styles["footer-link"]}
                                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                                >
                                    Redlining
                                </motion.a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Company Column */}
                    <motion.div 
                        className={`${styles["footer-column"]} flex flex-col`}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                        }}
                    >
                        <h3 className={`${styles["footer-column-title"]} font-medium leading-5 tracking-normal align-middle`}>
                            Company
                        </h3>
                        <ul className={`${styles["footer-links"]} flex flex-col gap-3`}>
                            <li>
                                <motion.a 
                                    href="#about" 
                                    className={styles["footer-link"]}
                                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                                >
                                About us
                                </motion.a>
                            </li>
                            <li>
                                <motion.a 
                                    href="#blog" 
                                    className={styles["footer-link"]}
                                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                                >
                                    Blog
                                </motion.a>
                            </li>
                            <li>
                                <motion.a 
                                    href="#faq" 
                                    className={styles["footer-link"]}
                                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                                >
                                    FAQ
                                </motion.a>
                            </li>
                            <li>
                                <motion.a 
                                    href="#careers" 
                                    className={styles["footer-link"]}
                                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                                >
                                    Careers
                                </motion.a>
                            </li>
                            <li>
                                <motion.a 
                                    href="#pricing" 
                                    className={styles["footer-link"]}
                                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                                >
                                    Pricing
                                </motion.a>
                            </li>
                            <li>
                                <motion.a 
                                    href="#privacy" 
                                    className={styles["footer-link"]}
                                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                                >
                                    Privacy policy
                                </motion.a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Newsletter Column */}
                    <motion.div 
                        className={`${styles["footer-column"]} flex flex-col`}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                        }}
                    >
                        <h3 className={`${styles["footer-column-title"]} font-medium leading-5 tracking-normal align-middle`}>
                            Let's keep in Touch
                        </h3>
                        <p className={styles["newsletter-description"]}>
                            Enter your email to keep in the know with the latest
                            updates from Qlaws.
                        </p>
                        <form
                            onSubmit={handleSubmit}
                            className={`${styles["newsletter-form"]} flex flex-col gap-3`}
                        >
                            <motion.input
                                type="email"
                                placeholder="your@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={styles["newsletter-input"]}
                                required
                                whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
                            />
                            <motion.button
                                type="submit"
                                className={styles["newsletter-submit"]}
                                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Submit
                            </motion.button>
                        </form>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Footer;

