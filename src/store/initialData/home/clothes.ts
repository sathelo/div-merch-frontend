import { TClothes } from "@/store/initialData/home/clothes.types";

import { EQueriesClothes } from "@/store/initialData/home/clothes.enums";

export const initialClothes: TClothes = [
  {
    img: "/images/male-cloth.png",
    title: "Мужское",
    originalTitle: EQueriesClothes.male,
    query: { cloth: EQueriesClothes.male },
  },
  {
    img: "/images/female-cloth.png",
    title: "Женское",
    originalTitle: EQueriesClothes.female,
    query: { cloth: EQueriesClothes.female },
  },
];
