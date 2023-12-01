import { EQueriesSizes } from "@/utils/query/useSizesRouteQuery";

export type TProductCardInfoSize = {
  label: string;
  type: EQueriesSizes;
  isChecked: false;
};

export type TProductCardInfoSizes = TProductCardInfoSize[];
