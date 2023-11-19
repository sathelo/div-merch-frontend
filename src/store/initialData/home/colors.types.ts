import { EQueriesColors } from "@/utils/query/useColorsRouteQuery";
import { EColorPickerType } from "@/components/ui/ColorPickerComponent/ColorPickerComponent.enums";

export interface IColorWithoutStyleAndId {
  type?: EColorPickerType;
}

interface IColor extends IColorWithoutStyleAndId {
  typeQuery: EQueriesColors;
  bg?: string;
}

export type TColors = IColor[];
