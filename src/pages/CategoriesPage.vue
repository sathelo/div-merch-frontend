<template>
  <page class="categories">
    <div class="categories__wrapper">
      <CategoriesBreadcrumbsComponent class="categories__breadcrumbs" />
      <CategoriesSelectComponent class="categories__select" />
    </div>
    <div class="categories__wrapper">
      <CategoriesSettingsComponent class="categories__settings" />
      <CategoriesContentComponent class="categories__content" />
    </div>
  </page>
</template>

<script setup lang="ts">
import CategoriesBreadcrumbsComponent from "@/components/Categories/CategoriesBreadcrumbsComponent.vue";
import CategoriesSelectComponent from "@/components/Categories/CategoriesSelectComponent.vue";
import CategoriesSettingsComponent from "@/components/Categories/CategoriesSettingsComponent.vue";
import CategoriesContentComponent from "@/components/Categories/CategoriesContentComponent.vue";
</script>

<style lang="less" scoped>
.categories {
  .page;
  .content(40px, 32px, @grey-gradation--white);
  width: 100%;
  height: 100%;

  &__wrapper {
    .flex-properties(flex, initial, space-between);
  }
}
</style>
