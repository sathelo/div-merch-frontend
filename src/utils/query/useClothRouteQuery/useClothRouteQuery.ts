import { useRouteQuery } from "vue-use-route-query";

import { EQueriesCloth } from "./useClothRouteQuery.types";

export function useClothRouteQuery(cloth: EQueriesCloth) {
  return useRouteQuery<boolean>(
    "cloth",
    false,
    {
      fromQuery(value) {
        return value === cloth;
      },
      toQuery(value) {
        return value ? cloth : undefined;
      },
    },
    undefined,
  );
}
