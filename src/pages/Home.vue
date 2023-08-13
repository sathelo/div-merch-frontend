<template>
  <page class="home-page">
    <section class="home-page__main main">
      <CPreview :slides="slides" />
      <CPopularCategories
        class="main__popular-categories"
        :categories="categories"
      />
      <CСlothes :clothes="clothes" class="main__clothes" />
      <CNewGoods :products="products" class="main__new-goods" />
    </section>
  </page>
</template>

<script setup lang="ts">
import CPreview from "@/components/Main/CPreview.vue";
import CPopularCategories from "@/components/Main/CPopularCategories.vue";
import CСlothes from "@/components/Main/CСlothes.vue";
import CNewGoods from "@/components/Main/CNewGoods.vue";

import { categories, slides, clothes, products } from "@/data/main";
</script>

<style lang="less" scoped>
.home-page {
  .main {
    .page();
    .content(40px, 40px, @grey-gradation--white);
  }
}
</style>
