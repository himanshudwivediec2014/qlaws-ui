import React from "react";
import CardSm from "../../shared/components/Card-sm/Card-sm";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import styles from "./Home.module.css";
import type { CardSmModel } from "../../shared/models/card-sm.model";
import type { CardLgModel } from "../../shared/models/card-lg.model";
import CardLg from "../../shared/components/Card-lg/Card-lg";

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
  const [cards, setCards] = React.useState([...HomeCardSm]);
  const [solCards, setSolCards] = React.useState([...HomeCardLg]);

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Navbar />

        <Banner />

        <div className={styles["challenge-section"]}>
          <div className={styles["challenge-badge"]}>
            <h6 className={styles["badge-text"]}>The Challenge</h6>
          </div>

          <h2 className={styles["challenge-title"]}>
            The Problem With Today's Legal AI
          </h2>

          <h6 className={styles["challenge-subtitle"]}>
            Traditional copilots break context & fail real-world legal
            workflows.
          </h6>

          <div className={styles["challenge-cards"]}>
            {cards.map((card, index) => (
              <CardSm
                key={index}
                text={card.text}
                variant={card.variant}
                icon={card.icon}
              />
            ))}
          </div>
        </div>

        <div className={styles["solution-section"]}>
          <div className={styles["solution-title-section"]}>
            <div className={styles["solution-badge"]}>
              <h2 className={styles["solution-badge-text"]}>The Solution</h2>
            </div>

            <h2 className={styles["solution-title"]}>How Qlaws Solves This</h2>

            <h6 className={styles["solution-subtitle"]}>
              A next-generation Agentic AI system built for legal teams.
            </h6>
          </div>

          <div className={styles["solution-info-section"]}>
            {solCards.map((solCard, index) => (
              <CardLg
                key={index}
                title={solCard.title}
                text={solCard.text}
                variant={solCard.variant}
                icon={solCard.icon}
              />
            ))}
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default Home;
