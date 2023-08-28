import { Size } from "@/types/enums/typography.enum";

export interface ICCheckboxProps {
  index: number;
  isChecked?: boolean;
  size?: Size;
  disabled?: boolean;
}
