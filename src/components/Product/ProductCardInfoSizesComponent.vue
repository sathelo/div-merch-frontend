<template>
  <div class="size">
    <p class="size__title">Размер</p>
    <div class="size__wrapper">
      <ChispComponent
        v-for="(size, sizeIndex) in sizes"
        :key="sizeIndex"
        v-model="size.isChecked"
        class="setting__chisp"
      >
        {{ size.label }}
      </ChispComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChispComponent from "@/components/ui/ChispComponent/ChispComponent.vue";

import type { TProductCardInfoSizes } from "@/components/Product/ProductCardInfoSizesComponent.types";

interface IProps {
  sizes: TProductCardInfoSizes;
}

defineProps<IProps>();
</script>

<style lang="less" scoped>
.size {
  &__title {
    .text-lead-s;
    color: @grey-gradation--black;
    margin-bottom: 24px;
  }

  &__wrapper {
    .flex-properties(flex);

    & > *:not(:last-child) {
      margin-right: 8px;
    }
  }
}
</style>
