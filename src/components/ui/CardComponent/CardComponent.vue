<template>
  <div class="card">
    <img :src="image" :alt="info.type" class="card__image" />
    <p class="card__type">
      {{ info.type }}
    </p>
    <p class="card__title">
      {{ info.title }}
    </p>
    <p class="card__price">
      {{ formattedPriceToRub(info.price) }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { formattedPriceToRub } from "@/utils/formattedText";

import { TCCard } from "@/components/ui/CardComponent/CardComponent.types";

withDefaults(defineProps<TCCard>(), {
  image: "/products/t-shirt.png",
  info: () => ({
    title: "Recombinate",
    type: "Футболка",
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
    width: 100%;
    height: 100%;
    object-fit: contain;
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
