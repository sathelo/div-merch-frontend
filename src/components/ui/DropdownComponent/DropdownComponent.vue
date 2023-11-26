<template>
  <div
    ref="select"
    class="select"
    :class="{ 'select--active': isSelect && !isDisabled }"
  >
    <button
      :disabled="isDisabled"
      class="select__label"
      @click="clickHandlerSelect"
    >
      <slot>{{ selectOption ? selectOption.value : "Label" }}</slot>
      <img :src="ArrowBottomIco" alt="arrow-bottom" />
    </button>
    <div v-if="isSelect && !isDisabled" class="select__options options">
      <div
        v-for="(option, optionIndex) in options"
        :key="optionIndex"
        class="options__option"
        :class="{
          'options__option--select':
            JSON.stringify(option) === JSON.stringify(selectOption),
        }"
        @click="clickSelectOption(option)"
      >
        {{ option.value }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" generic="T">
import { computed, ref } from "vue";
import { onClickOutside } from "@vueuse/core";

import ArrowBottomIco from "/icons/arrow-bottom.svg";

import { ICDropdownProps, TOption } from "./DropdownComponent.types";

interface IEmits {
  (e: "update:modelValue", v: boolean): void;
  (e: "update:selectValue", v: T): void;
}

const props = withDefaults(defineProps<ICDropdownProps<T>>(), {
  disabled: false,
});
const emits = defineEmits<IEmits>();

const select = ref(null);
const isSelectLocal = ref(false);
const selectOptionLocal = ref<T>();

onClickOutside(select, () => {
  isSelectLocal.value = !isSelectLocal.value;
  emits("update:modelValue", false);
});

const isDisabled = computed(() => {
  return props.disabled ? true : false;
});

const isSelect = computed(() => props.modelValue ?? isSelectLocal.value);

const selectOption = computed<TOption<T> | undefined>(() =>
  props.options.find(
    (option) => option.id === (props.selectValue ?? selectOptionLocal.value),
  ),
);

function clickHandlerSelect() {
  isSelectLocal.value = !isSelectLocal.value;
  emits("update:modelValue", isSelectLocal.value);
}

function clickSelectOption(option: TOption<T>) {
  selectOptionLocal.value = option.id;
  isSelectLocal.value = !isSelectLocal.value;
  emits("update:selectValue", selectOptionLocal.value);
  emits("update:modelValue", isSelectLocal.value);
}
</script>

<style lang="less" scoped>
.select {
  .content(0, 8px);
  width: 100%;
  overflow: hidden;

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
    .content(0, 8px, @grey-gradation--white);
    box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.15);

    & > .select__label {
      .content(10px 14px, 8px, @grey-gradation--white);
      margin-bottom: 4px;
    }
  }

  .options {
    .content(0, 0 0 8px 8px, @grey-gradation--white);
    .text-s;
    color: @grey-gradation--black;
    text-align: left;
    width: inherit;
    max-height: 104px;
    overflow-y: scroll;

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

      &--select {
        background: @grey-gradation--100;
      }
    }
  }

  ::-webkit-scrollbar {
    width: 6px;
    background: @grey-gradation--white;
  }

  ::-webkit-scrollbar-thumb {
    border: 2px solid @grey-gradation--white;
    border-radius: 24px;
    background: @grey-gradation--100;
  }
}
</style>
