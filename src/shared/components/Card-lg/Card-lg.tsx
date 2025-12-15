import { motion } from "framer-motion";
import type { CardLgModel } from "../../models/card-lg.model";
import styles from "./Card-lg.module.css";

const CardLg: React.FC<CardLgModel> = ({ text, title, variant = "info", icon }) => {
  const getVariantBgColor = () => {
    switch (variant) {
      case "danger":
      case "warning":
        return "bg-red-50";
      case "success":
        return "bg-green-50";
      case "info":
      default:
        return "bg-blue-50";
    }
  };

  return (
    <motion.div 
      className={`${styles["card-content-wrapper"]} p-[33px] flex flex-col items-start border border-[rgba(235,230,224,1)] rounded-[20px] w-[270px] h-[237px] bg-white shadow-[0px_4px_24px_-4px_rgba(166,120,89,0.1)]`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ 
        y: -8, 
        boxShadow: "0px 12px 32px -4px rgba(166,120,89,0.2)",
        transition: { duration: 0.3 }
      }}
    >
      {icon && (
        <motion.div 
          className={`${styles["card-icon"]} ${getVariantBgColor()} w-10 h-10 mb-[18px] rounded-full flex justify-center items-center`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <div
            className={styles["icon-holder"]}
            style={{
              backgroundImage: `url(${icon})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
        </motion.div>
      )}
      <h2 className={`${styles["card-title"]} mb-[18px] font-bold text-xl leading-7 text-[rgba(33,36,44,1)]`}>
        {title}
      </h2>
      <p className={`${styles["card-description"]} font-normal text-sm leading-[22.75px] text-[rgba(103,111,126,1)]`}>
        {text}
      </p>
    </motion.div>
  );
};

export default CardLg;
