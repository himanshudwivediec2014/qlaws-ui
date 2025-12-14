import type { CardLgModel } from "../../models/card-lg.model";
import styles from "./Card-lg.module.css";

const CardLg: React.FC<CardLgModel> = ({ text, title, variant, icon }) => {
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
      <h2 className={styles["card-title"]}>{title}</h2>
      <p className={styles["card-description"]}>{text}</p>
    </div>
  );
};

export default CardLg;
