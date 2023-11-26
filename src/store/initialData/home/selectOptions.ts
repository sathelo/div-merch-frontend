import { EQueriesSortType } from "@/utils/query/useSortTypeRouteQuery/useSortTypeRouteQuery.types";
import { TOption } from "@/components/ui/DropdownComponent/DropdownComponent.types";

export const initialSelectOptions: TOption<EQueriesSortType>[] = [
  {
    value: "Сначала новинки",
    id: EQueriesSortType.newItemsFirst,
  },
  {
    value: "Сначала старые",
    id: EQueriesSortType.oldItemsFirst,
  },
  {
    value: "По возрастанию цены",
    id: EQueriesSortType.byPriceAsc,
  },
  {
    value: "По убыванию цены",
    id: EQueriesSortType.byPriceDesc,
  },
];
