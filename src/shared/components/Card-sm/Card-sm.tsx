import type { CardSmModel } from "../../models/card-sm.model";
import styles from "./Card-sm.module.css";

const CardSm: React.FC<CardSmModel> = ({ text, variant, icon }) => {
  return (
    <div className={styles["card-content-wrapper"]}>
      <div
        className={`${styles["card-icon"]} ${variant}`}
        style={{
          backgroundColor:
            variant === "danger"
              ? "rgba(254, 242, 242, 1)"
              : variant === "warning"
              ? "rgba(254, 242, 242, 1)"
              : "rgba(254, 242, 242)",
        }}
      >
        <div
          className={styles["icon-holder"]}
          style={{
            backgroundImage: `url(${icon})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      <p className={styles["card-description"]}>{text}</p>
    </div>
  );
};

export default CardSm;
