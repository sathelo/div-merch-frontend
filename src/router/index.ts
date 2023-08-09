import { createRouter, createWebHistory } from "vue-router";
import BaseLayout from "@/layouts/BaseLayout.vue";
import Home from "@/pages/Home.vue";
import NotFound from "@/pages/NotFound.vue";

/**
 * @readonly
 * @property {string} home "home"
 * @property {string} notFound "notFound"
 */
export enum Routes {
  home = "home",
  notFound = "notFound",
}

const routes = [
  {
    path: "/",
    component: BaseLayout,
    children: [
      {
        path: "",
        name: Routes.home,
        component: Home,
      },
      {
        path: "/:pathMatch(.*)*",
        name: Routes.notFound,
        component: NotFound,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
