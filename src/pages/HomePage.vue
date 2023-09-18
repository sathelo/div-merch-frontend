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

import { slides } from "@/data/home/slides";
import { categories } from "@/data/home/categories";
import { clothes } from "@/data/home/clothes";
import { products } from "@/data/home/products";

import PreviewComponent from "@/components/Home/HomePreviewComponent.vue";
import PopularCategoriesComponent from "@/components/Home/HomePopularCategoriesComponent.vue";
import ClothesComponent from "@/components/Home/HomeClothesComponent.vue";
import NewGoodsComponent from "@/components/Home/HomeNewGoodsComponent.vue";

import type { Card } from "@/components/ui/CardComponent/CardComponent.types";

const filteredProducts = computed(() => {
  const res = products.map((product: Card) => ({
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
