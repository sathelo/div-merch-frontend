<template>
  <div class="chisp">
    <input
      :id="uniqueId"
      v-model="isChecked"
      type="checkbox"
      class="chisp__checked"
      :value="id"
      :disabled="isDisabled"
    />
    <label class="chisp__label" :for="uniqueId">
      <slot>chisp</slot>
    </label>
  </div>
</template>

<script setup lang="ts" generic="T extends boolean | unknown[]">
import { computed, ref } from "vue";

import { getUniqueId } from "@/utils/uniqueId";

import { ICChispProps } from "./ChispComponent.types";

interface IEmits {
  (e: "update:modelValue", v: T): void;
  (e: "change", v: T): void;
}

const props = withDefaults(defineProps<ICChispProps<T>>(), {
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
.chisp {
  position: relative;

  &__checked {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  &__label {
    .flex-properties(flex, center, center);
    .content(10px 14px, 8px);
    .text-s;
    color: @grey-gradation--black;
    border: 1px solid @grey-gradation--100;
    user-select: none;
    transition: 0.2s;
    cursor: pointer;
  }

  /* стили при наведении курсора */
  &__checked:not(:disabled):not(:checked) + &__label:hover {
    border: 1px solid @grey-gradation--200;
  }

  /* стили для активного */
  &__checked:not(:disabled):active + &__label {
    background: @grey-gradation--100;
    border: 1px solid @grey-gradation--100;
  }

  /* стили для фокуса */
  &__checked:focus + &__label {
    border: 1px solid @grey-gradation--200;
  }

  /* стили для checked */
  &__checked:checked + &__label {
    background: @grey-gradation--100;
    border: 1px solid @grey-gradation--100;
  }

  /* стили для disabled */
  &__checked:disabled + &__label {
    color: @grey-gradation--200;
    background: @grey-gradation--100;
    border: 1px solid @grey-gradation--100;
    cursor: not-allowed;
  }
}
</style>
