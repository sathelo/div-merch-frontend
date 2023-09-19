<template>
  <section class="setting">
    <h2 class="setting__title">{{ title }}</h2>
    <div class="setting__wrapper">
      <CheckboxComponent
        v-for="(checkbox, checkboxIndex) in checkboxes"
        :key="checkboxIndex"
        :is-checked="checkbox.isChecked"
        class="setting__checkbox"
      >
        {{ checkbox.label }}
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
  { label: "Мужской", isChecked: false },
  { label: "Женский", isChecked: false },
]);
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
}
</style>
