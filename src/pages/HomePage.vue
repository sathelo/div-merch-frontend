<template>
  <page class="home-page">
    <section class="home-page__main main">
      <PreviewComponent :slides="slides" />
      <PopularCategoriesComponent
        class="main__popular-categories"
        :categories="categories"
      />
      <ClothesComponent :clothes="clothes" class="main__clothes" />
      <NewGoodsComponent :products="filteredProducts" class="main__new-goods" />
    </section>
  </page>
</template>

<script setup lang="ts">
import { computed } from "vue";

import PreviewComponent from "@/components/Main/PreviewComponent.vue";
import PopularCategoriesComponent from "@/components/Main/PopularCategoriesComponent.vue";
import ClothesComponent from "@/components/Main/ClothesComponent.vue";
import NewGoodsComponent from "@/components/Main/NewGoodsComponent.vue";

import { slides } from "@/data/main/slides";
import { categories } from "@/data/main/categories";
import { clothes } from "@/data/main/clothes";
import { products } from "@/data/main/products";
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
.home-page {
  .main {
    .page;
    .content(40px, 40px, @grey-gradation--white);
  }
}
</style>
