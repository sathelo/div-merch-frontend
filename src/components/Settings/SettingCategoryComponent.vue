<template>
  <section class="setting">
    <h2 class="setting__title">{{ title }}</h2>
    <div class="setting__wrapper">
      <CheckboxComponent
        v-for="({ label, isChecked }, checkboxIndex) in checkboxes"
        :key="checkboxIndex"
        :index="checkboxIndex"
        :is-checked="isChecked"
        class="setting__checkbox"
        @update-checkbox="updateCheckbox"
      >
        {{ label }}
      </CheckboxComponent>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

import CheckboxComponent from "@/components/ui/CheckboxComponent/CheckboxComponent.vue";

interface IProps {
  title: string;
}

defineProps<IProps>();

const checkboxes = ref([
  { label: "Анораки", isChecked: false },
  { label: "Свитшоты", isChecked: false },
  { label: "Брюки", isChecked: false },
  { label: "Носки", isChecked: false },
  { label: "Ветровки", isChecked: false },
  { label: "Браслеты", isChecked: false },
  { label: "Брелоки", isChecked: false },
]);

function updateCheckbox(isChecked: boolean, index: number): void {
  checkboxes.value[index].isChecked = isChecked;
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
    flex-direction: column;

    & > *:not(.setting__checkbox:last-of-type) {
      margin-bottom: 12px;
    }
  }

  &__checkbox {
    .text-s;
  }
}
</style>
