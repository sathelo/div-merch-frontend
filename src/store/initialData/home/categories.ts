import { EQueriesCategory } from "@/utils/query/useCategoriesRouteQuery";

import { TCategories } from "@/store/initialData/home/categories.types";

export const initialCategories: TCategories = [
  {
    title: "Анораки",
    originalTitle: EQueriesCategory.anoraks,
    img: "/categories/1.png",
    query: { category: EQueriesCategory.anoraks },
  },
  {
    title: "Свитшоты",
    originalTitle: EQueriesCategory.sweatshirts,
    img: "/categories/2.png",
    query: { category: EQueriesCategory.sweatshirts },
  },
  {
    title: "Брюки",
    originalTitle: EQueriesCategory.trousers,
    img: "/categories/3.png",
    query: { category: EQueriesCategory.trousers },
  },
  {
    title: "Носки",
    originalTitle: EQueriesCategory.socks,
    img: "/categories/4.png",
    query: { category: EQueriesCategory.socks },
  },
  {
    title: "Ветровки",
    originalTitle: EQueriesCategory.windbreakers,
    img: "/categories/5.png",
    query: { category: EQueriesCategory.windbreakers },
  },
  {
    title: "Браслеты",
    originalTitle: EQueriesCategory.bracelets,
    img: "/categories/6.png",
    query: { category: EQueriesCategory.bracelets },
  },
  {
    title: "Брелоки",
    originalTitle: EQueriesCategory.keychains,
    img: "/categories/1.png",
    query: { category: EQueriesCategory.keychains },
  },
];
