import React from "react";
import CardSm from "../../shared/components/Card-sm/Card-sm";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import styles from "./Home.module.css";
import type { CardSmModel } from "../../shared/models/card-sm.model";
import type { CardLgModel } from "../../shared/models/card-lg.model";
import CardLg from "../../shared/components/Card-lg/Card-lg";
import ToolsSection from "./components/ToolsSection/ToolsSection";
import TeamsSection from "./components/TeamsSection/Teams";
import ChallengesSection from "./components/ChallengesSection/ChallengesSection";
import SolutionsSection from "./components/SolutionsSection/SolutionsSection";
import BenefitsSection from "./components/BenefitsSection/BenefitsSection";

export const HomeCardSm: CardSmModel[] = [
    {
        text: "Existing legal copilots lose context",
        variant: "danger",
        icon: "src/assets/wrong-mark.png",
    },
    {
        text: "AI tools reset at every step",
        variant: "danger",
        icon: "src/assets/wrong-mark.png",
    },
    {
        text: "EReading → Drafting → Review are disconnected",
        variant: "danger",
        icon: "src/assets/wrong-mark.png",
    },
    {
        text: "40–60% of time is spent on drafting",
        variant: "danger",
        icon: "src/assets/timer.png",
    },
    {
        text: "High turnaround time for first draft",
        variant: "danger",
        icon: "src/assets/timer.png",
    },
    {
        text: "Only 2.9 productive hours/day (37% utilization)",
        variant: "danger",
        icon: "src/assets/timer.png",
    },
];

export const HomeCardLg: CardLgModel[] = [
    {
        text: "Agents capture, normalize & synthesize legal data points from multi-sources. Produces ready-to-close drafts with traceability.",
        title: "Contextual Intelligence",
        variant: "warning",
        icon: "src/assets/contextual-intelligence.png",
    },
    {
        text: "Drafting agents assemble 100+ page documents using playbooks & precedents. Agents auto-extract details from multiple sources.",
        title: "Agentic Drafting",
        variant: "warning",
        icon: "src/assets/draft.png",
    },
    {
        text: "Persistent memory, clause-level provenance, agentic execution. Up to 70% cycle-time reduction.",
        title: "Ready-to-Close Outputs",
        variant: "warning",
        icon: "src/assets/output.png",
    },
];

const Home: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <Navbar />

                <Banner />

                <ChallengesSection />

                <SolutionsSection />

                <TeamsSection />

                <ToolsSection />

                <BenefitsSection />
            </div>
        </div>
    );
};

export default Home;
