import { ECButtonType } from "@/components/ui/ButtonComponent/ButtonComponent.enums";

export enum ETagButton {
  a = "a",
  btn = "button",
}

export interface ICButtonProps {
  tag?: ETagButton;
  variant?: ECButtonType;
  disabled?: boolean;
  href?: HTMLLinkElement["href"];
  target?: HTMLLinkElement["target"];
}
