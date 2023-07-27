type Action = {
  iconUrl: string;
  href: HTMLLinkElement["href"];
  target: HTMLLinkElement["target"];
};

type Actions = {
  search: Action;
  shop: Action;
  user: Action;
};

const defaultAction: Action = {
  iconUrl: "/icons/default.svg",
  href: "#",
  target: "_self",
};

export const actions: Actions = {
  search: {
    ...defaultAction,
    iconUrl: "/icons/search.svg",
  },
  shop: {
    ...defaultAction,
    iconUrl: "/icons/shop.svg",
  },
  user: {
    ...defaultAction,
    iconUrl: "/icons/user.svg",
  },
};
