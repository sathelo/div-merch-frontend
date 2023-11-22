import { LocationQueryRaw } from "vue-router";

export type TCloth = {
  img: string;
  title: string;
  originalTitle: string;
  query: LocationQueryRaw;
};

export type TClothes = TCloth[];
