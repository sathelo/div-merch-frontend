<template>
  <section class="setting">
    <h2 class="setting__title">{{ title }}</h2>
    <div class="setting__wrapper">
      <ColorPickerComponent
        v-for="({ type, isChecked, bg }, colorIndex) in colors"
        :key="colorIndex"
        :index="colorIndex"
        :type="type"
        :bg="bg"
        class="setting__color color"
        :class="{ 'color--active': isChecked }"
        @update-color="updateColor"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { colors } from "@/data/main/colors";

import ColorPickerComponent from "@/components/ui/ColorPickerComponent/ColorPickerComponent.vue";

interface IProps {
  title: string;
}

defineProps<IProps>();

function updateColor(index: number): void {
  colors.value[index].isChecked = !colors.value[index].isChecked;
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

  &__wrapper {
    .flex-properties(flex);
    flex-wrap: wrap;

    & > *:not(.setting__color:nth-of-type(8n)) {
      margin-right: 12px;
    }

    & > *:not(.setting__color:nth-last-of-type(-n + 8)) {
      margin-bottom: 12px;
    }

    .color {
      .text-s;
      width: calc((100% - (7 * 12px)) / 8);
      height: 24px;
    }
  }
}
</style>
