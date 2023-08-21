<template>
  <section class="setting">
    <h2 class="setting__title">{{ title }}</h2>
    <div class="setting__info info">
      <div class="info__from">
        От
        <p class="info__text">{{ prices[0] }}</p>
      </div>
      <div class="info__before">
        До
        <p class="info__text">{{ prices[1] }}</p>
      </div>
    </div>
    <ElSlider
      :prices="prices"
      range
      class="setting__slider"
      style="--el-slider-height: 2px"
      :max="maxPrice"
      @change="updatePrices($event as number[])"
    />
  </section>
</template>

<script setup lang="ts">
import { ElSlider } from "element-plus";

interface IProps {
  title: string;
  prices: number[];
  maxPrice: number;
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

    &__from,
    &__before {
      .flex-properties(flex, initial, flex-start);
      .text-s;
      color: @grey-gradation--black;
      width: 100%;
    }

    &__text {
      .text-s;
      color: @grey-gradation--200;
      margin-left: 4px;
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
