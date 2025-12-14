import styles from "./Banner.module.css";

const Banner: React.FC = () => {
  return (
    <div className={styles["banner-content-wrapper"]}>
      <div className={styles["sol-txt"]}>
        <h6 className={styles.txt}>Agentic Ai Solutions</h6>
      </div>

      <div className={styles["banner-info"]}>
        <h1 className={styles["banner-text"]}>
          Transform Agentic Legal Drafting with{" "}
          <span className={styles["banner-highlight"]}>QlawsAi</span> 
        </h1>
        <p className={styles["banner-sub-text"]}>
          Transform ai copilots to legal colleagues
          <span>
            qlaws turns firm knowledge and workflow rules into ready to close
            outputs
          </span>
        </p>
      </div>

      <div className={styles["banner-actions"]}>
        <button
          className={`${styles["banner-action-button"]} ${styles["action-button-dark"]}`}
        >
          Get Started
        </button>

        <button
          className={`${styles["banner-action-button"]} ${styles["action-button-light"]}`}
        >
          Book a Demo
        </button>
      </div>

      <div className={styles["banner-overlay"]}>
        <div className={styles.frame}></div>
      </div>
    </div>
  );
};

export default Banner;
