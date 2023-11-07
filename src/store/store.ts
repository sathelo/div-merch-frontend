import { ref } from "vue";
import { defineStore } from "pinia";

import { initialActions } from "@/store/initialData/header/action";
import { initialMenu } from "@/store/initialData/header/menu";
import { initialBreadcrumbs } from "@/store/initialData/home/breadcrumbs";
import { initialCategories } from "@/store/initialData/home/categories";
import { initialClothes } from "@/store/initialData/home/clothes";
import { initialColors } from "@/store/initialData/home/colors";
import { initialProducts } from "@/store/initialData/home/products";
import { initialSelectOptions } from "@/store/initialData/home/selectOptions";
import { initialSizes } from "@/store/initialData/home/sizes";
import { initialSlides } from "@/store/initialData/home/slides";
import { initialFooter } from "@/store/initialData/footer/footer";

import { TActions } from "@/store/initialData/header/action.types";
import { TMenu } from "@/store/initialData/header/menu.types";
import { TBreadcrumbs } from "@/store/initialData/home/breadcrumbs.types";
import { TCategories } from "@/store/initialData/home/categories.types";
import { TClothes } from "@/store/initialData/home/clothes.types";
import { TColors } from "@/store/initialData/home/colors.types";
import { TProducts } from "@/store/initialData/home/products.types";
import { TOptions } from "@/store/initialData/home/selectOptions.types";
import { TSizes } from "@/store/initialData/home/sizes.types";
import { TSlides } from "@/store/initialData/home/slides.types";
import { TFooter } from "@/store/initialData/footer/footer.types";

export const useStore = defineStore("store", () => {
  /* STATE */
  /* data header */
  const actions = ref<TActions>(initialActions);
  const menu = ref<TMenu>(initialMenu);

  /* data main */
  const breadcrumbs = ref<TBreadcrumbs>(initialBreadcrumbs);
  const categories = ref<TCategories>(initialCategories);
  const clothes = ref<TClothes>(initialClothes);
  const colors = ref<TColors>(initialColors);
  const products = ref<TProducts>(initialProducts);
  const selectOptions = ref<TOptions>(initialSelectOptions);
  const sizes = ref<TSizes>(initialSizes);
  const slides = ref<TSlides>(initialSlides);

  /* data footer */
  const footer = ref<TFooter>(initialFooter);

  /* GETTERS */
  function paginationProducts(start?: number, end?: number) {
    return products.value.slice(start, end);
  }

  return {
    actions,
    menu,

    breadcrumbs,
    categories,
    clothes,
    colors,
    products,
    selectOptions,
    sizes,
    slides,

    footer,

    paginationProducts,
  };
});
