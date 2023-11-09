import { EQueriesCategory } from "@/store/initialData/home/categories.enums";

import { TCategories } from "@/store/initialData/home/categories.types";

export const initialCategories: TCategories = [
  {
    title: "Носки",
    img: "/categories/1.png",
    query: { category: EQueriesCategory.socks },
  },
  {
    title: "Толстовки",
    img: "/categories/2.png",
    query: { category: EQueriesCategory.hoodies },
  },
  {
    title: "Куртки",
    img: "/categories/3.png",
    query: { category: EQueriesCategory.jackets },
  },
  {
    title: "Трусы",
    img: "/categories/4.png",
    query: { category: EQueriesCategory.underpants },
  },
  {
    title: "Футболки",
    img: "/categories/5.png",
    query: { category: EQueriesCategory.tShirts },
  },
  {
    title: "Украшения",
    img: "/categories/6.png",
    query: { category: EQueriesCategory.decorations },
  },
];
