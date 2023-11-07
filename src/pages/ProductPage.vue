<template>
  <div class="product">
    <BreadcrumbsComponent
      :breadcrumbs="store.$state.breadcrumbs"
      class="product__breadcrumbs"
    />
    <ProductCardComponent :data="product" class="product__card" />
    <CardsComponent :products="paginationProducts(0, 4)" class="product__cards">
      Похожие товары
    </CardsComponent>
    <CardsComponent :products="paginationProducts(0, 4)" class="product__cards">
      Товары из&nbsp;категории &laquo;Носки&raquo;
    </CardsComponent>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "@/store/store";

import BreadcrumbsComponent from "@/components/ui/BreadcrumbsComponent/BreadcrumbsComponent.vue";
import CardsComponent from "@/components/ui/CardsComponent/CardsComponent.vue";
import ProductCardComponent from "@/components/Product/ProductCardComponent.vue";

import { TProduct, TProducts } from "@/store/initialData/home/products.types";

const store = useStore();
const { paginationProducts } = store;

interface IProps {
  product: TProduct;
  products: TProducts;
}

defineProps<IProps>();
</script>

<style scoped lang="less">
.product {
  .flex-properties(flex);
  .content(40px, 40px, @grey-gradation--white);
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 40px;
  }
}
</style>
