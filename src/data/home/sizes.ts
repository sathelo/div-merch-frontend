import { ref } from "vue";

import { Sizes } from "@/data/home/sizes.types.ts";

export const sizes = ref<Sizes>([
  { label: "S", isChecked: false },
  { label: "M", isChecked: false },
  { label: "L", isChecked: false },
  { label: "XL", isChecked: false },
  { label: "2XL", isChecked: false },
  { label: "XXL", isChecked: false },
  { label: "3XL", isChecked: false },
]);
