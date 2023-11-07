import { EColorPickerType } from "@/components/ui/ColorPickerComponent/ColorPickerComponent.enums";

export interface IColorWithoutStyle {
  isChecked?: boolean;
  type?: EColorPickerType;
}

interface IColor extends IColorWithoutStyle {
  bg?: string;
}

export type TColors = IColor[];
