<template>
  <div class="basket">
    <h2 class="basket__title">Корзина</h2>
    <div v-if="!products.length" class="basket__not-found">Корзина пустая</div>
    <div v-else class="basket__wrapper">
      <BasketCardsComponent :products="products" class="basket__cards" />
      <BasketSummaryComponent
        :total-products="cartCounter"
        :total-price="totalCostProducts"
        class="basket__summary"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/store/store";
import { computed } from "vue";

import BasketCardsComponent from "@/components/Basket/BasketCardsComponent.vue";
import BasketSummaryComponent from "@/components/Basket/BasketSummaryComponent.vue";

const store = useStore();

const products = computed(() => store.$state.basket);
const cartCounter = computed(() => store.cartCounter);
const totalCostProducts = computed(() => store.totalCostProducts);
</script>

<style lang="less" scoped>
.basket {
  .content(40px, 40px, @grey-gradation--white);
  width: 100%;
  height: 100%;

  &__title {
    .text-h2;
    color: @grey-gradation--black;
    margin-bottom: 40px;
  }

  &__wrapper {
    .flex-properties(flex);
    position: relative;
    width: 100%;
  }
}
</style>
