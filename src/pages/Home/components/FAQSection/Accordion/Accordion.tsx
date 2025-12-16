// src/components/Accordion/Accordion.tsx
import React, { useEffect, useRef, useState } from "react";

export type AccordionProps = {
    id?: string;
    title: string;
    description: string;
    isOpen?: boolean;
    onToggle?: (id?: string) => void;
};

const Accordion: React.FC<AccordionProps> = ({
    id,
    title,
    description,
    isOpen = false,
    onToggle,
}) => {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [maxHeight, setMaxHeight] = useState<string>("0px");

    useEffect(() => {
        const el = contentRef.current;
        if (!el) return;
        if (isOpen) setMaxHeight(`${el.scrollHeight}px`);
        else setMaxHeight("0px");
    }, [isOpen, description]);

    useEffect(() => {
        const el = contentRef.current;
        if (!el || typeof ResizeObserver === "undefined") return;
        const ro = new ResizeObserver(() => {
            if (isOpen && el) setMaxHeight(`${el.scrollHeight}px`);
        });
        ro.observe(el);
        return () => ro.disconnect();
    }, [isOpen]);

    const handleToggle = () => onToggle?.(id);
    const onKeyDown: React.KeyboardEventHandler = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleToggle();
        }
    };

    return (
        <div className="w-full">
            <div
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                aria-controls={id ? `${id}-content` : undefined}
                onClick={handleToggle}
                onKeyDown={onKeyDown}
                className="flex items-center justify-between bg-gray-100 rounded-xl px-6 py-5 cursor-pointer select-none"
            >
                <h3 className="text-lg font-semibold text-[#1f1230]">
                    {title}
                </h3>
                <div className="w-9 h-9 flex items-center justify-center rounded-full">
                    <svg
                        className={`w-5 h-5 text-[#1f1230] transform ${
                            isOpen ? "rotate-45" : "rotate-0"
                        } transition-transform`}
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M12 5v14"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <path
                            d="M5 12h14"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
            </div>

            <div
                id={id ? `${id}-content` : undefined}
                ref={contentRef}
                className="overflow-hidden transition-[max-height] duration-300"
                style={{ maxHeight }}
                aria-hidden={!isOpen}
            >
                <div className="bg-white mt-3 rounded-lg p-5 text-sm text-gray-600 shadow">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
