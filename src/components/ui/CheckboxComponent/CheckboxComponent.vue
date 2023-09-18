<template>
  <button
    :class="{ 'checkbox--active': isChecked }"
    :disabled="isDisabled"
    class="checkbox"
  >
    <input v-model="isChecked" type="checkbox" class="checkbox__checked" />
    <label class="checkbox__label">
      <slot>checkbox</slot>
    </label>
  </button>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import { ICCheckboxProps } from "./CheckboxComponent.types";

interface IEmits {
  (e: "update:modelValue", v: boolean): void;
  (e: "change", v: boolean): void;
}

const props = withDefaults(defineProps<ICCheckboxProps>(), {
  disabled: false,
});
const emits = defineEmits<IEmits>();

const isDisabled = computed(() => {
  return props.disabled ? true : false;
});

const isCheckedLocal = ref(false);

const isChecked = computed({
  get: () => props.modelValue ?? isCheckedLocal.value,
  set: (value) => {
    isCheckedLocal.value = value;
    emits("update:modelValue", value);
    emits("change", value);
  },
});
</script>

<style lang="less" scoped>
.checkbox {
  .flex-properties(flex, center);
  .text-s;
  position: relative;
  z-index: 1;
  color: @grey-gradation--200;
  transition: 0.2s;
  overflow: hidden;

  &--active {
    color: @grey-gradation--black;

    .checkbox__label::before {
      border: 1px solid @grey-gradation--black;
      background: @grey-gradation--black url("/icons/check.svg") center center
        no-repeat;
    }
  }

  &__checked {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }

  &__label {
    .flex-properties(flex);
    user-select: none;
    pointer-events: none;

    &::before {
      .content(7px, 4px, @grey-gradation--100);
      content: "";
      border: 1px solid @grey-gradation--100;
      transition: 0.2s;
      margin-right: 8px;
    }
  }

  &:hover {
    color: @grey-gradation--300;

    .checkbox__label::before {
      border: 1px solid @grey-gradation--300;
      background: @grey-gradation--300;
    }
  }

  &:focus {
    color: @grey-gradation--300;

    .checkbox__label::before {
      border: 1px solid @grey-gradation--300;
      background: @grey-gradation--300;
    }
  }

  &:active {
    color: @grey-gradation--black;

    .checkbox__label::before {
      border: 1px solid @grey-gradation--black;
      background: @grey-gradation--black;
    }
  }

  &:disabled {
    color: @grey-gradation--200;

    .checkbox__label::before {
      border: 1px solid @grey-gradation--100;
      background: @grey-gradation--white;
    }
  }
}
</style>
