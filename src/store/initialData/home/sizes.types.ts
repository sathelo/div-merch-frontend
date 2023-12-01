import { EQueriesSizes } from "@/utils/query/useSizesRouteQuery";

type TSize = {
  type: EQueriesSizes;
  label: string;
};

export type TSizes = TSize[];
