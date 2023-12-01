<template>
  <section class="setting">
    <h2 class="setting__title">{{ title }}</h2>
    <div class="setting__wrapper">
      <ChispComponent
        v-for="(size, sizeIndex) in sizes"
        :id="size.type"
        :key="sizeIndex"
        v-model="queriesSizes"
        class="setting__chisp"
      >
        {{ size.label }}
      </ChispComponent>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/store/store";
import { useSizesRouteQuery } from "@/utils/query/useSizesRouteQuery";

import ChispComponent from "@/components/ui/ChispComponent/ChispComponent.vue";

interface IProps {
  title: string;
}

defineProps<IProps>();

const store = useStore();
const sizes = computed(() => store.$state.sizes);

const queriesSizes = useSizesRouteQuery();
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
