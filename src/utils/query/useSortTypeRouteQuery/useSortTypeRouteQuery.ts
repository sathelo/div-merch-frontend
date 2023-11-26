import { useRouteQuery } from "vue-use-route-query";

import { EQueriesSortType } from "./useSortTypeRouteQuery.types";

export function useSortTypeRouteQuery(sortType: EQueriesSortType) {
  return useRouteQuery<EQueriesSortType>(
    "sortType",
    sortType,
    {
      fromQuery(value: EQueriesSortType) {
        return value ? value : undefined;
      },
      toQuery(value) {
        return value ? value : undefined;
      },
    },
    undefined,
  );
}
