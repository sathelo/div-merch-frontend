<template>
  <section class="content">
    <div class="cards">
      <CardComponent
        v-for="(product, productIndex) in products"
        :key="productIndex"
        :info-product="product"
        class="cards__card"
      />
    </div>
  </section>
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
.content {
  width: 100%;

  .cards {
    .flex-properties(flex);
    flex-wrap: wrap;
    width: inherit;

    &__card {
      flex-basis: calc(100% / 3);
    }
  }
}
</style>
