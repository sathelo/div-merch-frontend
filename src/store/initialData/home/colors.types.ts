import { EQueriesColors } from "@/utils/query/useColorsRouteQuery";
import { EColorPickerType } from "@/components/ui/ColorPickerComponent/ColorPickerComponent.enums";

export interface IColorWithoutStyleAndId {
  contrastType?: EColorPickerType;
}

interface IColor extends IColorWithoutStyleAndId {
  type: EQueriesColors;
  bg?: string;
}

export type TColors = IColor[];
