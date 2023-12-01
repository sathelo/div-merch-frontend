import { EColorPickerType } from "@/components/ui/ColorPickerComponent/ColorPickerComponent.enums";
import { EQueriesColors } from "@/utils/query/useColorsRouteQuery";

export interface IProductCardInfoColorWithoutStyle {
  isChecked?: boolean;
  contrastType?: EColorPickerType;
  type: EQueriesColors;
}

export interface IProductCardInfoColor
  extends IProductCardInfoColorWithoutStyle {
  bg?: string;
}

export type TProductCardInfoColors = IProductCardInfoColor[];
