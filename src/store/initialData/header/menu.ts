import { Routes } from "@/router/routes.enums";

import { TMenu } from "@/store/initialData/header/menu.types";

export const initialMenu: TMenu = [
  {
    title: "Главная",
    originalTitle: Routes.home,
    namePath: Routes.home,
  },
  {
    title: "Коллекции",
    originalTitle: Routes.collections,
    namePath: Routes.collections,
  },
  {
    title: "Все товары",
    originalTitle: Routes.allProducts,
    namePath: Routes.allProducts,
  },
  {
    title: "Категории",
    originalTitle: Routes.categories,
    namePath: Routes.categories,
  },
];
