<template>
  <component
    :is="tag"
    :href="ETagButton.a === tag && href ? href : null"
    :target="ETagButton.a === tag && target ? target : null"
    type="button"
    :class="classes"
    :disabled="isDisabled"
  >
    <div v-if="$slots.icon" class="btn__ico">
      <slot name="icon" />
    </div>
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { ECButtonType } from "./ButtonComponent.enums";

import { ETagButton, ICButtonProps } from "./ButtonComponent.types";

const props = withDefaults(defineProps<ICButtonProps>(), {
  tag: ETagButton.btn,
  disabled: false,
  variant: ECButtonType.primary,
  target: "_self",
});

const classes = computed(() => ({
  btn: true,
  "btn--primary": props.variant === ECButtonType.primary,
  "btn--secondary": props.variant === ECButtonType.secondary,
  "btn--link": props.variant === ECButtonType.link,
  "btn--link-crumb": props.variant === ECButtonType.linkCrumb,
  "btn--round": props.variant === ECButtonType.round,
}));

const isDisabled = computed(() => {
  return props.disabled ? true : false;
});
</script>

<style lang="less" scoped>
.btn {
  .flex-properties(flex, center, center);
  .text-lead-s;
  transition: 0.2s;
  cursor: pointer;

  &__ico {
    user-select: none;
  }

  &--primary > &__ico {
    margin-right: 8px;
  }

  &--primary {
    .content(18px 24px, 1000px, @blue--500);
    color: @grey-gradation--white;

    &:hover {
      background: #2505a6;
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
      cursor: not-allowed;
    }
  }

  &--secondary {
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
      background: @blue--100;
      border: 1px solid @purple--100;
    }

    &:disabled {
      color: @grey-gradation--200;
      background: @grey-gradation--100;
      border: 1px solid @grey-gradation--100;
      cursor: not-allowed;
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
      cursor: not-allowed;
    }
  }

  &--link-crumb {
    .text-s;
    color: @grey-gradation--200;

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
      cursor: not-allowed;
    }
  }

  &--round {
    .content(16px, 50%, @grey-gradation--100);

    &:hover {
      background: @grey-gradation--white;
    }

    &:focus {
      background: @grey-gradation--white;
    }

    &:active {
      background: @grey-gradation--white;
    }

    &:disabled {
      color: @grey-gradation--300;
      background: @grey-gradation--white;
      cursor: not-allowed;
    }
  }
}
</style>
