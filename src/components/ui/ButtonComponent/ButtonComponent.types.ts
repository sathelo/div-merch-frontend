import { Size } from "@/types/enums/typography.enum";

export enum TypesCButton {
  primary = "primary",
  secondary = "secondary",
  link = "link",
  round = "round",
}

export interface ICButtonProps {
  variant?: TypesCButton;
  size?: Size;
  disabled?: boolean;
}
