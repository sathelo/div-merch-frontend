<template>
  <div class="cards">
    <div class="cards__title"><slot /></div>
    <div class="cards__wrapper">
      <CardComponent
        v-for="(product, productIndex) in products"
        :key="productIndex"
        :image="getImageForCard(product)"
        :info="{
          title: product.info.title,
          type: product.info.type,
          price: product.info.total.price,
        }"
        class="cards__card"
        @click="redirectToProduct(product.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "@/router/routes";
import { Routes } from "@/router/routes.enums";

import CardComponent from "@/components/ui/CardComponent/CardComponent.vue";

import { getImageForCard } from "@/utils/imageForCard";

import { TProducts, TProduct } from "@/store/initialData/home/products.types";

interface IProps {
  products: TProducts;
}

defineProps<IProps>();

function redirectToProduct(hashProduct: TProduct["id"]) {
  router.push({ name: Routes.product, params: { id: hashProduct } });
}
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
  }

  &__card {
    width: calc(100% / 4);
  }
}
</style>
