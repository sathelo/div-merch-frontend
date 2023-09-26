<template>
  <div class="card">
    <div class="card__info">
      <img class="card__photo" :src="product.img" :alt="product.img" />
      <p class="card__title">{{ product.title }}</p>
      <p class="card__type">{{ product.type }}</p>
    </div>
    <div class="card__settings settings">
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
.card {
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
</style>
