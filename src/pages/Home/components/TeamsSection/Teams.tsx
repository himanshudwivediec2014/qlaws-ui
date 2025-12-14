import styles from "./Teams.module.css";

const TeamsSection: React.FC = () => {
    return (
        <div className={styles["our-team-section"]}>
            <div className={styles["our-team-titel-section"]}>
                <div className={styles["our-team-badge"]}>
                    <h6 className={styles["team-badge-text"]}>Our Team</h6>
                </div>

                <h2 className={styles["our-team-title"]}>
                    Built by a Team from Top Global Companies
                    <b /> & World-Class Institutions
                </h2>

                <h6 className={styles["our-team-subtitle"]}>
                    Our team brings deep expertise in law, AI, engineering and
                    operations through years of
                    <b /> experience at leading organizations.
                </h6>
            </div>
            <div className={styles["team-companies"]}></div>
        </div>
    );
};

export default TeamsSection;
