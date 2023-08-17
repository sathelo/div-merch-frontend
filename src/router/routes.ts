import { createRouter, createWebHistory } from "vue-router";

import BaseLayout from "@/layouts/BaseLayout.vue";
import HomePage from "@/pages/HomePage.vue";
import CollectionsPage from "@/pages/CollectionsPage.vue";
import AllProductsPage from "@/pages/AllProductsPage.vue";
import CategoriesPage from "@/pages/CategoriesPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";

import { Routes } from "./routes.types";

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
        path: "collections",
        name: Routes.collections,
        component: CollectionsPage,
      },
      {
        path: "all-products",
        name: Routes.allProducts,
        component: AllProductsPage,
      },
      {
        path: "categories",
        name: Routes.categories,
        component: CategoriesPage,
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
});

export default router;
