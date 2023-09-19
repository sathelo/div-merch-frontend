<template>
  <section class="setting">
    <h2 class="setting__title">{{ title }}</h2>
    <div class="setting__wrapper">
      <ChispComponent
        v-for="(size, sizeIndex) in sizes"
        :key="sizeIndex"
        v-model="size.isChecked"
        class="setting__chisp"
      >
        {{ size.label }}
      </ChispComponent>
    </div>
  </section>
</template>

<script setup lang="ts">
import { sizes } from "@/data/home/sizes";

import ChispComponent from "@/components/ui/ChispComponent/ChispComponent.vue";

interface IProps {
  title: string;
}

defineProps<IProps>();
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

    & > *:not(.setting__chisp:nth-of-type(4n)) {
      margin-right: 8px;
    }

    & > .setting__chisp:nth-of-type(-n + 4) {
      margin-bottom: 8px;
    }
  }

  &__chisp {
    width: calc((100% - (3 * 8px)) / 4);
  }
}
</style>
