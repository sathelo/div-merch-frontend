<template>
  <div
    class="input"
    :class="{
      'input--focused': isFocus,
      'input--error': errMsg,
      'input--disabled': disabled,
    }"
  >
    <label
      class="input__label"
      :class="{ 'input__label--focused': isFocus || value.length }"
    >
      {{ label }}
    </label>
    <input
      v-model="value"
      type="text"
      class="input__field"
      :disabled="disabled"
      @focus="setFocus(true)"
      @blur="setFocus(false)"
    />
    <div v-if="errMsg && !isFocus && !disabled" class="input__error">
      {{ errMsg }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

import { ICInputProps } from "./InputComponent.types";

interface IEmits {
  (e: "update:modelValue", v: string): void;
  (e: "change", v: string): void;
}

const props = withDefaults(defineProps<ICInputProps>(), {
  label: "Label",
  disabled: false,
});
const emits = defineEmits<IEmits>();

const valueLocal = ref("");

const value = computed({
  get: () => props.modelValue ?? valueLocal.value,
  set: (value) => {
    valueLocal.value = value;
    emits("update:modelValue", value);
    emits("change", value);
  },
});

const isFocus = ref(false);

function setFocus(v: boolean) {
  isFocus.value = v;
}
</script>

<style lang="less" scoped>
.input {
  .content(10px 16px, 1000px, @grey-gradation--100);
  .flex-properties(flex, center);
  position: relative;
  border: 1px solid @grey-gradation--100;
  width: 100%;
  height: 52px;

  &:hover {
    background: transparent;
    border: 1px solid @grey-gradation--200;
  }

  &--focused,
  &--focused:hover {
    background: transparent;
    border: 1px solid @blue--500;
  }

  &__error {
    position: absolute;
    bottom: 0;
    left: 0;

    color: #f12248;
    text-align: left;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px;

    transform: translateY(calc(100% + 2px));
  }

  &--error,
  &--error:hover {
    background: transparent;
    border: 1px solid #f12248;
  }

  &--disabled,
  &--disabled:hover {
    background: @grey-gradation--100;
    border: 1px solid @grey-gradation--100;
  }

  &__label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    user-select: none;
    pointer-events: none;
    transition: 0.2s;

    &--focused {
      top: 10px;
      color: @grey-gradation--400;
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: 12px;
      transform: translateY(0);
    }
  }

  &__field {
    .text-body;
    color: @grey-gradation--black;
    width: 100%;
    height: 100%;
    padding-top: 12px;
  }
}
</style>
