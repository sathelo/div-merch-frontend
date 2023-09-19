import { EColorPickerType } from "@/components/ui/ColorPickerComponent/ColorPickerComponent.enums";

export interface ICColorProps {
  type?: EColorPickerType;
  bg?: string;
  modelValue?: boolean;
}

export type ICColorsProps = ICColorProps[];
