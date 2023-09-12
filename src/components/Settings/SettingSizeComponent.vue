<template>
  <section class="setting">
    <h2 class="setting__title">{{ title }}</h2>
    <div class="setting__wrapper">
      <ChispComponent
        v-for="({ label, isChecked }, checkboxIndex) in checkboxes"
        :key="checkboxIndex"
        :index="checkboxIndex"
        class="setting__chisp chisp"
        :class="{ 'chisp--active': isChecked }"
        @update-chisp="updateChisp"
      >
        {{ label }}
      </ChispComponent>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

import ChispComponent from "@/components/ui/ChispComponent/ChispComponent.vue";

interface IProps {
  title: string;
}

defineProps<IProps>();

const checkboxes = ref([
  { label: "S", isChecked: false },
  { label: "M", isChecked: false },
  { label: "L", isChecked: false },
  { label: "XL", isChecked: false },
  { label: "2XL", isChecked: false },
  { label: "XXL", isChecked: false },
  { label: "3XL", isChecked: false },
]);

function updateChisp(index: number): void {
  checkboxes.value[index].isChecked = !checkboxes.value[index].isChecked;
}
</script>

<style lang="less" scoped>
.setting {
  .content(32px, 24px, initial);
  .text-s;
  border: 1px solid @grey-gradation--100;

  &__title {
    .text-lead-s;
    color: @grey-gradation--black;
    margin-bottom: 24px;
  }

  &__wrapper {
    .flex-properties(flex);
    flex-wrap: wrap;

    & > *:not(.setting__chisp:nth-last-of-type(4n)) {
      margin-right: 8px;
    }

    & > .setting__chisp:nth-of-type(-n + 4) {
      margin-bottom: 8px;
    }
  }

  .chisp {
    .text-s;
    width: calc((100% - (3 * 8px)) / 4);

    &--active {
      background: @grey-gradation--100;
      border: 1px solid @grey-gradation--100;
    }
  }
}
</style>
