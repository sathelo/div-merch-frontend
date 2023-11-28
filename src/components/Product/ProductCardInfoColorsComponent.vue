<template>
  <div class="colors">
    <p class="colors__title">Цвет</p>
    <div class="colors__wrapper">
      <ColorPickerComponent
        v-for="(color, colorIndex) in colors"
        :key="colorIndex"
        v-model="color.isChecked"
        :type="color.contrastType"
        :bg="color.bg"
        class="colors__color"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ColorPickerComponent from "@/components/ui/ColorPickerComponent/ColorPickerComponent.vue";

import { TProductCardInfoColors } from "@/components/Product/ProductCardInfoColorsComponent.types";

interface IProps {
  colors: TProductCardInfoColors;
}

defineProps<IProps>();
</script>

<style lang="less" scoped>
.colors {
  margin-bottom: 32px;

  &__title {
    .text-lead-s;
    color: @grey-gradation--black;
    margin-bottom: 24px;
  }

  &__wrapper {
    .flex-properties(flex);

    & > *:not(:last-child) {
      margin-right: 12px;
    }
  }
}
</style>
