<template>
  <div class="checkbox">
    <input
      :id="uniqueId"
      v-model="isChecked"
      type="checkbox"
      class="checkbox__checked"
      :value="id"
      :disabled="isDisabled"
    />
    <label class="checkbox__label" :for="uniqueId">
      <slot>checkbox</slot>
    </label>
  </div>
</template>

<script setup lang="ts" generic="T extends boolean | unknown[]">
import { computed, ref } from "vue";

import { getUniqueId } from "@/utils/uniqueId";

import { ICCheckboxProps } from "./CheckboxComponent.types";

type IEmits = {
  (e: "update:modelValue", v: T): void;
  (e: "change", v: T): void;
};

const props = withDefaults(defineProps<ICCheckboxProps<T>>(), {
  disabled: false,
});
const emits = defineEmits<IEmits>();

const { uniqueId } = getUniqueId();

const isDisabled = computed(() => {
  return props.disabled ? true : false;
});

const isCheckedLocal = ref<T>(false);

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
  position: relative;

  &__checked {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  &__checked + &__label {
    .flex-properties(inline-flex, center);
    .text-s;
    color: @grey-gradation--200;
    user-select: none;
    transition: 0.2s;
    cursor: pointer;
  }

  &__checked + &__label::before {
    content: "";
    width: 16px;
    height: 16px;
    border: 1px solid @grey-gradation--100;
    border-radius: 4px;
    background: @grey-gradation--100;
    margin-right: 8px;
  }

  /* стили при наведении курсора */
  &__checked:not(:disabled):not(:checked) + &__label:hover {
    color: @grey-gradation--300;

    &::before {
      background: @grey-gradation--300;
    }
  }

  /* стили для активного */
  &__checked:not(:disabled):active + &__label {
    color: @grey-gradation--black;

    &::before {
      background: @grey-gradation--black;
    }
  }

  /* стили для фокуса */
  &__checked:focus + &__label {
    color: @grey-gradation--300;

    &::before {
      background: @grey-gradation--300;
    }
  }

  /* стили для checked */
  &__checked:checked + &__label {
    color: @grey-gradation--black;

    &::before {
      .flex-properties(flex, center, center);
      background: @grey-gradation--black;
      background-image: url("/icons/check-low-contrast.svg");
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  /* стили для disabled */
  &__checked:disabled + &__label {
    color: @grey-gradation--200;
    cursor: not-allowed;

    &::before {
      border: 1px solid @grey-gradation--100;
      background: @grey-gradation--white;
    }
  }
}
</style>
