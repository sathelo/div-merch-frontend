import { LocationQueryRaw } from "vue-router";

export type TCategory = {
  title: string;
  originalTitle: string;
  img: string;
  query: LocationQueryRaw;
};

export type TCategories = TCategory[];
