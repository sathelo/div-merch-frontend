<template>
  <div class="basket">
    <h2 class="basket__title">Корзина</h2>
    <div class="basket__wrapper">
      <div class="basket__products products">
        <BasketCardComponent
          v-for="(product, productIndex) in products"
          :key="productIndex"
          :product="product"
          class="products__product"
        />
      </div>
      <div class="basket__price">this block is price</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { products } from "@/data/home/products";

import BasketCardComponent from "@/components/Basket/BasketCardComponent.vue";
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
  }
}
</style>
