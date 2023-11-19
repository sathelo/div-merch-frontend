import { EQueriesCategory } from "@/utils/query/useCategoriesRouteQuery";

import { TCategories } from "@/store/initialData/home/categories.types";

export const initialCategories: TCategories = [
  {
    title: "Анораки",
    img: "/categories/1.png",
    query: { category: EQueriesCategory.anoraks },
  },
  {
    title: "Свитшоты",
    img: "/categories/2.png",
    query: { category: EQueriesCategory.sweatshirts },
  },
  {
    title: "Брюки",
    img: "/categories/3.png",
    query: { category: EQueriesCategory.trousers },
  },
  {
    title: "Носки",
    img: "/categories/4.png",
    query: { category: EQueriesCategory.socks },
  },
  {
    title: "Ветровки",
    img: "/categories/5.png",
    query: { category: EQueriesCategory.windbreakers },
  },
  {
    title: "Браслеты",
    img: "/categories/6.png",
    query: { category: EQueriesCategory.bracelets },
  },
];
