<template>
  <page class="home-page">
    <section class="home-page__main main">
      <CPreview :slides="slides" />
      <CPopularCategories
        class="main__popular-categories"
        :categories="categories"
      />
      <CСlothes :clothes="clothes" class="main__clothes" />
      <CNewGoods :products="filteredProducts" class="main__new-goods" />
    </section>
  </page>
</template>

<script setup lang="ts">
import { computed } from "vue";

import CPreview from "@/components/Main/CPreview.vue";
import CPopularCategories from "@/components/Main/CPopularCategories.vue";
import CСlothes from "@/components/Main/CСlothes.vue";
import CNewGoods from "@/components/Main/CNewGoods.vue";

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
    .page();
    .content(40px, 40px, @grey-gradation--white);
  }
}
</style>
