import { createRouter, createWebHistory } from "vue-router";

import BaseLayout from "@/layouts/BaseLayout.vue";
import HomePage from "@/pages/HomePage.vue";
import CategoriesPage from "@/pages/CategoriesPage.vue";
import BasketPage from "@/pages/BasketPage.vue";
import ProductPage from "@/pages/ProductPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";

import { Routes } from "@/router/routes.enums";

import { NamePath } from "@/router/routes.types";

export function navigateToRoute(namePath?: NamePath) {
  if (!namePath) return router.push({ name: Routes.home });

  const isRouteExists = router
    .getRoutes()
    .some((route) => route.name === namePath);

  return isRouteExists
    ? router.push({ name: namePath })
    : router.push(`/${String(namePath)}`);
}

const routes = [
  {
    path: "/",
    component: BaseLayout,
    children: [
      {
        path: "",
        name: Routes.home,
        component: HomePage,
      },
      {
        path: "categories",
        name: Routes.categories,
        component: CategoriesPage,
        children: [
          {
            path: ":id",
            name: Routes.categories,
            component: CategoriesPage,
          },
        ],
      },
      {
        path: "product/:id",
        name: Routes.product,
        component: ProductPage,
      },
      {
        path: "basket",
        name: Routes.basket,
        component: BasketPage,
      },
      {
        path: "/:pathMatch(.*)*",
        name: Routes.notFound,
        component: NotFoundPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0, behavior: "instant" };
  },
});

export default router;
