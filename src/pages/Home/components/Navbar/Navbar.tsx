import { motion } from "framer-motion";
import styles from "./NavBar.module.css";
import { useState } from "react";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const closeMenu = () => setIsOpen(false);
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="w-full flex flex-col items-center">
            <motion.nav
                className={`${styles["navbar-wrapper"]} mt-[26px] mb-[55px] sm-nav-width rounded-[7.28px]`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div
                    className={`${styles.navbar} flex items-center justify-between px-[23px] pt-3 pb-2 rounded-[14px]`}
                >
                    <motion.div
                        className={`${styles.logo} w-[135px] h-[35px] flex justify-start items-center cursor-pointer`}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 },
                        }}
                    >
                        <div className={styles["logo-img"]} />
                        <h6
                            className={`${styles["logo-text"]} m-0 font-medium text-[23.9px] leading-none text-primary`}
                        >
                            Laws.ai
                        </h6>
                    </motion.div>

                    <motion.ul
                        className={`${styles["nav-links"]} flex gap-8 list-none m-0 p-0 text-sm text-[#6b6b6b]`}
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.3,
                                },
                            },
                        }}
                    >
                        <motion.li
                            className="cursor-pointer transition-colors duration-200 hover:text-[#111]"
                            variants={{
                                hidden: { opacity: 0, y: -10 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            whileHover={{
                                y: -2,
                                transition: { duration: 0.2 },
                            }}
                            onClick={() => scrollToSection("features")}
                        >
                            Features
                        </motion.li>
                        <motion.li
                            className="cursor-pointer transition-colors duration-200 hover:text-[#111]"
                            variants={{
                                hidden: { opacity: 0, y: -10 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            whileHover={{
                                y: -2,
                                transition: { duration: 0.2 },
                            }}
                            onClick={() => scrollToSection("about")}
                        >
                            About
                        </motion.li>
                        <motion.li
                            className="cursor-pointer transition-colors duration-200 hover:text-[#111]"
                            variants={{
                                hidden: { opacity: 0, y: -10 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            whileHover={{
                                y: -2,
                                transition: { duration: 0.2 },
                            }}
                            onClick={() => scrollToSection("testimonial")}
                        >
                            Testimonial
                        </motion.li>
                        <motion.li
                            className="cursor-pointer transition-colors duration-200 hover:text-[#111]"
                            variants={{
                                hidden: { opacity: 0, y: -10 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            whileHover={{
                                y: -2,
                                transition: { duration: 0.2 },
                            }}
                            onClick={() => scrollToSection("faq")}
                        >
                            Faq
                        </motion.li>
                    </motion.ul>

                    <motion.button
                        className={`${styles["cta-button"]} px-[18px] py-[10px] border-none rounded-lg text-white text-sm font-medium cursor-pointer`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Book a demo
                    </motion.button>
                </div>
            </motion.nav>

            <div
                className={`${styles["mobile-menu"]} ${styles["nav-container"]} sm:flex sm:justify-between md:hidden`}
            >
                <div className={styles["ham-logo"]}></div>

                <button
                    className={`${styles["ham-button"]} ${
                        isOpen ? styles.active : ""
                    }`}
                    onClick={toggleMenu}
                    id="hamburger"
                    aria-label="Menu"
                >
                    <span className={styles["first-ham"]}></span>
                    <span className={styles["second-ham"]}></span>
                </button>

                {/* Mobile Slide Menu  */}
                <div
                    className={`${styles["mobile-overlay"]} ${
                        isOpen ? styles.show : ""
                    }`}
                    id="overlay"
                    onClick={closeMenu}
                ></div>

                <ul
                    className={`${styles["mobile-menu-panel"]} ${
                        isOpen ? styles["show-panel"] : ""
                    }`}
                    id="mobileMenu"
                >
                    <li onClick={() => scrollToSection("features")}>
                        Features
                    </li>
                    <li onClick={() => scrollToSection("about")}>About</li>
                    <li onClick={() => scrollToSection("testimonial")}>
                        Testimonial
                    </li>
                    <li onClick={() => scrollToSection("faq")}>Faq</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
