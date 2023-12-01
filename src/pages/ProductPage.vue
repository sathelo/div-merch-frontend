<template>
  <div v-if="product" class="product">
    <BreadcrumbsComponent
      :breadcrumbs="breadcrumbs"
      class="product__breadcrumbs"
      @to-breadcrumb="toBreadcrumb"
    />
    <ProductCardComponent :product="product" class="product__card" />
    <CardsComponent
      v-if="productsSortedBySimilarProducts"
      :products="productsSortedBySimilarProducts"
      class="product__cards"
    >
      Похожие товары
    </CardsComponent>
    <CardsComponent
      v-if="productsSortedByCategory.length"
      :products="productsSortedByCategory"
      class="product__cards"
    >
      Товары из&nbsp;категории &laquo;{{ nameCategory }}&raquo;
    </CardsComponent>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed, watch } from "vue";
import { RouteLocationRaw, useRoute } from "vue-router";
import { useStore } from "@/store/store";
import router from "@/router/routes.ts";

import BreadcrumbsComponent from "@/components/ui/BreadcrumbsComponent/BreadcrumbsComponent.vue";
import CardsComponent from "@/components/ui/CardsComponent/CardsComponent.vue";
import ProductCardComponent from "@/components/Product/ProductCardComponent.vue";

import { translateTextEngToRu } from "@/utils/translateTextEngToRu";

import { Routes } from "@/router/routes.enums";
import { ETagButton } from "@/components/ui/ButtonComponent/ButtonComponent.types";
import { TProduct } from "@/store/initialData/home/products.types";
import { TBreadcrumbs } from "@/store/initialData/home/breadcrumbs.types";
import { EPaginationSortType } from "@/types/index";

const route = useRoute();

const store = useStore();
const clothes = store.$state.clothes;
const categories = store.$state.categories;
const { paginationProducts } = store;

const product = ref<TProduct>();
const nameCategory = computed(() => {
  const targetCategory = categories.find(
    (category) => category.originalTitle === product.value?.info.typeCategory,
  );
  return targetCategory?.title;
});

const productsSortedBySimilarProducts = computed(() =>
  paginationProducts(0, 4, EPaginationSortType.similarProducts, product.value),
);
const productsSortedByCategory = computed(() =>
  paginationProducts(0, 4, product.value?.info.typeCategory, product.value),
);

onMounted(() => {
  const route = useRoute();
  const id = route.params.id;
  product.value = store.$state.products.find((p) =>
    Array.isArray(id) ? id[0] === p.id : id === p.id,
  );
});

watch(
  () => route.params.id,
  (newId, _oldId) => {
    product.value = store.$state.products.find((p) =>
      Array.isArray(newId) ? newId[0] === p.id : newId === p.id,
    );
  },
);

const breadcrumbs = computed((): TBreadcrumbs => {
  const res: TBreadcrumbs = [];

  if (!product.value) return res;

  res.push({
    tag: ETagButton.a,
    name: "Категории",
    path: `/${Routes.categories}`,
  });
  res.push({
    tag: ETagButton.a,
    name: translateTextEngToRu(product.value.info.typeFloor, clothes),
    path: `/${Routes.categories}?cloth=${product.value.info.typeFloor}`,
  });
  res.push({
    tag: ETagButton.a,
    name: translateTextEngToRu(product.value.info.typeCategory, categories),
    path: `/${Routes.categories}?category=${product.value.info.typeCategory}`,
  });
  res.push({
    tag: ETagButton.a,
    name: product.value.info.title,
  });

  return res;
});

function toBreadcrumb(breadcrumbIndex: number) {
  const breadcrumb = breadcrumbs.value[breadcrumbIndex];
  breadcrumb.path && breadcrumbIndex !== breadcrumbs.value.length - 1
    ? router.push(breadcrumb.path as RouteLocationRaw)
    : "";
}
</script>

<style scoped lang="less">
.product {
  .flex-properties(flex);
  .content(40px, 40px, @grey-gradation--white);
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 40px;
  }
}
</style>
