<template>
  <section class="main-settings-cards-card-price">
    <div class="main-settings-cards-card-price__title">{{ title }}</div>

    <div class="main-settings-cards-card-price-info">
      <div class="main-settings-cards-card-price-info__from">
        От {{ prices.start[0] }}
      </div>
      <div class="main-settings-cards-card-price-info__before">
        До {{ prices.end[1] }}
      </div>
    </div>

    <ElSlider v-model="prices" range />
  </section>
</template>

<script setup lang="ts">
import { ElSlider } from "element-plus";
import { computed } from "vue";

interface IProps {
  title: string;
  prices: number[];
}

interface IEmits {
  updatePrices: (prices: number[]) => void;
}

defineProps<IProps>();
const emits = defineEmits<IEmits>();

const prices = computed(() => {
  updatePrices([2, 3]);
});

function updatePrices(newPrices: number[]): void {
  emits("updatePrices", newPrices);
}
</script>

<style lang="less" scoped></style>
