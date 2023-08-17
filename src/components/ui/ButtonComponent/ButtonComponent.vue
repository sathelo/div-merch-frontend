<template>
  <button
    type="button"
    :class="classes"
  >
    <div
      v-if="$slots.icon"
      class="btn__ico"
    >
      <slot name="icon" />
    </div>
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { TypesCButton, ICButtonProps } from "./ButtonComponent.types";

const props = defineProps<ICButtonProps>();

const classes = computed(() => ({
  btn: true,
  "btn--primary": props.variant === TypesCButton.primary,
  "btn--secondary": props.variant === TypesCButton.secondary,
  "btn--link": props.variant === TypesCButton.link,
}));
</script>

<style lang="less" scoped>
.btn {
  .flex-properties(flex, center, center);
  transition: 0.2s;
  cursor: pointer;

  &__ico {
    margin-right: 8px;
  }

  &--primary {
    .text-lead-s;
    .content(18px 24px, 1000px, @blue--500);
    color: @grey-gradation--white;

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
      color: @grey-gradation--200;

      background: @grey-gradation--100;
    }
  }

  &--secondary {
    .text-lead-s;
    .content(18px 24px, 1000px);
    border: 1px solid @purple--100;

    color: @blue--500;

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
      color: @grey-gradation--200;

      background: @grey-gradation--100;
      border: 1px solid @grey-gradation--100;
    }
  }

  &--link {
    .text-m;
    color: @grey-gradation--black;

    &:hover {
      color: @blue--500;
    }

    &:focus {
      color: @blue--500;
    }

    &:active {
      color: @blue--500;
    }

    &:disabled {
      color: @grey-gradation--100;
    }
  }
}
</style>
