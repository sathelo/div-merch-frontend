<template>
  <button
    type="button"
    class="chisp"
    :disabled="isDisabled"
    @click="clickHandler"
  >
    <slot>chisp</slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { ICChispProps } from "./ChispComponent.types";

interface IEmits {
  (e: "updateChisp", index: number): void;
}

const props = withDefaults(defineProps<ICChispProps>(), {
  index: 0,
  disabled: false,
});
const emits = defineEmits<IEmits>();

const isDisabled = computed(() => {
  return props.disabled ? true : false;
});

function clickHandler() {
  emits("updateChisp", props.index);
}
</script>

<style lang="less" scoped>
.chisp {
  .flex-properties(flex, center, center);
  .content(10px 14px, 8px);
  border: 1px solid @grey-gradation--100;
  user-select: none;
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
