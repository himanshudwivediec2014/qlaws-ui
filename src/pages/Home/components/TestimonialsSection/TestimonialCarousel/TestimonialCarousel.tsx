import React, { useEffect, useRef, useState } from "react";
import styles from "./TestimonialCarousel.module.css";
import TestimonialCard, {
    type Testimonial,
} from "../TestimonialCard/TestimonialCard";

export type TestimonialCarouselProps = {
    testimonials: Testimonial[];
    autoplay?: boolean;
    autoplayInterval?: number; // ms
    showNav?: boolean;
    showDots?: boolean;
    className?: string;
    // initial index if you want to start at a different slide
    initialIndex?: number;
};

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
    testimonials,
    autoplay = true,
    autoplayInterval = 6000,
    showNav = true,
    showDots = true,
    className,
    initialIndex = 0,
}) => {
    const count = testimonials.length;
    const [index, setIndex] = useState(() =>
        Math.max(0, Math.min(initialIndex, Math.max(0, count - 1)))
    );
    const [isPaused, setIsPaused] = useState(false);
    const autoplayRef = useRef<number | null>(null);

    // Touch/swipe
    const touchStartX = useRef<number | null>(null);
    const touchDeltaX = useRef<number>(0);

    useEffect(() => {
        // Autoplay management
        if (!autoplay || isPaused || count <= 1) return;

        autoplayRef.current = window.setInterval(() => {
            setIndex((i) => (i + 1) % count);
        }, autoplayInterval);

        return () => {
            if (autoplayRef.current) {
                clearInterval(autoplayRef.current);
                autoplayRef.current = null;
            }
        };
    }, [autoplay, autoplayInterval, isPaused, count]);

    useEffect(() => {
        // Pause when tab is hidden
        const onVisibility = () => {
            setIsPaused(document.hidden);
        };
        document.addEventListener("visibilitychange", onVisibility);
        return () =>
            document.removeEventListener("visibilitychange", onVisibility);
    }, []);

    const goTo = (i: number) => {
        setIndex(((i % count) + count) % count);
    };
    const prev = () => goTo(index - 1);
    const next = () => goTo(index + 1);

    // Keyboard nav for accessibility
    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
    };

    // Touch handlers
    const onTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        touchDeltaX.current = 0;
        setIsPaused(true);
    };
    const onTouchMove = (e: React.TouchEvent) => {
        if (touchStartX.current == null) return;
        touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
    };
    const onTouchEnd = () => {
        const threshold = 40;
        if (touchDeltaX.current > threshold) prev();
        else if (touchDeltaX.current < -threshold) next();
        touchStartX.current = null;
        touchDeltaX.current = 0;
        setIsPaused(false);
    };

    if (count === 0) return null;

    return (
        <div
            className={`${styles.carousel} ${className ?? ""}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            onKeyDown={onKeyDown}
            role="region"
            aria-roledescription="carousel"
            aria-label="Testimonials"
            tabIndex={0}
        >
            {/* Track: slides are full width; translateX moves active slide into view */}
            <div
                className={styles.track}
                style={{ transform: `translateX(-${index * 100}%)` }}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                {testimonials.map((t, i) => (
                    <div
                        className={styles.slide}
                        key={t.id ?? `${i}-${t.name}`}
                        aria-hidden={i !== index}
                        aria-roledescription="slide"
                        aria-label={`${i + 1} of ${count}`}
                    >
                        <TestimonialCard {...t} />
                    </div>
                ))}
            </div>

            {showNav && count > 1 && (
                <>
                    <button
                        className={`${styles.nav} ${styles.prev}`}
                        onClick={prev}
                        aria-label="Previous testimonial"
                    >
                        ‹
                    </button>

                    <button
                        className={`${styles.nav} ${styles.next}`}
                        onClick={next}
                        aria-label="Next testimonial"
                    >
                        ›
                    </button>
                </>
            )}

            {showDots && count > 1 && (
                <div
                    className={styles.dots}
                    role="tablist"
                    aria-label="Testimonials dots"
                >
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            className={`${styles.dot} ${
                                i === index ? styles.activeDot : ""
                            }`}
                            onClick={() => goTo(i)}
                            aria-label={`Go to testimonial ${i + 1}`}
                            aria-pressed={i === index}
                            role="tab"
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TestimonialCarousel;
