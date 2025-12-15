import { motion } from "framer-motion";
import styles from "./Banner.module.css";

const Banner: React.FC = () => {
  return (
    <div className={`${styles["banner-content-wrapper"]} flex flex-col items-center`}>
      <motion.div 
        className={styles["sol-txt"]}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h6 className={`${styles.txt} text-center`}>Agentic Ai Solutions</h6>
      </motion.div>

      <div className={`${styles["banner-info"]} flex flex-col items-center`}>
        <motion.h1 
          className={`${styles["banner-text"]} text-center`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          Transform Agentic Legal Drafting with{" "}
          <span className={styles["banner-highlight"]}>QlawsAi</span> 
        </motion.h1>
        <motion.p 
          className={`${styles["banner-sub-text"]} text-center`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          Transform ai copilots to legal colleagues
          <span>
            qlaws turns firm knowledge and workflow rules into ready to close
            outputs
          </span>
        </motion.p>
      </div>

      <motion.div 
        className={`${styles["banner-actions"]} flex justify-center items-center`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
      >
        <motion.button
          className={`${styles["banner-action-button"]} ${styles["action-button-dark"]} text-center`}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>

        <motion.button
          className={`${styles["banner-action-button"]} ${styles["action-button-light"]} text-center`}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95 }}
        >
          Book a Demo
        </motion.button>
      </motion.div>

      <motion.div 
        className={styles["banner-overlay"]}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
      >
        <div className={styles.frame}></div>
      </motion.div>
    </div>
  );
};

export default Banner;
