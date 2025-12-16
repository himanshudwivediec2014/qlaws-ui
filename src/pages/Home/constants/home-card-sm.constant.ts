import type { CardSmModel } from "../../../shared/models/card-sm.model";
import wrongMarkIcon from "../../../assets/wrong-mark.png";
import timerIcon from "../../../assets/timer.png";

export const HOME_CARD_SM: CardSmModel[] = [
  {
    text: "Existing legal copilots lose context",
    variant: "danger",
    icon: wrongMarkIcon,
  },
  {
    text: "AI tools reset at every step",
    variant: "danger",
    icon: wrongMarkIcon,
  },
  {
    text: "EReading → Drafting → Review are disconnected",
    variant: "danger",
    icon: wrongMarkIcon,
  },
  {
    text: "40–60% of time is spent on drafting",
    variant: "danger",
    icon: timerIcon,
  },
  {
    text: "High turnaround time for first draft",
    variant: "danger",
    icon: timerIcon,
  },
  {
    text: "Only 2.9 productive hours/day (37% utilization)",
    variant: "danger",
    icon: timerIcon,
  },
];

