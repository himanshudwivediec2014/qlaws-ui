export interface CardSmModel {
  text: string;
  variant?: Variant;
  icon?: string;
}

export type Variant = "warning" | "danger" | "info" | "success";
