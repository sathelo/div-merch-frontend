<template>
  <div class="product">
    <BreadcrumbsComponent
      :breadcrumbs="breadcrumbs"
      class="product__breadcrumbs"
    />
    <ProductCardComponent :data="dataCard" class="product__card" />
    <CardsComponent :products="products.slice(0, 4)" class="product__cards">
      Похожие товары
    </CardsComponent>
    <CardsComponent :products="products.slice(0, 4)" class="product__cards">
      Товары из&nbsp;категории &laquo;Носки&raquo;
    </CardsComponent>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import { products } from "@/data/home/products";
import { breadcrumbs } from "@/data/home/breadcrumbs";

import BreadcrumbsComponent from "@/components/ui/BreadcrumbsComponent/BreadcrumbsComponent.vue";
import CardsComponent from "@/components/ui/CardsComponent/CardsComponent.vue";
import ProductCardComponent from "@/components/Product/ProductCardComponent.vue";

import { EColorPickerType } from "@/components/ui/ColorPickerComponent/ColorPickerComponent.enums";

import { TProductCard } from "@/components/Product/ProductCardComponent.types";

const dataCard = ref<TProductCard>({
  images: [
    "categories/1.png",
    "categories/2.png",
    "categories/3.png",
    "categories/4.png",
    "categories/5.png",
    "categories/6.png",
  ],
  info: {
    title: "Носки St. Friday, укороченные",
    type: "Носки мужские",
    colors: [
      {
        type: EColorPickerType.low,
        isChecked: false,
        bg: "#501599",
      },
      {
        type: EColorPickerType.low,
        isChecked: false,
        bg: "#333333",
      },
      {
        type: EColorPickerType.low,
        isChecked: false,
        bg: "#666666",
      },
    ],
    sizes: [
      { label: "S", isChecked: false },
      { label: "M", isChecked: false },
      { label: "L", isChecked: false },
    ],
    total: {
      price: 1400,
      discount: "-30%",
    },
    descriptions: [
      `Короткие носки унисекс "Ангел-вредитель" с соответствующей надписью и изображением попугая, связанного куском хлеба, пусть уберегут владельца от необдуманных поступков. На разных носках в паре свой принт.
  В составе мягкий гребенной хлопок с добавлением полиамида и эластана, делающими изделия износостойкими и эластичными. Не линяют и не выцветают при соблюдении рекомендованных условий ухода.`,
      `Носки вяжутся на фабрике в Санкт-Петербурге, отсюда в названии бренда и St. Создатели торговой марки помогают нам разбавлять скучные офисные будни своими необычными моделями в стиле Casual Friday - когда можно ослабить дресс-код и повеселиться!`,
    ],
    characteristics: [
      {
        key: "Цвет",
        value: "Зеленый",
      },
      {
        key: "Цвет",
        value: "Зеленый",
      },
      {
        key: "Цвет",
        value: "Классические",
      },
      {
        key: "Цвет",
        value: "полиамид 17%, хлопок 80%, эластан 3%",
      },
    ],
  },
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
