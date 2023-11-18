<template>
  <section class="cards">
    <BasketCardComponent
      v-for="(product, productIndex) in products"
      :key="productIndex"
      :product="{
        id: product.product.id,
        images: getImageForCard(product.product),
        info: {
          title: product.product.info.title,
          type: product.product.info.type,
          total: {
            price: product.product.info.total.price,
          },
        },
      }"
      :count-duplicate-product="product.countDuplicateProduct"
      class="cards__card"
    />
  </section>
</template>
<script setup lang="ts">
import BasketCardComponent from "@/components/Basket/BasketCardComponent.vue";

import { getImageForCard } from "@/utils/imageForCard";

import { TBaskets } from "@/store/initialData/basket/basket.types";

interface IProps {
  products: TBaskets;
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
