import { Nav, Menu } from "./menu.types";

const defaultNav: Nav = {
  name: "",
  href: "#",
  target: "_self",
};

export const menu: Menu = [
  {
    ...defaultNav,
    name: "Главная",
  },
  {
    ...defaultNav,
    name: "Коллекции",
  },
  {
    ...defaultNav,
    name: "Все товары",
  },
  {
    ...defaultNav,
    name: "Категории",
  },
];
