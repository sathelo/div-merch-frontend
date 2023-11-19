<template>
  <section class="setting">
    <h2 class="setting__title">{{ title }}</h2>
    <div class="setting__wrapper">
      <CheckboxComponent
        v-for="(checkbox, checkboxIndex) in checkboxes"
        :key="checkboxIndex"
        v-model="checkbox.isChecked"
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

import {
  useClothRouteQuery,
  EQueriesCloth,
} from "@/utils/query/useClothRouteQuery";

interface IProps {
  title: string;
}

defineProps<IProps>();

const male = useClothRouteQuery(EQueriesCloth.male);
const female = useClothRouteQuery(EQueriesCloth.female);

const checkboxes = ref([
  { label: "Мужской", isChecked: male },
  { label: "Женский", isChecked: female },
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
