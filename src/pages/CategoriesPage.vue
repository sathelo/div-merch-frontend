<template>
  <div class="categories">
    <div class="categories__header">
      <BreadcrumbsComponent
        :breadcrumbs="breadcrumbs"
        class="categories__breadcrumbs"
        @to-breadcrumb="toBreadcrumb"
      />
      <DropdownComponent
        v-model="isDropdown"
        v-model:select-value="queriesSelectOptions"
        :options="selectOptions"
        class="categories__select"
      />
    </div>
    <div class="categories__body">
      <CategoriesSettingsComponent class="categories__settings" />
      <span
        v-if="!filteredProducts.length"
        class="categories__content-not-found"
      >
        Упс! По данным запросам мы ничего не нашли подходящего.
      </span>
      <CategoriesContentComponent
        v-else
        :products="filteredProducts"
        class="categories__content"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { useStore } from "@/store/store";
import { watchDebounced } from "@vueuse/core";
import { useRouteQuery } from "vue-use-route-query";
import {
  EQueriesSortType,
  useSortTypeRouteQuery,
} from "@/utils/query/useSortTypeRouteQuery";
import router from "@/router/routes.ts";

import BreadcrumbsComponent from "@/components/ui/BreadcrumbsComponent/BreadcrumbsComponent.vue";
import CategoriesSettingsComponent from "@/components/Categories/CategoriesSettingsComponent.vue";
import CategoriesContentComponent from "@/components/Categories/CategoriesContentComponent.vue";
import DropdownComponent from "@/components/ui/DropdownComponent/DropdownComponent.vue";

import { translateTextEngToRu } from "@/utils/translateTextEngToRu";

import { ETagButton } from "@/components/ui/ButtonComponent/ButtonComponent.types";
import { TProducts } from "@/store/initialData/home/products.types";
import { TBreadcrumbs } from "@/store/initialData/home/breadcrumbs.types";

const store = useStore();
const menu = store.$state.menu;
const clothes = store.$state.clothes;
const categories = store.$state.categories;

const isDropdown = ref(false);

const selectOptions = computed(() => store.$state.selectOptions);
const products = computed(() => store.$state.products);
const filteredProducts = ref<TProducts>([]);

const price = useRouteQuery("price", "");
const cloth = useRouteQuery("cloth", "");
const category = useRouteQuery("category", "");
const sizes = useRouteQuery("sizes", "");
const colors = useRouteQuery("colors", "");
const queriesSelectOptions = useSortTypeRouteQuery(
  EQueriesSortType.newItemsFirst,
);

const currentRouteName = router.currentRoute.value.name;
const currentRouteParams = router.currentRoute.value.params;

onMounted(() => {
  filteredProducts.value = getFilteredProducts();
});

watchDebounced(
  [price, cloth, categories, sizes, colors, queriesSelectOptions],
  () => {
    filteredProducts.value = getFilteredProducts();
  },
  { debounce: 1000, maxWait: 5000 },
);

const breadcrumbs = computed((): TBreadcrumbs => {
  const res: TBreadcrumbs = [];

  if (currentRouteName)
    res.push({
      tag: ETagButton.a,
      name: translateTextEngToRu(String(currentRouteName), menu),
      path: String(currentRouteName) + "?",
    });
  if (cloth.value.length)
    res.push({
      tag: ETagButton.a,
      name: translateTextEngToRu(cloth.value, clothes),
      path: `cloth=${cloth.value}`,
    });
  if (category.value.length)
    res.push({
      tag: ETagButton.a,
      name: translateTextEngToRu(category.value, categories),
      path: `category=${category.value}`,
    });
  if (currentRouteParams.id)
    res.push({
      tag: ETagButton.a,
      name: `${Object.keys(currentRouteParams)[0]}`,
    });

  return res;
});

function toBreadcrumb(breadcrumbIndex: number) {
  const breadcrumb = breadcrumbs.value[breadcrumbIndex];
  breadcrumb.path && breadcrumbIndex !== breadcrumbs.value.length - 1
    ? router.replace(
        breadcrumbs.value
          .slice(0, breadcrumbIndex + 1)
          .map((b) => b.path)
          .join(""),
      )
    : "";
}

function getFilteredProducts() {
  const filteredBySettings = products.value.filter((product) => {
    return (
      (!price.value ||
        (product.info.total.price >= price.value.split(",")[0] &&
          product.info.total.price <= price.value.split(",")[1])) &&
      (!cloth.value ||
        cloth.value.split(",").includes(product.info.typeFloor)) &&
      (!category.value ||
        category.value.split(",").includes(product.info.typeCategory)) &&
      (!sizes.value ||
        product.info.sizes.some((product) =>
          sizes.value.split(",").includes(product.type),
        )) &&
      (!colors.value ||
        product.info.colors.some((color) =>
          colors.value.split(",").includes(color.type),
        ))
    );
  });
  if (!queriesSelectOptions.value) {
    return filteredBySettings.reverse();
  } else {
    switch (queriesSelectOptions.value) {
      case EQueriesSortType.newItemsFirst:
        return filteredBySettings.reverse();
      case EQueriesSortType.oldItemsFirst:
        return filteredBySettings;
      case EQueriesSortType.byPriceAsc:
        return filteredBySettings.sort(
          (a, b) => Number(a.info.total.price) - Number(b.info.total.price),
        );
      case EQueriesSortType.byPriceDesc:
        return filteredBySettings.sort(
          (a, b) => Number(b.info.total.price) - Number(a.info.total.price),
        );
    }
  }
}
</script>

<style lang="less" scoped>
.categories {
  position: relative;
  .content(40px, 40px, @grey-gradation--white);
  width: 100%;
  height: 100%;

  &__header,
  &__body {
    .flex-properties(flex, initial, space-between);
  }

  &__select {
    position: absolute;
    top: 40px;
    right: 40px;
    width: 100%;
    max-width: 174px;
  }

  & > :not(&__wrapper:last-of-type) {
    margin-bottom: 40px;
  }

  &__content-not-found {
    .flex-properties(flex, center, center);
    .text-m;
    color: @grey-gradation--black;
    width: 100%;
  }
}
</style>
