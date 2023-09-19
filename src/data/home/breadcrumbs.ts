import { Routes } from "@/router/routes.enums";

import type { Breadcrumbs } from "@/data/home/breadcrumbs.types.ts";

export const breadcrumbs: Breadcrumbs = [
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
