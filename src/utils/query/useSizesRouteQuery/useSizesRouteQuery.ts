import { useRouteQuery } from "vue-use-route-query";

import { EQueriesSizes } from "./useSizesRouteQuery.types";

export function useSizesRouteQuery() {
  return useRouteQuery<Array<EQueriesSizes>>(
    "sizes",
    [],
    {
      fromQuery(value) {
        return value
          .split(",")
          .filter((v) =>
            [
              EQueriesSizes.s,
              EQueriesSizes.m,
              EQueriesSizes.l,
              EQueriesSizes.xl,
              EQueriesSizes.twoxl,
              EQueriesSizes.xxl,
              EQueriesSizes.threexl,
            ].includes(v as EQueriesSizes),
          ) as Array<EQueriesSizes>;
      },
      toQuery(value) {
        return value?.length ? value.join(",") : undefined;
      },
    },
    undefined,
  );
}
