<template>
  <div class="home">
    <PreviewComponent :slides="slides" class="home__preview" />
    <PopularCategoriesComponent
      :categories="categories"
      class="home__popular-categories"
    />
    <ClothesComponent :clothes="clothes" class="home__clothes" />
    <NewGoodsComponent :products="filteredProducts" class="home__new-goods" />
  </div>
</template>

<script setup lang="ts">
import { slides } from "@/data/home/slides";
import { categories } from "@/data/home/categories";
import { clothes } from "@/data/home/clothes";
import { products } from "@/data/home/products";

import PreviewComponent from "@/components/Home/HomePreviewComponent.vue";
import PopularCategoriesComponent from "@/components/Home/HomePopularCategoriesComponent.vue";
import ClothesComponent from "@/components/Home/HomeClothesComponent.vue";
import NewGoodsComponent from "@/components/Home/HomeNewGoodsComponent.vue";

import { formattedPriceToRub } from "@/utils/formattedText";

const filteredProducts = formattedPriceToRub(products);
</script>

<style lang="less" scoped>
.home {
  .content(40px, 40px, @grey-gradation--white);
}
</style>
