<template>
  <section class="new-goods">
    <div class="new-goods__title">Новые поступления</div>
    <div class="new-goods-cards">
      <div
        v-for="(product, productIndex) in products"
        :key="productIndex"
        class="new-goods-cards__card card"
      >
        <img :src="product.img" :alt="product.type" class="card__photo" />
        <p class="card__type">
          {{ product.type }}
        </p>
        <p class="card__title">
          {{ product.title }}
        </p>
        <p class="card__price">
          {{ product.price }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Products } from "@/data/home/products.types";

interface IProps {
  products: Products;
}

defineProps<IProps>();
</script>

<style lang="less" scoped>
.new-goods {
  &__title {
    .text-h2;
    color: --grey-gradation--black;
    margin-bottom: 32px;
  }

  &-cards {
    display: flex;
    flex-wrap: wrap;

    .card {
      .content(32px 24px, 24px, @grey-gradation--white);
      .flex-properties(flex, center, center);
      border: 1px solid @grey-gradation--100;
      flex-direction: column;
      flex-basis: calc(100% / 4);
      cursor: pointer;

      &__photo {
        margin-bottom: 12px;
      }

      &__type {
        .text-s;
        text-align: center;
        color: @grey-gradation--200;
        margin-bottom: 4px;
      }

      &__title {
        .text-lead-s;
        text-align: center;
        color: @grey-gradation--black;
        margin-bottom: 12px;
      }

      &__price {
        .text-lead-s;
        color: @grey-gradation--300;
        text-align: center;
      }
    }
  }
}
</style>
