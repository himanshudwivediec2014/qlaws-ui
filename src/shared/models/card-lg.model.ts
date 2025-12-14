import React from "react";
import type { Variant } from "./card-sm.model";

export interface CardLgModel {
  text: string;
  title: string;
  variant?: Variant;
  icon?: React.ReactNode;
}
