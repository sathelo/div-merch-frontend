import { ref } from "vue";

import { EColorPickerType } from "@/components/ui/ColorPickerComponent/ColorPickerComponent.enums";

import { ICColorWithoutStyle } from "@/data/home/colors.types";
import type { ICColors } from "@/data/home/colors.types";

const colorWithoutStyle: ICColorWithoutStyle = {
  type: EColorPickerType.low,
  isChecked: false,
};

export const colors = ref<ICColors>([
  {
    ...colorWithoutStyle,
    bg: "#501599",
  },
  {
    ...colorWithoutStyle,
    bg: "#87ABB7",
  },
  {
    ...colorWithoutStyle,
    bg: "#B0BFCF",
  },
  {
    ...colorWithoutStyle,
    bg: "#450F71",
  },
  {
    ...colorWithoutStyle,
    bg: "#34A0B5",
  },
  {
    ...colorWithoutStyle,
    bg: "#FA1A69",
  },
  {
    ...colorWithoutStyle,
    bg: "#5A9870",
  },
  {
    ...colorWithoutStyle,
    bg: "#9BB471",
  },
  {
    ...colorWithoutStyle,
    bg: "#246704",
  },
  {
    ...colorWithoutStyle,
    bg: "#3C872E",
  },
  {
    ...colorWithoutStyle,
    bg: "#91B372",
  },
  {
    ...colorWithoutStyle,
    bg: "#E5AA6D",
  },
  {
    ...colorWithoutStyle,
    bg: "#F06BB8",
  },
  {
    ...colorWithoutStyle,
    bg: "#D52BD3",
  },
  {
    ...colorWithoutStyle,
    bg: "#86811B",
  },
  {
    ...colorWithoutStyle,
    bg: "#3D9A79",
  },
  {
    ...colorWithoutStyle,
    bg: "#659722",
  },
  {
    ...colorWithoutStyle,
    bg: "#8EC8B5",
  },
  {
    ...colorWithoutStyle,
    bg: "#E8118F",
  },
  {
    ...colorWithoutStyle,
    bg: "#216DC1",
  },
  {
    ...colorWithoutStyle,
    bg: "#9CC171",
  },
  {
    ...colorWithoutStyle,
    bg: "#F7EDAB",
  },
  {
    ...colorWithoutStyle,
    bg: "#000000",
  },
]);
