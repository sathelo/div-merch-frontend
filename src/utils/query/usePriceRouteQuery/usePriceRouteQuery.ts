import { useRouteQuery } from "vue-use-route-query";

export function usePriceRouteQuery(defaultPrices: [number, number]) {
  return useRouteQuery<[number, number]>(
    "price",
    defaultPrices,
    {
      fromQuery(value) {
        if (!value) return defaultPrices;
        const numOne = Number(value.split(",")[0]);
        const numTwo = Number(value.split(",")[1]);
        return [
          Number.isNaN(numOne) ? defaultPrices[0] : numOne,
          Number.isNaN(numTwo) ? defaultPrices[1] : numTwo,
        ];
      },
      toQuery(value) {
        if (!value) return undefined;
        if (value[0] === defaultPrices[0] && value[1] === defaultPrices[1])
          return undefined;
        return value.join(",");
      },
    },
    undefined,
  );
}
