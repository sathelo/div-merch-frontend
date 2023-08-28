<template>
  <div :class="classes" class="checkbox">
    <input
      :id="`${uniqueId}`"
      v-model="isChecked"
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

interface IEmits {
  (e: "updateCheckboxes", isChecked: boolean, index: number): void;
}

const props = defineProps<ICCheckboxProps>();
const emits = defineEmits<IEmits>();

const classes = computed(() => ({
  [`${props.size}`]: props.size,
}));

const isDisabled = computed(() => {
  return props.disabled ? true : false;
});

const isChecked = computed({
  get: () => props.isChecked || false,
  set: (value) => {
    emits("updateCheckboxes", value, props.index);
  },
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
    margin-right: 8px;
    cursor: pointer;
  }

  /* стили при наведении курсора */
  &__input:not(:disabled):not(:checked) + &__label:hover {
    & {
      .text-s;
      color: @grey-gradation--300;
    }

    &::before {
      background: @grey-gradation--300;
    }
  }

  /* стили для активного */
  &__input:not(:disabled):active + &__label {
    & {
      .text-s;
      color: @grey-gradation--black;
    }

    &::before {
      background: @grey-gradation--black;
    }
  }

  /* стили для фокуса */
  &__input:focus + &__label {
    & {
      .text-s;
      color: @grey-gradation--300;
    }

    &::before {
      background: @grey-gradation--300;
    }
  }

  /* стили для checked */
  &__input:checked + &__label {
    & {
      .text-s;
      color: @grey-gradation--black;
    }

    &::before {
      .flex-properties(flex, center, center);
      background: @grey-gradation--black;
      background-image: url("/icons/check.svg");
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  /* стили для disabled */
  &__input:disabled + &__label {
    & {
      .text-s;
      color: @grey-gradation--200;
    }

    &::before {
      border: 1px solid @grey-gradation--100;
      background: @grey-gradation--white;
    }
  }
}
</style>
