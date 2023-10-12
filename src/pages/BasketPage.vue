<template>
  <div class="basket">
    <h2 class="basket__title">Корзина</h2>
    <div class="basket__wrapper">
      <BasketCardsComponent class="basket__cards" />
      <BasketSummaryComponent :total="total" class="basket__summary" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import BasketCardsComponent from "@/components/Basket/BasketCardsComponent.vue";
import BasketSummaryComponent from "@/components/Basket/BasketSummaryComponent.vue";

const total = ref(18450);
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
  }

  &__cards {
    width: 70%;
  }

  &__summary {
    width: 30%;
  }
}
</style>
