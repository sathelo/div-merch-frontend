type Nav = {
  name: string;
  href?: HTMLLinkElement["href"];
  target?: HTMLLinkElement["target"];
};

type Action = {
  iconUrl: string;
  href?: HTMLLinkElement["href"];
  target?: HTMLLinkElement["target"];
};

export type Menu = {
  home: Nav;
  collections: Nav;
  allGoods: Nav;
  categories: Nav;
};

export type Actions = {
  favorite: Action;
  search: Action;
  user: Action;
  shop: Action;
};

const defaultNav: Nav = {
  name: "",
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

const defaultAction: Action = {
  iconUrl: "",
  href: "#",
  target: "_self",
};

export const actions: Actions = {
  favorite: {
    ...defaultAction,
    iconUrl: "/icons/heart.svg",
  },
  search: {
    ...defaultAction,
    iconUrl: "/icons/search.svg",
  },
  user: {
    ...defaultAction,
    iconUrl: "/icons/user.svg",
  },
  shop: {
    ...defaultAction,
    iconUrl: "/icons/basket.svg",
  },
};
