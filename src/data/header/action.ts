import type { Actions, Action } from "@/data/header/action.types";

const defaultAction: Action = {
  iconUrl: "",
  href: "#",
  target: "_self",
};

export const actions: Actions = [
  {
    ...defaultAction,
    iconUrl: "/icons/heart.svg",
  },
  {
    ...defaultAction,
    iconUrl: "/icons/search.svg",
  },
  {
    ...defaultAction,
    iconUrl: "/icons/user.svg",
  },
  {
    ...defaultAction,
    iconUrl: "/icons/basket.svg",
  },
];
