<template>
  <section class="setting">
    <h2 class="setting__title">{{ title }}</h2>
    <div class="setting__wrapper">
      <ColorPickerComponent
        v-for="(color, colorIndex) in colors"
        :id="color.type"
        :key="colorIndex"
        v-model="queriesColors"
        :type="color.contrastType"
        :bg="color.bg"
        class="setting__color"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/store/store";
import { useColorsRouteQuery } from "@/utils/query/useColorsRouteQuery";

import ColorPickerComponent from "@/components/ui/ColorPickerComponent/ColorPickerComponent.vue";

interface IProps {
  title: string;
}

defineProps<IProps>();

const store = useStore();
const colors = computed(() => store.$state.colors);

const queriesColors = useColorsRouteQuery();
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
  }

  &__color {
    width: calc((100% - (7 * 12px)) / 8);
    height: 24px;
  }
}
</style>
