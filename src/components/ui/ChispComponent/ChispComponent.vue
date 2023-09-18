<template>
  <div class="chisp">
    <input
      :id="uid"
      v-model="isChecked"
      type="checkbox"
      class="chisp__checked"
      :disabled="isDisabled"
    />
    <label class="chisp__label" :for="uid">
      <slot>chisp {{ isChecked }} </slot>
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import { ICChispProps } from "./ChispComponent.types";

interface IEmits {
  (e: "update:modelValue", v: boolean): void;
  (e: "change", v: boolean): void;
}

const props = withDefaults(defineProps<ICChispProps>(), {
  disabled: false,
});
const emits = defineEmits<IEmits>();

const uid = ref(Math.random().toString(36).substr(2, 9));

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
.chisp {
  position: relative;
  z-index: 1;

  &__checked {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }

  &__label {
    user-select: none;
    pointer-events: none;
  }

  &__checked:disabled + &__label:hover {
    background: red;
  }
}

// .chisp {
//   .flex-properties(flex, center, center);
//   .content(10px 14px, 8px);
//   .text-s;
//   // position: relative;
//   // z-index: 1;
//   border: 1px solid @grey-gradation--100;
//   transition: 0.2s;
//   // overflow: hidden;

//   &__checked:checked  {
//     background: @grey-gradation--100;
//     border: 1px solid @grey-gradation--100;
//     transition: 0.2s;
//   }

//   &:hover {
//     color: @grey-gradation--black;
//     border: 1px solid @grey-gradation--200;
//   }

//   &:focus {
//     color: @grey-gradation--black;
//     border: 1px solid @grey-gradation--200;
//   }

//   &:active {
//     color: @grey-gradation--black;
//     background: @grey-gradation--100;
//     border: 1px solid @grey-gradation--100;
//   }

//   &__checked:disabled {
//     color: @grey-gradation--200;
//     background: @grey-gradation--100;
//     border: 1px solid @grey-gradation--100;
//     cursor: not-allowed;
//   }

//   &__checked {
//     position: absolute;
//     z-index: -1;
//     width: 100%;
//     height: 100%;
//     opacity: 0;
//     cursor: pointer;
//   }

//   &__label {
//     user-select: none;
//     pointer-events: none;
//   }
// }
</style>
