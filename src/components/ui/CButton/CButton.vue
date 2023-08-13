<template>
  <button type="button" :class="classes">
    <div v-if="$slots.icon" class="button__ico"><slot name="icon" /></div>
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { TypeCButton, ICButtonProps } from "./CButton.types";

const props = defineProps<ICButtonProps>();

const classes = computed(() => ({
  btn: true,
  "btn--primary": props.variant === TypeCButton.primary,
  "btn--secondary": props.variant === TypeCButton.secondary,
  "btn--link": props.variant === TypeCButton.link,
}));
</script>

<style lang="less" scoped>
.btn {
  transition: 0.2s;
  cursor: pointer;

  &--primary {
    .content(18px 24px, 1000px, @blue--500);
    color: @grey-gradation--white;

    /* desktop/lead S */
    font-family: Inter;
    font-size: @desktop--lead--s;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;

    &:hover {
      background: @blue--400;
    }

    &:focus {
      background: @blue--500;
    }

    &:active {
      background: @blue--500;
    }

    &:disabled {
      color: var(--grey-gradation-200, #b3b3b3);

      background: @grey-gradation--100;
    }
  }

  &--secondary {
    .content(18px 24px, 1000px);
    border: 1px solid @purple--100;

    color: @blue--500;

    /* desktop/lead S */
    font-family: Inter;
    font-size: @desktop--lead--s;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;

    &:hover {
      background: @blue--100;
      border: 1px solid @blue--100;
    }

    &:focus {
      background: @blue--100;
      border: 1px solid @purple--100;
    }

    &:active {
      background: @blue--500;
      border: 1px solid @purple--100;
    }

    &:disabled {
      color: var(--grey-gradation-200, #b3b3b3);

      background: @grey-gradation--100;
      border: 1px solid @grey-gradation--100;
    }
  }
}
</style>
