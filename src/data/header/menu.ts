import { Routes } from "@/router/routes.enums";

import type { Menu } from "@/data/header/menu.types";

export const menu: Menu = [
  {
    title: "Главная",
    namePath: Routes.home,
  },
  {
    title: "Коллекции",
    namePath: Routes.collections,
  },
  {
    title: "Все товары",
    namePath: Routes.allProducts,
  },
  {
    title: "Категории",
    namePath: Routes.categories,
  },
];
