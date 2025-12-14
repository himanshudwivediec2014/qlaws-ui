import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles["navbar-wrapper"]}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <div className={styles["logo-img"]} />
          <h6 className={styles["logo-text"]}>Laws.ai</h6>
        </div>

        <ul className={styles["nav-links"]}>
          <li>Features</li>
          <li>About</li>
          <li>Testimonial</li>
          <li>Faq</li>
        </ul>

        <button className={styles["cta-button"]}>Book a demo</button>
      </div>
    </nav>
  );
};

export default Navbar;
