<template>
  <div class="home">
    <PreviewComponent :slides="slides" class="home__preview" />
    <PopularCategoriesComponent
      :categories="categories"
      class="home__popular-categories"
    />
    <ClothesComponent :clothes="clothes" class="home__clothes" />
    <NewGoodsComponent :products="filteredProducts" class="home__new-goods" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { slides } from "@/data/main/slides";
import { categories } from "@/data/main/categories";
import { clothes } from "@/data/main/clothes";
import { products } from "@/data/main/products";

import PreviewComponent from "@/components/Main/MainPreviewComponent.vue";
import PopularCategoriesComponent from "@/components/Main/MainPopularCategoriesComponent.vue";
import ClothesComponent from "@/components/Main/MainClothesComponent.vue";
import NewGoodsComponent from "@/components/Main/MainNewGoodsComponent.vue";

import type { Product } from "@/data/main/products.types";

const filteredProducts = computed(() => {
  const res = products.map((product: Product) => ({
    ...product,
    price:
      `${product.price}`.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ") +
      " " +
      "₽",
  }));
  return res;
});
</script>

<style lang="less" scoped>
.home {
  .content(40px, 40px, @grey-gradation--white);
}
</style>
