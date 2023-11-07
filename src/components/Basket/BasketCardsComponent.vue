<template>
  <section class="cards">
    <BasketCardComponent
      v-for="(product, productIndex) in products"
      :key="productIndex"
      :image="getImageForCard(product)"
      :info="{
        type: product.info.type,
        title: product.info.title,
        price: product.info.total.price,
      }"
      class="cards__card"
    />
  </section>
</template>

<script setup lang="ts">
import BasketCardComponent from "@/components/Basket/BasketCardComponent.vue";

import { getImageForCard } from "@/utils/imageForCard";

import { TProducts } from "@/store/initialData/home/products.types";

interface IProps {
  products: TProducts;
}

defineProps<IProps>();
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
