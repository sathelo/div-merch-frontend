<template>
  <section class="content">
    <div class="cards">
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
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import CardComponent from "@/components/ui/CardComponent/CardComponent.vue";

import { getImageForCard } from "@/utils/imageForCard";

import { TProducts } from "@/store/initialData/home/products.types";

interface IProps {
  products: TProducts;
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
      width: calc(100% / 3);
    }
  }
}
</style>
