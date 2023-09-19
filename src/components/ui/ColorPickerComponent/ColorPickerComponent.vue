<template>
  <div :style="{ background: bg }" class="color-picker">
    <input v-model="isChecked" class="color-picker__checkbox" type="checkbox" />
    <img
      v-if="isChecked"
      class="color-picker__check"
      :src="types"
      alt="check"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import CheckLowContrastIco from "/icons/check-low-contrast.svg";
import CheckHighContrastIco from "/icons/check-high-contrast.svg";

import { EColorPickerType } from "./ColorPickerComponent.enums";

import { ICColorProps } from "./ColorPickerComponent.types";

interface IEmits {
  (e: "update:modelValue", v: boolean): void;
  (e: "change", v: boolean): void;
}

const props = withDefaults(defineProps<ICColorProps>(), {
  type: EColorPickerType.low,
  bg: "#666666",
});
const emits = defineEmits<IEmits>();

const types = computed(() =>
  props.type === EColorPickerType.low
    ? CheckLowContrastIco
    : CheckHighContrastIco,
);

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
.color-picker {
  .flex-properties(flex, center, center);
  position: relative;
  z-index: 1;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  transition: 0.2s;
  overflow: hidden;

  &__checkbox {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }

  &__check {
    background-repeat: no-repeat;
    background-position: center;
    user-select: none;
    pointer-events: none;
  }
}
</style>
