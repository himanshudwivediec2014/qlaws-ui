import { motion } from "framer-motion";
import type { CardSmModel } from "../../models/card-sm.model";
import styles from "./Card-sm.module.css";

const CardSm: React.FC<CardSmModel> = ({ text, variant = "info", icon }) => {
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
            className={`${styles["card-content-wrapper"]} p-6 flex justify-start items-center border border-[rgba(235,230,224,1)] rounded-2xl lg:w-[325.33px]`}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            whileHover={{
                y: -4,
                boxShadow: "0px 8px 24px -4px rgba(166,120,89,0.15)",
                transition: { duration: 0.3 },
            }}
        >
            {icon && (
                <motion.div
                    className={`${
                        styles["card-icon"]
                    } ${getVariantBgColor()} w-10 h-10 mr-4 rounded-full flex justify-center items-center`}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5,
                        delay: 0.2,
                        type: "spring",
                        stiffness: 200,
                    }}
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
            <p
                className={`${styles["card-description"]} m-0 font-medium text-base leading-6 text-[rgba(33,36,44,1)] whitespace-normal`}
            >
                {text}
            </p>
        </motion.div>
    );
};

export default CardSm;
