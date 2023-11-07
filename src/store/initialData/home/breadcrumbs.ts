import { Routes } from "@/router/routes.enums";

import { TBreadcrumbs } from "@/store/initialData/home/breadcrumbs.types";

export const initialBreadcrumbs: TBreadcrumbs = [
  {
    name: "notFound",
    path: Routes.notFound,
  },
  {
    name: "collections",
    path: Routes.collections,
  },
  {
    name: "allProducts",
    path: Routes.allProducts,
  },
  {
    name: "gohome",
    path: Routes.home,
  },
];
