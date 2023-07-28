import { type RouteLocationRaw } from "vue-router";

type Crumb = {
  text: string;
  path?: RouteLocationRaw;
};

export type Breadcrumbs = {
  testCrumb1: Crumb;
  testCrumb2: Crumb;
  testCrumb3: Crumb;
};

export const breadcrumbs: Breadcrumbs = {
  testCrumb1: {
    text: "Мужское",
  },
  testCrumb2: {
    text: "Категории",
  },
  testCrumb3: {
    text: "Носки",
  },
};
