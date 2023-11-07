import { Routes } from "@/router/routes.enums";

import { TMenu } from "@/store/initialData/header/menu.types";

export const initialMenu: TMenu = [
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
