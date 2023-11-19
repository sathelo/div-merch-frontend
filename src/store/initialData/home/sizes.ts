import { EQueriesSizes } from "@/utils/query/useSizesRouteQuery";

import { TSizes } from "@/store/initialData/home/sizes.types";

export const initialSizes: TSizes = [
  { label: "S", type: EQueriesSizes.s },
  { label: "M", type: EQueriesSizes.m },
  { label: "L", type: EQueriesSizes.l },
  { label: "XL", type: EQueriesSizes.xl },
  { label: "2XL", type: EQueriesSizes.twoxl },
  { label: "XXL", type: EQueriesSizes.xxl },
  { label: "3XL", type: EQueriesSizes.threexl },
];
