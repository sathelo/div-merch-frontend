<template>
  <section class="main">
    <Swiper :slides="slides" />
    <Categories :categories="categories" />
  </section>
</template>

<script setup lang="ts">
import Swiper from "@/components/Main/CSwiper.vue";
import Categories from "@/components/Main/CCategories.vue";

import { categories, slides } from "@/data/main";
</script>

<style lang="less" scoped>
.main {
  .page();
  .content(40px, 40px, @grey-gradation--white);
}
</style>
