export enum TypesCButton {
  primary = "primary",
  secondary = "secondary",
  link = "link",
  round = "round",
}

export interface ICButtonProps {
  variant?: TypesCButton;
  disabled?: boolean;
}
