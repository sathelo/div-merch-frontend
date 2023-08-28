<template>
  <button type="button" :class="classes" :disabled="isDisabled">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { ICChispProps } from "./ChispComponent.types";

const props = defineProps<ICChispProps>();

const classes = computed(() => ({
  btn: true,
  [`${props.size}`]: props.size,
}));

const isDisabled = computed(() => {
  return props.disabled ? true : false;
});
</script>

<style lang="less" scoped>
.btn {
  .flex-properties(flex, center, center);
  .content(10px 14px, 8px);
  .text-s;
  border: 1px solid @grey-gradation--100;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    color: @grey-gradation--black;
    border: 1px solid @grey-gradation--200;
  }

  &:focus {
    color: @grey-gradation--black;
    border: 1px solid @grey-gradation--200;
  }

  &:active {
    color: @grey-gradation--black;
    background: @grey-gradation--100;
    border: 1px solid @grey-gradation--100;
  }

  &:disabled {
    color: @grey-gradation--200;
    background: @grey-gradation--100;
    border: 1px solid @grey-gradation--100;
    cursor: not-allowed;
  }
}
</style>
