<template>
  <div class="total">
    <span class="total__price">
      {{ formattedPriceToRub(product.info.total.price) }}
    </span>
    <span v-if="product.info.total.discount" class="total__discount">{{
      formattedDiscount(product.info.total.discount)
    }}</span>

    <ButtonComponent
      :variant="ECButtonType.primary"
      class="total__btn"
      @click="addToBasket(product)"
    >
      <template #icon>
        <img :src="ShopIco" alt="basket" />
      </template>
      Оформить предзаказ
    </ButtonComponent>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/store/store";

import ButtonComponent from "@/components/ui/ButtonComponent/ButtonComponent.vue";

import ShopIco from "/icons/shop.svg";

import { formattedPriceToRub } from "@/utils/formattedText";
import { formattedDiscount } from "@/utils/formattedDiscount";

import { ECButtonType } from "@/components/ui/ButtonComponent/ButtonComponent.enums";

import { TProduct } from "@/store/initialData/home/products.types";

interface IProps {
  product: TProduct;
}

defineProps<IProps>();

const store = useStore();
const { addToBasket } = store;
</script>

<style lang="less" scoped>
.total {
  .flex-properties(flex, center);

  &__price {
    .text-lead-m;
    color: @grey-gradation--black;
    margin-right: 12px;
  }

  &__discount {
    .content(10px 14px, 1000px, @500);
    .flex-properties(flex, center, center);
  }

  &__btn {
    margin-left: auto;
  }
}
</style>
