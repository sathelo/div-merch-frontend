<template>
  <div v-if="characteristics" class="characteristics">
    <h3 class="characteristics__title">Характеристики</h3>
    <div
      v-for="(characteristic, characteristicIndex) in characteristics"
      :key="characteristicIndex"
      class="characteristics__characteristic characteristic"
    >
      <p class="characteristic__key">{{ characteristic.key }}</p>
      <p class="characteristic__value">{{ characteristic.value }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TProductCardCharacteristics } from "@/components/Product/ProductCardCharacteristicsComponent.types";

interface IProps {
  characteristics?: TProductCardCharacteristics;
}

defineProps<IProps>();
</script>

<style lang="less" scoped>
.characteristics {
  .content(32px, 24px);
  border: 1px solid @grey-gradation--100;

  & > *:not(:last-child) {
    margin-bottom: 24px;
  }

  &__characteristic {
    &__title {
      .text-lead-m;
      color: @grey-gradation--black;
      margin-bottom: 24px;
    }
  }

  .characteristic {
    .flex-properties(flex, center, space-between);

    &__key {
      .text-body;
      color: @grey-gradation--300;
    }

    &__value {
      .text-body;
      color: @grey-gradation--black;
    }
  }
}
</style>
