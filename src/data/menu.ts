type Nav = {
  name: string;
  href: HTMLLinkElement["href"];
  target: HTMLLinkElement["target"];
};

export type Menu = {
  home: Nav;
  collections: Nav;
  allGoods: Nav;
  categories: Nav;
};

const defaultNav: Nav = {
  name: "default",
  href: "#",
  target: "_self",
};

export const menu: Menu = {
  home: {
    ...defaultNav,
    name: "Главная",
  },
  collections: {
    ...defaultNav,
    name: "Коллекции",
  },
  allGoods: {
    ...defaultNav,
    name: "Все товары",
  },
  categories: {
    ...defaultNav,
    name: "Категории",
  },
};
