import { EColorPickerType } from "@/components/ui/ColorPickerComponent/ColorPickerComponent.enums";

export interface IProductCardInfoColorWithoutStyle {
  isChecked?: boolean;
  type?: EColorPickerType;
}

export interface IProductCardInfoColor
  extends IProductCardInfoColorWithoutStyle {
  bg?: string;
}

export type TProductCardInfoColors = IProductCardInfoColor[];
