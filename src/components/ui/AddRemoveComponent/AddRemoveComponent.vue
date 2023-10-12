<template>
  <button type="button" class="btn">
    <img class="btn__ico" :src="ico" :alt="variant" />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

import PlusIco from "/icons/plus.svg";
import MinusIco from "/icons/minus.svg";

import { ECAddRemoveType } from "./AddRemoveComponent.enums";

import { ICAddRemoveProps } from "./AddRemoveComponent.types";

const props = withDefaults(defineProps<ICAddRemoveProps>(), {
  variant: ECAddRemoveType.add,
});

const ico = computed(() => {
  return props.variant === ECAddRemoveType.add ? PlusIco : MinusIco;
});
</script>

<style lang="less" scoped>
.btn {
  .content(12px, 1000px, @grey-gradation--white);
  .flex-properties(flex, center, center);
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &__ico {
    user-select: none;
  }
}
</style>
