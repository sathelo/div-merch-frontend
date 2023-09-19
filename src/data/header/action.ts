import { Routes } from "@/router/routes.enums";

import type { Actions } from "@/data/header/action.types";

export const actions: Actions = [
  {
    iconUrl: "/icons/heart.svg",
    namePath: Routes.favorites,
    name: "heart",
  },
  {
    iconUrl: "/icons/search.svg",
    namePath: Routes.search,
    name: "search",
  },
  {
    iconUrl: "/icons/user.svg",
    namePath: Routes.profile,
    name: "profile",
  },
  {
    iconUrl: "/icons/basket.svg",
    namePath: Routes.basket,
    name: "basket",
  },
];
