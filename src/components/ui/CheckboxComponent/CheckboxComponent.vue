<template>
  <div class="checkbox">
    <input
      :id="`${uniqueId}`"
      v-model="isChecked"
      :disabled="isDisabled"
      type="checkbox"
      class="checkbox__input"
    />
    <label :for="`${uniqueId}`" class="checkbox__label">
      <slot>checkbox</slot>
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { useUniqueId } from "@/composable/useUniqueId";

import { ICCheckboxProps } from "./CheckboxComponent.types";

interface IEmits {
  (e: "updateCheckboxes", isChecked: boolean, uniqueId: number): void;
}

const props = withDefaults(defineProps<ICCheckboxProps>(), {
  index: 0,
  isChecked: false,
  disabled: false,
});
const emits = defineEmits<IEmits>();

const isDisabled = computed(() => {
  return props.disabled ? true : false;
});

const isChecked = computed({
  get: () => !!props.isChecked,
  set: (value) => {
    emits("updateCheckboxes", value, props.index);
  },
});

const { uniqueId } = useUniqueId();
</script>

<style lang="less" scoped>
.checkbox {
  .flex-properties(flex, center);
  color: @grey-gradation--200;
  transition: 0.2s;

  &__input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  &__input + &__label {
    .flex-properties(inline-flex, center);
    user-select: none;
    cursor: pointer;
  }

  &__input + &__label::before {
    content: "";
    width: 16px;
    height: 16px;
    border: 1px solid @grey-gradation--100;
    border-radius: 4px;
    background: @grey-gradation--100;
    margin-right: 8px;
  }

  /* стили при наведении курсора */
  &__input:not(:disabled):not(:checked) + &__label:hover {
    & {
      color: @grey-gradation--300;
    }

    &::before {
      background: @grey-gradation--300;
    }
  }

  /* стили для активного */
  &__input:not(:disabled):active + &__label {
    & {
      color: @grey-gradation--black;
    }

    &::before {
      background: @grey-gradation--black;
    }
  }

  /* стили для фокуса */
  &__input:focus + &__label {
    & {
      color: @grey-gradation--300;
    }

    &::before {
      background: @grey-gradation--300;
    }
  }

  /* стили для checked */
  &__input:checked + &__label {
    & {
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
      color: @grey-gradation--200;
      cursor: not-allowed;
    }

    &::before {
      border: 1px solid @grey-gradation--100;
      background: @grey-gradation--white;
    }
  }
}
</style>
