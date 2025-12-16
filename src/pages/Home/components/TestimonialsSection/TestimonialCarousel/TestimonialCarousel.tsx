import { useState } from "react";
import styles from "./TestimonialCarousel.module.css";

export type Testimonial = {
    id?: string;
    text: string;
    avatar?: string;
    author: string;
    designation?: string;
};

type Props = {
    testimonials: Testimonial[];
};

export const TestimonialCarousel = ({ testimonials }: Props) => {
    const [active, setActive] = useState(0);

    const prev = () =>
        setActive((p) => (p === 0 ? testimonials.length - 1 : p - 1));
    const next = () =>
        setActive((p) => (p === testimonials.length - 1 ? 0 : p + 1));

    return (
        <div className={styles["carousel-wrapper"]}>
            <button className={`${styles.nav} ${styles.left}`} onClick={prev}>
                ‹
            </button>

            <div className={styles["carousel"]}>
                {testimonials.map((t, index) => {
                    const offset = index - active;

                    return (
                        <div
                            key={index}
                            className={`${styles.card} ${
                                offset === 0 ? styles.active : styles.inactive
                            }`}
                            style={{
                                transform: `translateX(${offset * 5}%)`,
                                zIndex: offset === 0 ? 2 : 1,
                            }}
                        >
                            <p className={styles["quote"]}>“{t.text}”</p>

                            <div className={styles["author"]}>
                                <img src={t.avatar} alt={t.author} />
                                <div className={styles["author-info"]}>
                                    <span className={styles["author-name"]}>
                                        <strong>{t.author}</strong>
                                    </span>
                                    <span className={styles["author-sub-text"]}>
                                        {t.designation}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <button className={`${styles.nav} ${styles.right}`} onClick={next}>
                ›
            </button>
        </div>
    );
};

export default TestimonialCarousel;
