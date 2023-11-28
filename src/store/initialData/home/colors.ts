import { EQueriesColors } from "@/utils/query/useColorsRouteQuery";
import { EColorPickerType } from "@/components/ui/ColorPickerComponent/ColorPickerComponent.enums";

import { IColorWithoutStyleAndId } from "@/store/initialData/home/colors.types";
import { TColors } from "@/store/initialData/home/colors.types";

const colorWithoutStyleAndId: IColorWithoutStyleAndId = {
  contrastType: EColorPickerType.low,
};

export const initialColors: TColors = [
  {
    ...colorWithoutStyleAndId,
    bg: "#501599",
    type: EQueriesColors.COLOR1,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#87ABB7",
    type: EQueriesColors.COLOR2,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#B0BFCF",
    type: EQueriesColors.COLOR3,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#450F71",
    type: EQueriesColors.COLOR4,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#34A0B5",
    type: EQueriesColors.COLOR5,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#FA1A69",
    type: EQueriesColors.COLOR6,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#5A9870",
    type: EQueriesColors.COLOR7,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#9BB471",
    type: EQueriesColors.COLOR8,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#246704",
    type: EQueriesColors.COLOR9,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#3C872E",
    type: EQueriesColors.COLOR10,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#91B372",
    type: EQueriesColors.COLOR11,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#E5AA6D",
    type: EQueriesColors.COLOR12,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#F06BB8",
    type: EQueriesColors.COLOR13,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#D52BD3",
    type: EQueriesColors.COLOR14,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#86811B",
    type: EQueriesColors.COLOR15,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#3D9A79",
    type: EQueriesColors.COLOR16,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#659722",
    type: EQueriesColors.COLOR17,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#8EC8B5",
    type: EQueriesColors.COLOR18,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#E8118F",
    type: EQueriesColors.COLOR19,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#216DC1",
    type: EQueriesColors.COLOR20,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#9CC171",
    type: EQueriesColors.COLOR21,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#F7EDAB",
    type: EQueriesColors.COLOR22,
  },
  {
    ...colorWithoutStyleAndId,
    bg: "#000000",
    type: EQueriesColors.COLOR23,
  },
];
