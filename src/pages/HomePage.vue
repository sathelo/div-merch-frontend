<template>
  <div class="home">
    <PreviewComponent :slides="slides" class="home__preview" />
    <PopularCategoriesComponent
      :categories="categories"
      class="home__popular-categories"
    />
    <ClothesComponent :clothes="clothes" class="home__clothes" />
    <CardsComponent
      :products="productsSortedByNewItemsFirst"
      class="home__new-goods home__cards"
    >
      Новые поступления
    </CardsComponent>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { useStore } from "@/store/store";

import PreviewComponent from "@/components/Home/HomePreviewComponent.vue";
import PopularCategoriesComponent from "@/components/Home/HomePopularCategoriesComponent.vue";
import ClothesComponent from "@/components/Home/HomeClothesComponent.vue";
import CardsComponent from "@/components/ui/CardsComponent/CardsComponent.vue";

import { EQueriesSortType } from "@/utils/query/useSortTypeRouteQuery";

const store = useStore();
const { paginationProducts } = store;

const slides = computed(() => store.$state.slides);
const categories = computed(() => store.$state.categories);
const clothes = computed(() => store.$state.clothes);
const productsSortedByNewItemsFirst = computed(() =>
  paginationProducts(0, 8, EQueriesSortType.newItemsFirst),
);
</script>

<style lang="less" scoped>
.home {
  .content(40px, 40px, @grey-gradation--white);
}
</style>
