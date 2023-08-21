<template>
  <section class="setting">
    <h2 class="setting__title">{{ title }}</h2>
    <ElCheckboxGroup v-model="checkedFloor" class="setting__wrapper">
      <ElCheckbox label="Мужской" class="setting__checkbox" />
      <ElCheckbox label="Женский" class="setting__checkbox" />
    </ElCheckboxGroup>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { ElCheckbox, ElCheckboxGroup } from "element-plus";

interface IProps {
  title: string;
}

defineProps<IProps>();

const checkedFloor = ref([]);
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
  }
}
</style>
