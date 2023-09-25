<template>
  <div class="select" :class="{ 'select--active': isSelect && !isDisabled }">
    <button
      :disabled="isDisabled"
      class="select__label"
      @click="clickHandlerSelect"
    >
      <slot>{{ selectOption ? selectOption.value : "Label" }}</slot>
      <img :src="ArrowBottomIco" alt="arrow-bottom" />
    </button>
    <div v-if="isSelect && !isDisabled" class="select__dropdown">
      <div class="select__options options">
        <div
          v-for="(option, optionIndex) in options"
          :key="optionIndex"
          class="options__option"
          @click="clickSelectOption(option)"
        >
          {{ option.value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import ArrowBottomIco from "/icons/arrow-bottom.svg";

import { ICDropdownProps, Option } from "./DropdownComponent.types";

interface IEmits {
  (e: "updateModelValue", v: boolean): void;
  (e: "updateSelectValue", v: Option | undefined): void;
}

const props = withDefaults(defineProps<ICDropdownProps>(), {
  disabled: false,
  options: () => [
    { value: "Option 1" },
    { value: "Option 2" },
    { value: "Option 3" },
    { value: "Option 4" },
    { value: "Option 5" },
    { value: "Option 6" },
  ],
});
const emits = defineEmits<IEmits>();

const isSelectLocal = ref(false);
const selectOptionLocal = ref<Option>();

const isDisabled = computed(() => {
  return props.disabled ? true : false;
});

const isSelect = computed(() => props.modelValue ?? isSelectLocal.value);
const selectOption = computed(() => {
  if (props.selectValue) return props.selectValue;
  if (props.options.length && props.selectValueId !== undefined)
    return props.options[props.selectValueId];
  return selectOptionLocal.value;
});

function clickHandlerSelect() {
  isSelectLocal.value = !isSelectLocal.value;
  emits("updateModelValue", isSelectLocal.value);
}

function clickSelectOption(option: Option) {
  selectOptionLocal.value = option;
  isSelectLocal.value = !isSelectLocal.value;
  emits("updateSelectValue", selectOptionLocal.value);
  emits("updateModelValue", isSelectLocal.value);
}
</script>

<style lang="less" scoped>
.select {
  position: relative;
  width: 100%;

  &__label {
    .content(10px 14px, 8px);
    .flex-properties(flex, center, space-between);
    .text-s;
    position: relative;
    z-index: 2;
    width: 100%;
    border: 1px solid @grey-gradation--100;
    color: @grey-gradation--black;
    cursor: pointer;

    &:hover {
      border: 1px solid @grey-gradation--200;
    }

    &:disabled {
      border: 1px solid @grey-gradation--100;
      background: @grey-gradation--100;
      cursor: not-allowed;
    }
  }

  &--active {
    .content(0, 8px 8px 0 0, @grey-gradation--white);

    & > .select__label {
      .content(10px 14px, 8px, @grey-gradation--white);
    }
  }

  &__dropdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .options {
    .content(0, 0 0 8px 8px, @grey-gradation--white);
    .text-s;
    position: absolute;
    top: 0;
    left: 0;
    color: @grey-gradation--black;
    text-align: left;
    width: inherit;
    max-height: 104px;
    overflow-y: scroll;
    margin-top: 4px;

    &__option {
      .content(10px 14px);
      cursor: pointer;

      &:not(:last-child) {
        margin-bottom: 2px;
      }

      &:hover,
      &:active {
        background: @grey-gradation--100;
      }
    }
  }
}
</style>
