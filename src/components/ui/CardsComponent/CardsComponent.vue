<template>
  <div class="cards">
    <div class="cards__title"><slot /></div>
    <div class="cards__wrapper">
      <CardComponent
        v-for="(product, productIndex) in products"
        :key="productIndex"
        :info-product="product"
        class="cards__card"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CardComponent from "@/components/ui/CardComponent/CardComponent.vue";

import type { Cards } from "@/components/ui/CardComponent/CardComponent.types";

interface IProps {
  products: Cards;
}

defineProps<IProps>();
</script>

<style lang="less" scoped>
.cards {
  &__title {
    .text-h2;
    color: @grey-gradation--black;
    margin-bottom: 32px;
  }

  &__wrapper {
    .flex-properties(flex);
    flex-wrap: wrap;

    &__card {
      flex-basis: calc(100% / 4);
    }
  }
}
</style>
