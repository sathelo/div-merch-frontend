import { useRouteQuery } from "vue-use-route-query";

import { EQueriesCloth } from "./useClothRouteQuery.types";

export function useClothRouteQuery() {
  return useRouteQuery<Array<EQueriesCloth>>(
    "cloth",
    [],
    {
      fromQuery(value) {
        return value
          .split(",")
          .filter((v) =>
            [EQueriesCloth.male, EQueriesCloth.female].includes(
              v as EQueriesCloth,
            ),
          ) as Array<EQueriesCloth>;
      },
      toQuery(value) {
        return value?.length ? value.join(",") : undefined;
      },
    },
    undefined,
  );
}
