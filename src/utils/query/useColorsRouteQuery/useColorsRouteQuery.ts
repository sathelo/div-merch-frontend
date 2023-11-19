import { useRouteQuery } from "vue-use-route-query";

import { EQueriesColors } from "./useColorsRouteQuery.types";

export function useColorsRouteQuery() {
  return useRouteQuery<Array<EQueriesColors>>(
    "colors",
    [],
    {
      fromQuery(value) {
        return value
          .split(",")
          .filter((v) =>
            [
              EQueriesColors.COLOR1,
              EQueriesColors.COLOR2,
              EQueriesColors.COLOR3,
              EQueriesColors.COLOR4,
              EQueriesColors.COLOR5,
              EQueriesColors.COLOR6,
              EQueriesColors.COLOR7,
              EQueriesColors.COLOR8,
              EQueriesColors.COLOR9,
              EQueriesColors.COLOR10,
              EQueriesColors.COLOR11,
              EQueriesColors.COLOR12,
              EQueriesColors.COLOR13,
              EQueriesColors.COLOR14,
              EQueriesColors.COLOR15,
              EQueriesColors.COLOR16,
              EQueriesColors.COLOR17,
              EQueriesColors.COLOR18,
              EQueriesColors.COLOR19,
              EQueriesColors.COLOR20,
              EQueriesColors.COLOR21,
              EQueriesColors.COLOR22,
              EQueriesColors.COLOR23,
            ].includes(v as EQueriesColors),
          ) as Array<EQueriesColors>;
      },
      toQuery(value) {
        return value?.length ? value.join(",") : undefined;
      },
    },
    undefined,
  );
}
