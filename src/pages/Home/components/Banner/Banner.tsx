import { motion } from "framer-motion";
// import Lottie from "lottie-react";
import styles from "./Banner.module.css";
// import animationData from "../../../../assets/video-animation.json";
import desktopVideo from "../../../../assets/desktop-video.mp4";

const Banner: React.FC = () => {
  // Animation variants for staggered effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <motion.div 
      className={`${styles["banner-content-wrapper"]} flex flex-col items-center`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className={styles["sol-txt"]}
        variants={itemVariants}
        whileHover={{ 
          scale: 1.05,
          borderColor: "rgba(247, 95, 21, 0.5)",
          transition: { duration: 0.3 }
        }}
      >
        <h6 className={`${styles.txt} text-center`}>Agentic Ai Solutions</h6>
      </motion.div>

      <div className={`${styles["banner-info"]} flex flex-col items-center`}>
        <motion.h1 
          className={`${styles["banner-text"]} text-center`}
          variants={itemVariants}
        >
          Transform Agentic Legal Drafting with{" "}
          <motion.span 
            className={styles["banner-highlight"]}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            style={{ display: "inline-block" }}
          >
            QlawsAi
          </motion.span> 
        </motion.h1>
        <motion.p 
          className={`${styles["banner-sub-text"]} text-center`}
          variants={itemVariants}
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
        variants={itemVariants}
      >
        <motion.button
          className={`${styles["banner-action-button"]} ${styles["action-button-dark"]} text-center`}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0px 8px 20px rgba(27, 12, 37, 0.4)",
            transition: { duration: 0.2 } 
          }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>

        <motion.button
          className={`${styles["banner-action-button"]} ${styles["action-button-light"]} text-center`}
          whileHover={{ 
            scale: 1.05,
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            borderColor: "rgba(247, 95, 21, 0.3)",
            transition: { duration: 0.2 } 
          }}
          whileTap={{ scale: 0.95 }}
        >
          Book a Demo
        </motion.button>
      </motion.div>

      <motion.div 
        className={styles["banner-overlay"]}
        variants={itemVariants}
        whileHover={{ 
          y: -5,
          transition: { duration: 0.3 }
        }}
      >
        <div className={styles.frame}>
          {/* Lottie Animation - commented out
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            className={styles["banner-animation"]}
          />
          */}
          <video
            className={styles["banner-video"]}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={desktopVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
