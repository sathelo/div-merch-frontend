<template>
  <div class="product">
    <div class="product__info">
      <img class="product__photo" :src="product.img" :alt="product.img" />
      <p class="product__title">{{ product.title }}</p>
      <p class="product__type">{{ product.type }}</p>
    </div>
    <div class="product__settings settings">
      <ButtonComponent
        v-for="(button, buttonIndex) in buttons"
        :key="buttonIndex"
        class="settings__setting setting"
        :variant="ECButtonType.round"
      >
        <template #icon>
          <img class="setting__ico" :src="button.ico" />
        </template>
      </ButtonComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import ButtonComponent from "@/components/ui/ButtonComponent/ButtonComponent.vue";

import { ECButtonType } from "@/components/ui/ButtonComponent/ButtonComponent.enums";

import type { Card } from "@/components/ui/CardComponent/CardComponent.types";

interface IProps {
  product: Card;
}

defineProps<IProps>();

const buttons = ref([
  {
    ico: "/icons/heart.svg",
  },
  {
    ico: "/icons/basket.svg",
  },
]);
</script>

<style lang="less" scoped>
.products {
  .content(48px, 24px);
  border: 1px solid @grey-gradation--100;

  .product {
    .flex-properties(flex);

    &__info {
      .flex-properties(flex);
      flex-direction: column;
    }

    &__photo {
      max-width: 100px;
    }

    &__title {
      .text-lead-s;
      color: @grey-gradation--black;
      margin-bottom: 12px;
    }

    &__type {
      .text-m;
      color: @grey-gradation--200;
      margin-bottom: 18px;
    }

    &__settings {
      .flex-properties(flex);

      .setting {
        &:not(:last-child) {
          margin-right: 16px;
        }
      }
    }
  }
}
</style>
