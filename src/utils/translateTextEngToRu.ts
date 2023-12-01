import { TMenu } from "@/store/initialData/header/menu.types";
import { TCategories } from "@/store/initialData/home/categories.types";
import { TClothes } from "@/store/initialData/home/clothes.types";
import { EQueriesCategory } from "./query/useCategoriesRouteQuery";
import { EQueriesCloth } from "./query/useClothRouteQuery";

export function translateTextEngToRu<
  P extends string | EQueriesCategory[] | EQueriesCloth[],
  T extends TMenu | TCategories | TClothes,
>(originalText: string | Array<P>, arr: T): string | undefined {
  const currentLine = Array.isArray(originalText)
    ? (originalText as string[])
    : originalText.split(",");
  const filteredArrWithText: string[] = [];
  arr.forEach((a) => {
    if (currentLine.includes(a.originalTitle))
      filteredArrWithText.push(a.title);
  });
  return filteredArrWithText.join(",");
}
