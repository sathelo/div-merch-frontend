<template>
  <button
    class="select"
    :disabled="isDisabled"
    :class="{ 'select--active': isSelect }"
    @click="clickHandlerSelect"
  >
    <div class="select__label">
      <slot>{{ selectOptionLocal ? selectOptionLocal.value : "Label" }}</slot>
      <img :src="ArrowBottomIco" alt="arrow-bottom" />
    </div>
    <div v-if="isSelect" class="select__dropdown">
      <div class="select__options options">
        <div
          v-for="(option, optionIndex) in options"
          :key="optionIndex"
          class="options__option"
          @click="updateSelectOption(option)"
        >
          {{ option.value }}
        </div>
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import ArrowBottomIco from "/icons/arrow-bottom.svg";

import { ICDropdownProps, Option } from "./DropdownComponent.types";

interface IEmits {
  (e: "update:modelValue", v: boolean): void;
  (e: "changeSelect", v: boolean): void;
  (e: "updateSelectOption", v: Option): void;
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
const selectOption = computed(
  () => props.modelValue ?? selectOptionLocal.value,
);

function clickHandlerSelect() {
  isSelectLocal.value = !isSelectLocal.value;
  emits("changeSelect", isSelect.value);
}

function updateSelectOption(option: Option) {
  selectOptionLocal.value = option;
  emits("updateSelectOption", selectOption.value);
}
</script>

<style lang="less" scoped>
.select {
  position: relative;
  width: 100%;
  cursor: pointer;

  &__label {
    .content(10px 14px, 8px);
    .flex-properties(flex, center, space-between);
    .text-s;
    position: relative;
    z-index: 2;
    border: 1px solid @grey-gradation--100;
    color: @grey-gradation--black;

    &:hover {
      border: 1px solid @grey-gradation--200;
    }
  }

  &--active {
    .content(0, 8px 8px 0 0, @grey-gradation--white);

    & > .select__label {
      .content(10px 14px, 8px, @grey-gradation--white);
      margin-bottom: 4px;
    }
  }

  &:disabled {
    cursor: not-allowed;
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

    &__option {
      .content(10px 14px);

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
