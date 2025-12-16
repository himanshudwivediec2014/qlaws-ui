import React from "react";
import styles from "./TestimonialCard.module.css";

export type Testimonial = {
    id?: string;
    text: string;
    avatar?: string;
    name: string;
    designation?: string;
};

const TestimonialCard: React.FC<Testimonial> = ({
    text,
    avatar,
    name,
    designation,
}) => {
    return (
        <article className={styles.card}>
            <blockquote className={styles.quote}>"{text}"</blockquote>

            <div className={styles.meta}>
                <div className={styles.avatarWrap}>
                    {avatar ? (
                        <img
                            className={styles.avatar}
                            src={avatar}
                            alt={`Avatar of ${name}`}
                        />
                    ) : (
                        <div className={styles.avatarPlaceholder} aria-hidden>
                            {name?.charAt(0)?.toUpperCase() ?? "U"}
                        </div>
                    )}
                </div>

                <div className={styles.person}>
                    <div className={styles.name}>{name}</div>
                    {designation && (
                        <div className={styles.designation}>{designation}</div>
                    )}
                </div>
            </div>
        </article>
    );
};

export default TestimonialCard;
