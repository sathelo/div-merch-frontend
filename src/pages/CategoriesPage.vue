<template>
  <div class="categories">
    <div class="categories__header">
      <BreadcrumbsComponent
        :breadcrumbs="breadcrumbs"
        class="categories__breadcrumbs"
      />
      <DropdownComponent
        :model-value="isDropdown"
        :select-value="selectOption"
        :select-value-id="0"
        :options="selectOptions"
        class="categories__select"
        @update-model-value="updateModelValue"
        @update-select-value="updateSelectValue"
      />
    </div>
    <div class="categories__body">
      <CategoriesSettingsComponent class="categories__settings" />
      <CategoriesContentComponent
        :products="products"
        class="categories__content"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useStore } from "@/store/store";

import BreadcrumbsComponent from "@/components/ui/BreadcrumbsComponent/BreadcrumbsComponent.vue";
import CategoriesSettingsComponent from "@/components/Categories/CategoriesSettingsComponent.vue";
import CategoriesContentComponent from "@/components/Categories/CategoriesContentComponent.vue";
import DropdownComponent from "@/components/ui/DropdownComponent/DropdownComponent.vue";

import { Option } from "@/components/ui/DropdownComponent/DropdownComponent.types";

const store = useStore();

const isDropdown = ref(false);
const selectOption = ref<Option>();

const breadcrumbs = computed(() => store.$state.breadcrumbs);
const selectOptions = computed(() => store.$state.selectOptions);
const products = computed(() => store.$state.products);

function updateModelValue(value: boolean) {
  isDropdown.value = value;
}

function updateSelectValue(option: Option | undefined) {
  selectOption.value = option;
}
</script>

<style lang="less" scoped>
.categories {
  position: relative;
  .content(40px, 40px, @grey-gradation--white);
  width: 100%;
  height: 100%;

  &__header,
  &__body {
    .flex-properties(flex, initial, space-between);
  }

  &__select {
    position: absolute;
    top: 40px;
    right: 40px;
    width: 100%;
    max-width: 174px;
  }

  & > :not(&__wrapper:last-of-type) {
    margin-bottom: 40px;
  }
}
</style>
