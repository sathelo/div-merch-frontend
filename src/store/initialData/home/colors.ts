import { EQueriesColors } from "@/utils/query/useColorsRouteQuery";
import { EColorPickerType } from "@/components/ui/ColorPickerComponent/ColorPickerComponent.enums";

import { IColorWithoutStyleAndId } from "@/store/initialData/home/colors.types";
import { TColors } from "@/store/initialData/home/colors.types";

const colorWithoutStyleAndId: IColorWithoutStyleAndId = {
  type: EColorPickerType.low,
};

export const initialColors: TColors = [
  {
    ...colorWithoutStyleAndId,
    bg: "#501599",
    typeQuery: EQueriesColors.COLOR1,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#87ABB7",
    typeQuery: EQueriesColors.COLOR2,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#B0BFCF",
    typeQuery: EQueriesColors.COLOR3,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#450F71",
    typeQuery: EQueriesColors.COLOR4,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#34A0B5",
    typeQuery: EQueriesColors.COLOR5,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#FA1A69",
    typeQuery: EQueriesColors.COLOR6,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#5A9870",
    typeQuery: EQueriesColors.COLOR7,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#9BB471",
    typeQuery: EQueriesColors.COLOR8,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#246704",
    typeQuery: EQueriesColors.COLOR9,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#3C872E",
    typeQuery: EQueriesColors.COLOR10,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#91B372",
    typeQuery: EQueriesColors.COLOR11,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#E5AA6D",
    typeQuery: EQueriesColors.COLOR12,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#F06BB8",
    typeQuery: EQueriesColors.COLOR13,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#D52BD3",
    typeQuery: EQueriesColors.COLOR14,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#86811B",
    typeQuery: EQueriesColors.COLOR15,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#3D9A79",
    typeQuery: EQueriesColors.COLOR16,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#659722",
    typeQuery: EQueriesColors.COLOR17,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#8EC8B5",
    typeQuery: EQueriesColors.COLOR18,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#E8118F",
    typeQuery: EQueriesColors.COLOR19,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#216DC1",
    typeQuery: EQueriesColors.COLOR20,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#9CC171",
    typeQuery: EQueriesColors.COLOR21,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#F7EDAB",
    typeQuery: EQueriesColors.COLOR22,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#000000",
    typeQuery: EQueriesColors.COLOR23,
  },
];
