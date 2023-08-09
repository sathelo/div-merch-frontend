type Action = {
  iconUrl: string;
  href?: HTMLLinkElement["href"];
  target?: HTMLLinkElement["target"];
};

export type Actions = {
  favorite: Action;
  search: Action;
  user: Action;
  shop: Action;
};

const defaultAction: Action = {
  iconUrl: "/icons/default.svg",
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
    iconUrl: "/icons/shop.svg",
  },
};
