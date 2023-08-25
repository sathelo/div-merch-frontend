<template>
  <div :class="classes" class="checkbox">
    <input
      :id="`${uniqueId}`"
      :disabled="isDisabled"
      type="checkbox"
      class="checkbox__input"
    />
    <label :for="`${uniqueId}`" class="checkbox__label"><slot /></label>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { ICCheckboxProps } from "./CheckboxComponent.types";

import { useUniqueId } from "@/composable/useUniqueId";

const props = defineProps<ICCheckboxProps>();

const classes = computed(() => ({
  [`${props.size}`]: props.size,
}));

const isDisabled = computed(() => {
  return props.disabled ? true : false;
});

const { uniqueId } = useUniqueId();
</script>

<style lang="less" scoped>
.checkbox {
  .flex-properties(flex, center);
  .text-s;
  color: @grey-gradation--200;
  transition: 0.2s;
  cursor: pointer;

  &__input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  &__input + &__label {
    .flex-properties(inline-flex, center);
    user-select: none;
  }

  &__input + &__label::before {
    content: "";
    width: 16px;
    height: 16px;
    border: 1px solid @grey-gradation--100;
    border-radius: 4px;
    background: @grey-gradation--100;
    transition: 0.2s;
    margin-right: 8px;
    cursor: pointer;

    display: inline-block;
    flex-shrink: 0;
    flex-grow: 0;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }

  /* стили при наведении курсора */
  &__input:not(:disabled):not(:checked) + &__label:hover::before {
    background: @grey-gradation--300;
  }

  &__label:hover {
    .text-s;
    color: @grey-gradation--300;
  }

  /* стили для активного */
  &__input:not(:disabled):active + &__label::before {
    background: @grey-gradation--black;
  }

  &__label:active {
    .text-s;
    color: @grey-gradation--black;
  }

  /* стили для фокуса */
  &__input:focus + &__label::before {
    background: @grey-gradation--300;
  }

  &__label:focus {
    .text-s;
    color: @grey-gradation--300;
  }

  /* стили для находящегося в фокусе и не checked */
  &__input:focus:not(:checked) + &__label::before {
    border-color: #80bdff;
  }

  /* стили для checked */
  &__input:checked + &__label::before {
    border-color: #0b76ef;
    background-color: #0b76ef;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  }

  /* стили для disabled */
  &__input:disabled + &__label::before {
    background-color: #e9ecef;
  }

  // &:focus {
  //   .text-s;
  //   color: @grey-gradation--300;

  //   .checkbox__check {
  //     background: @grey-gradation--300;
  //   }
  // }

  // &:disabled {
  //   .text-s;
  //   color: @grey-gradation--200;

  //   .checkbox__check {
  //     border: 1px solid @grey-gradation--100;
  //     background: @grey-gradation--white;
  //   }
  // }
}
</style>
