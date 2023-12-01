import { useRouteQuery } from "vue-use-route-query";

import { EQueriesCategory } from "./useCategoriesRouteQuery.types";

export function useCategoriesRouteQuery() {
  return useRouteQuery<Array<EQueriesCategory>>(
    "category",
    [],
    {
      fromQuery(value) {
        return value
          .split(",")
          .filter((v) =>
            [
              EQueriesCategory.anoraks,
              EQueriesCategory.bracelets,
              EQueriesCategory.keychains,
              EQueriesCategory.socks,
              EQueriesCategory.sweatshirts,
              EQueriesCategory.trousers,
              EQueriesCategory.windbreakers,
            ].includes(v as EQueriesCategory),
          ) as Array<EQueriesCategory>;
      },
      toQuery(value) {
        return value?.length ? value.join(",") : undefined;
      },
    },
    undefined,
  );
}
