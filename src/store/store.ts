import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

import { initialActions } from "@/store/initialData/header/action";
import { initialMenu } from "@/store/initialData/header/menu";
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
import { TProduct } from "@/store/initialData/home/products.types";
import { TFooter } from "@/store/initialData/footer/footer.types";
import { TBaskets } from "@/store/initialData/basket/basket.types";

import { EActionBasketForProduct } from "@/store/initialData/basket/basket.enums";
import { EQueriesSortType } from "@/utils/query/useSortTypeRouteQuery";
import { EQueriesCategory } from "@/utils/query/useCategoriesRouteQuery";
import { EPaginationSortType } from "@/types";

export const useStore = defineStore("store", () => {
  /* STATE */
  /* data header */
  const actions = ref<TActions>(initialActions);
  const menu = ref<TMenu>(initialMenu);

  /* data main */
  const categories = ref(initialCategories);
  const clothes = ref(initialClothes);
  const colors = ref(initialColors);
  const products = ref(initialProducts);
  const selectOptions = ref(initialSelectOptions);
  const sizes = ref(initialSizes);
  const slides = ref(initialSlides);

  /* data footer */
  const footer = ref<TFooter>(initialFooter);

  /* data basket */
  const basket = useLocalStorage<TBaskets>("basket", []);

  /* ACTIONS */
  function addToBasket(product: TProduct) {
    const existingProductIndex = basket.value.findIndex(
      (item) => item.product === product,
    );
    if (existingProductIndex !== -1)
      basket.value[existingProductIndex].countDuplicateProduct++;
    else {
      basket.value.push({ product, countDuplicateProduct: 1 });
    }
  }

  function changeQuantityProductInBasket(
    action: EActionBasketForProduct,
    id: TProduct["id"],
  ) {
    const productIndex = basket.value.findIndex(
      (product) => product.product.id === id,
    );
    if (productIndex !== -1)
      switch (action) {
        case EActionBasketForProduct.increment:
          basket.value[productIndex].countDuplicateProduct++;
          break;
        case EActionBasketForProduct.decrement:
          if (basket.value[productIndex].countDuplicateProduct > 1)
            basket.value[productIndex].countDuplicateProduct--;
          else {
            basket.value.splice(productIndex, 1);
          }
          break;
        default:
          break;
      }
  }

  /* GETTERS */
  function paginationProducts<
    T extends EQueriesSortType | EQueriesCategory | EPaginationSortType,
  >(start?: number, end?: number, typeSort?: T, product?: TProduct) {
    const chunkProducts = products.value.slice(start, end);
    if (!typeSort) return chunkProducts;
    switch (typeSort) {
      case EQueriesSortType.newItemsFirst:
        return chunkProducts.reverse();
      case EQueriesCategory.anoraks:
      case EQueriesCategory.bracelets:
      case EQueriesCategory.keychains:
      case EQueriesCategory.socks:
      case EQueriesCategory.sweatshirts:
      case EQueriesCategory.trousers:
      case EQueriesCategory.windbreakers:
        return products.value
          .filter((p) => typeSort === p.info.typeCategory && p !== product)
          .slice(start, end);
      case EPaginationSortType.similarProducts:
        return products.value
          .filter(
            (p) =>
              p.info.typeFloor === product?.info.typeFloor &&
              p.info.typeCategory === product?.info.typeCategory,
          )
          .slice(start, end);
      default:
        return chunkProducts;
    }
  }

  const cartCounter = computed(() => {
    return basket.value.reduce((currentSum, currentProduct) => {
      if (currentProduct.countDuplicateProduct)
        return currentSum + currentProduct.countDuplicateProduct;
      return currentSum + 1;
    }, 0);
  });

  const totalCostProducts = computed(() => {
    return basket.value.reduce((currentSum, currentProduct) => {
      const currentProductPrice = Number(
        currentProduct.product.info.total.price,
      );
      if (currentProduct.countDuplicateProduct)
        return (
          currentSum +
          currentProductPrice * currentProduct.countDuplicateProduct
        );
      return currentSum + currentProductPrice;
    }, 0);
  });

  return {
    actions,
    menu,
    categories,
    clothes,
    colors,
    products,
    selectOptions,
    sizes,
    slides,
    footer,
    basket,

    addToBasket,
    changeQuantityProductInBasket,

    paginationProducts,
    cartCounter,
    totalCostProducts,
  };
});
