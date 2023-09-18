<template>
  <dev class="new-goods">
    <div class="new-goods__title">Новые поступления</div>
    <div class="new-goods-cards">
      <CardComponent
        v-for="(product, productIndex) in products"
        :key="productIndex"
        :info-product="product"
        class="new-goods-cards__card"
      />
    </div>
  </dev>
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
.new-goods {
  &__title {
    .text-h2;
    color: @grey-gradation--black;
    margin-bottom: 32px;
  }

  &-cards {
    .flex-properties(flex);
    flex-wrap: wrap;

    &__card {
      flex-basis: calc(100% / 4);
    }
  }
}
</style>
