<template>
  <section class="cards">
    <BasketCardComponent
      v-for="(product, productIndex) in products"
      :key="productIndex"
      :product="product"
      class="cards__card"
    />
  </section>
</template>

<script setup lang="ts">
import { products } from "@/data/home/products";

import BasketCardComponent from "@/components/Basket/BasketCardComponent.vue";
</script>

<style lang="less" scoped>
.cards {
  .content(48px, 24px);
  border: 1px solid @grey-gradation--100;

  & > *:not(:last-child) {
    margin-bottom: 24px;
  }
}
</style>
