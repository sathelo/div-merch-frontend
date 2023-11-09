<template>
  <div v-if="product" class="product">
    <BreadcrumbsComponent
      :breadcrumbs="breadcrumbs"
      class="product__breadcrumbs"
    />
    <ProductCardComponent :product="product" class="product__card" />
    <CardsComponent :products="paginationProducts(0, 4)" class="product__cards">
      Похожие товары
    </CardsComponent>
    <CardsComponent :products="paginationProducts(0, 4)" class="product__cards">
      Товары из&nbsp;категории &laquo;Носки&raquo;
    </CardsComponent>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, computed, ref } from "vue";
import { useRoute } from "vue-router";

import { useStore } from "@/store/store";

import BreadcrumbsComponent from "@/components/ui/BreadcrumbsComponent/BreadcrumbsComponent.vue";
import CardsComponent from "@/components/ui/CardsComponent/CardsComponent.vue";
import ProductCardComponent from "@/components/Product/ProductCardComponent.vue";

import { TProduct } from "@/store/initialData/home/products.types";

const store = useStore();
const { paginationProducts } = store;

const product = ref<TProduct>();

const breadcrumbs = computed(() => store.$state.breadcrumbs);

onMounted(() => {
  const route = useRoute();
  const id = route.params.id;
  product.value = store.$state.products.find((p) =>
    Array.isArray(id) ? id[0] === p.id : id === p.id,
  );
});
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
