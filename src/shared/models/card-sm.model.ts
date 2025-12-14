import React from "react";

export interface CardSmModel {
  text: string;
  variant?: Variant;
  icon?: React.ReactNode;
}

export type Variant = "warning" | "danger" | "info" | "success";
