import { LocationQueryRaw } from "vue-router";

export type TCloth = {
  img: string;
  title: string;
  query: LocationQueryRaw;
};

export type TClothes = TCloth[];
