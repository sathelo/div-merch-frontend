import { EColorPickerType } from "@/components/ui/ColorPickerComponent/ColorPickerComponent.enums";

export interface ICColorProps<T extends boolean | unknown[]> {
  id?: string;
  type?: EColorPickerType;
  bg?: string;
  modelValue?: T;
}
