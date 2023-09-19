<template>
  <div class="card">
    <img :src="infoProduct.img" :alt="infoProduct.type" class="card__image" />
    <p class="card__type">
      {{ infoProduct.type }}
    </p>
    <p class="card__title">
      {{ infoProduct.title }}
    </p>
    <p class="card__price">
      {{ infoProduct.price }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ICCardProps } from "./CardComponent.types";

withDefaults(defineProps<ICCardProps>(), {
  infoProduct: () => ({
    img: "/products/t-shirt.png",
    type: "Футболка",
    title: "Recombinate",
    price: 3400,
  }),
});
</script>

<style lang="less" scoped>
.card {
  .flex-properties(flex, center, center);
  .content(32px 24px, 24px, @grey-gradation--white);
  flex-direction: column;
  border: 1px solid @grey-gradation--100;
  cursor: pointer;

  &__image {
    margin-bottom: 12px;
  }

  &__type {
    .text-s;
    color: @grey-gradation--200;
    text-align: center;
    margin-bottom: 4px;
  }

  &__title {
    .text-lead-s;
    color: @grey-gradation--black;
    text-align: center;
    margin-bottom: 12px;
  }

  &__price {
    .text-lead-s;
    color: @grey-gradation--300;
    text-align: center;
  }

  &:hover {
    box-shadow: @elevation--m;

    .card__price {
      color: @blue--500;
    }
  }
}
</style>
