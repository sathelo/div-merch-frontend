<template>
  <section class="setting">
    <h2 class="setting__title">{{ title }}</h2>
    <div class="setting__info info">
      <div
        v-for="(range, rangeIndex) in ranges"
        :key="rangeIndex"
        class="info__range"
      >
        <p class="info__label">{{ range.label }}</p>
        <input
          :value="range.price"
          class="info__input"
          type="number"
          @input="updateRange(rangeIndex, $event.target)"
        />
      </div>
    </div>
    <ElSlider
      v-model="localPrices"
      range
      :max="maxPrice"
      :show-tooltip="false"
      class="setting__slider"
      style="--el-slider-height: 2px"
      @input="updatePrices($event)"
    />
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import { ElSlider } from "element-plus";

import { Arrayable } from "element-plus/lib/utils/typescript.js";

// Import styles element-plus
import "element-plus/dist/index.css";

interface IProps {
  title: string;
  prices: number[];
  maxPrice: number;
}

interface IEmits {
  (e: "updatePrices", prices: number[]): void;
}

const props = defineProps<IProps>();
const emits = defineEmits<IEmits>();

const ranges = computed(() => [
  { label: "От", price: props.prices[0] },
  { label: "До", price: props.prices[1] },
]);

const localPrices = ref([...props.prices]);

function updateRange(index: number, price: EventTarget | null): void {
  const inputValue = (price as HTMLInputElement).value;
  const value = parseInt(inputValue);
  if (!isNaN(value)) {
    localPrices.value[index] = value;
    updatePrices(localPrices.value);
  }
}

function updatePrices<T extends Arrayable<number>>(newPrices: T): void {
  emits(
    "updatePrices",
    Array.isArray(newPrices) ? newPrices : localPrices.value,
  );
}
</script>

<style lang="less" scoped>
.setting {
  .content(32px, 24px, initial);
  border: 1px solid @grey-gradation--100;

  &__title {
    .text-lead-s;
    color: @grey-gradation--black;
    margin-bottom: 24px;
  }

  .info {
    .flex-properties(flex, center, space-between);
    width: 100%;

    & > *:first-child {
      margin-right: 16px;
    }

    &__range {
      .flex-properties(flex, center, flex-start);
      width: 100%;
    }

    &__label {
      .text-s;
      color: @grey-gradation--black;
    }

    &__input {
      .text-s;
      color: @grey-gradation--200;
      margin-left: 4px;
      width: 100%;
    }
  }
}
</style>

<style lang="less">
.setting {
  &__slider {
    .el-slider__bar {
      background-color: @grey-gradation--black;
    }

    .el-slider__button {
      background-color: @grey-gradation--black;
      border: none;
    }
  }
}
</style>
