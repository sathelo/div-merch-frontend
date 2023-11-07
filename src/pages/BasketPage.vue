<template>
  <div class="basket">
    <h2 class="basket__title">Корзина</h2>
    <div class="basket__wrapper">
      <BasketCardsComponent :products="products" class="basket__cards" />
      <BasketSummaryComponent
        :total-product="totalProduct"
        :total-price="totalPrice"
        class="basket__summary"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/store/store";

import BasketCardsComponent from "@/components/Basket/BasketCardsComponent.vue";
import BasketSummaryComponent from "@/components/Basket/BasketSummaryComponent.vue";

const store = useStore();

const products = computed(() => store.$state.products);
const totalProduct = computed(() => 4);
const totalPrice = computed(() => 18450);
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

  &__cards {
    width: 70%;
  }

  &__summary {
    width: 30%;
  }
}
</style>
