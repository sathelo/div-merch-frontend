<template>
  <section class="setting">
    <h2 class="setting__title">{{ title }}</h2>
    <div class="setting__wrapper">
      <CheckboxComponent
        v-for="(checkbox, checkboxIndex) in checkboxes"
        :id="checkbox.type"
        :key="checkboxIndex"
        v-model="categories"
        class="setting__checkbox"
      >
        {{ checkbox.label }}
      </CheckboxComponent>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  EQueriesCategory,
  useCategoriesRouteQuery,
} from "@/utils/query/useCategoriesRouteQuery";

import CheckboxComponent from "@/components/ui/CheckboxComponent/CheckboxComponent.vue";

interface IProps {
  title: string;
}

defineProps<IProps>();

const categories = useCategoriesRouteQuery();

const checkboxes = ref([
  { label: "Анораки", type: EQueriesCategory.anoraks },
  { label: "Свитшоты", type: EQueriesCategory.sweatshirts },
  { label: "Брюки", type: EQueriesCategory.trousers },
  { label: "Носки", type: EQueriesCategory.socks },
  { label: "Ветровки", type: EQueriesCategory.windbreakers },
  { label: "Браслеты", type: EQueriesCategory.bracelets },
  { label: "Брелоки", type: EQueriesCategory.keychains },
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
