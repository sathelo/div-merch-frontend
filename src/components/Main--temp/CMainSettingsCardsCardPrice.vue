<template>
  <section class="main-settings-cards-card-price">
    <div class="main-settings-cards-card-price__title">{{ title }}</div>

    <div class="main-settings-cards-card-price-info">
      <div class="main-settings-cards-card-price-info__from">
        От {{ prices[0] }}
      </div>
      <div class="main-settings-cards-card-price-info__before">
        До {{ prices[1] }}
      </div>
    </div>

    <ElSlider
      :prices="prices"
      @change="updatePrices($event as number[])"
      range
    />
  </section>
</template>

<script setup lang="ts">
import { ElSlider } from "element-plus";

interface IProps {
  title: string;
  prices: number[];
}

interface IEmits {
  (e: "updatePrices", prices: number[]): void;
}

defineProps<IProps>();
const emits = defineEmits<IEmits>();

function updatePrices(newPrices: number[]): void {
  emits("updatePrices", newPrices);
}
</script>

<style lang="less" scoped></style>
