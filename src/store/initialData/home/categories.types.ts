import { LocationQueryRaw } from "vue-router";

export type TCategory = {
  title: string;
  img: string;
  query: LocationQueryRaw;
};

export type TCategories = TCategory[];
