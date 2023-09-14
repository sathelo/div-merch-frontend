<template>
  <button
    type="button"
    :class="classes"
    :style="{ background: bg }"
    @click="clickHandler"
  >
    <img
      v-if="isChecked"
      :class="`${classes}--active`"
      :src="types"
      alt="check"
    />
  </button>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import CheckLowContrastIco from "/icons/check-low-contrast.svg";
import CheckHighContrastIco from "/icons/check-high-contrast.svg";

import { EColorPickerType } from "@/components/ui/ColorPickerComponent/ColorPickerComponent.enums";

import { ICColorProps } from "@/components/ui/ColorPickerComponent/ColorPickerComponent.types";

interface IEmits {
  (e: "updateColor", index: number): void;
}

const props = withDefaults(defineProps<ICColorProps>(), {
  index: 0,
  type: EColorPickerType.low,
  bg: "#666666",
});
const emits = defineEmits<IEmits>();

const isChecked = ref(false);

const classes = computed(() => ({
  "color-picker": true,
}));

const types = computed(() =>
  props.type === EColorPickerType.low
    ? CheckLowContrastIco
    : CheckHighContrastIco,
);

function clickHandler() {
  isChecked.value = !isChecked.value;
  emits("updateColor", props.index);
}
</script>

<style lang="less" scoped>
.color-picker {
  .flex-properties(flex, center, center);
  width: 24px;
  height: 24px;
  border-radius: 12px;
  transition: 0.2s;
  cursor: pointer;

  &--active {
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>
