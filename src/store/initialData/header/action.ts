import { Routes } from "@/router/routes.enums";

import { TActions } from "@/store/initialData/header/action.types";

export const initialActions: TActions = [
  {
    iconUrl: "/icons/heart-small.svg",
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
