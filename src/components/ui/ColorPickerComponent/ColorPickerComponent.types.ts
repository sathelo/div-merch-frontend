import { EColorPickerType } from "@/components/ui/ColorPickerComponent/ColorPickerComponent.enums";

export interface ICColorProps {
  index?: number;
  type?: EColorPickerType;
  bg?: string;
}

export type ICColorsProps = ICColorProps[];
