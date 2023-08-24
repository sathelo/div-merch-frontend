<template>
  <label :class="classes" class="checkbox">
    <input :disabled="isDisabled" type="checkbox" class="checkbox__input" />
    <span class="checkbox__check"></span>
    <p class="checkbox__text"><slot /></p>
  </label>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { ICCheckboxProps } from "./CheckboxComponent.types";

const props = defineProps<ICCheckboxProps>();

const classes = computed(() => ({
  [`${props.size}`]: props.size,
}));

const isDisabled = computed(() => {
  return props.disabled ? true : false;
});
</script>

<style lang="less" scoped>
.checkbox {
  .flex-properties(flex, center);
  .text-s;
  color: @grey-gradation--200;
  transition: 0.2s;
  cursor: pointer;

  &__input {
    display: none;
  }

  &__check {
    width: 16px;
    height: 16px;
    border: 1px solid @grey-gradation--100;
    border-radius: 4px;
    background: @grey-gradation--100;
    transition: 0.2s;
    cursor: pointer;
  }

  &__check + &__text {
    margin-left: 8px;
  }

  &:hover {
    .text-s;
    color: @grey-gradation--300;

    .checkbox__check {
      background: @grey-gradation--300;
    }
  }

  &:focus {
    .text-s;
    color: @grey-gradation--300;

    .checkbox__check {
      background: @grey-gradation--300;
    }
  }

  &:active {
    .text-s;
    color: @grey-gradation--black;

    .checkbox__check {
      background: @grey-gradation--black;
    }
  }

  &:disabled {
    .text-s;
    color: @grey-gradation--200;

    .checkbox__check {
      border: 1px solid @grey-gradation--100;
      background: @grey-gradation--white;
    }
  }

  &__check:after {
    content: "\u2714";

    width: 16px;
    height: 16px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  input:checked &__check:after {
    display: block;
  }
}
</style>
