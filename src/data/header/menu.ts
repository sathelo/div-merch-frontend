import { Routes } from "@/router/routes.types";
import { Menu } from "./menu.types";

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
