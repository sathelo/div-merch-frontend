import { EColorPickerType } from "@/components/ui/ColorPickerComponent/ColorPickerComponent.enums";

export interface ICColorWithoutStyle {
  isChecked?: boolean;
  type?: EColorPickerType;
}

export interface ICColor extends ICColorWithoutStyle {
  bg?: string;
}

export type ICColors = ICColor[];
