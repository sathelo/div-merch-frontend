<template>
  <ul
    itemscope
    itemtype="https://schema.org/BreadcrumbList"
    class="breadcrumbs"
  >
    <li
      v-for="(breadcrumb, breadcrumbIndex) in breadcrumbs"
      :key="breadcrumbIndex"
      itemprop="itemListElement"
      itemtype="https://schema.org/ListItem"
      itemscope
      class="breadcrumbs__crumb crumb"
    >
      <ButtonComponent
        :tag="breadcrumb.tag"
        :variant="ECButtonType.linkCrumb"
        class="crumb__btn btn"
        itemprop="item"
        @click.stop="clickHandler(breadcrumbIndex)"
      >
        <span class="btn__text" itemprop="name">
          {{ breadcrumb.name }}
        </span>
      </ButtonComponent>
    </li>
  </ul>
</template>

<script setup lang="ts">
import ButtonComponent from "@/components/ui/ButtonComponent/ButtonComponent.vue";

import { ECButtonType } from "@/components/ui/ButtonComponent/ButtonComponent.enums";
import { TBreadcrumbs } from "@/store/initialData/home/breadcrumbs.types";

interface IEmits {
  (e: "toBreadcrumb", breadcrumbIndex: number): void;
}

interface IProps {
  breadcrumbs: TBreadcrumbs;
}

const emits = defineEmits<IEmits>();
defineProps<IProps>();

function clickHandler(breadcrumbIndex: number) {
  emits("toBreadcrumb", breadcrumbIndex);
}
</script>

<style lang="less" scoped>
.breadcrumbs {
  .flex-properties(flex, center);

  & > :not(&__crumb:last-of-type) {
    .flex-properties(flex, center);

    &::after {
      content: "";
      padding: 6px;
      background-image: url("/icons/arrow-right.svg");
      background-repeat: no-repeat;
      background-position: center center;
      margin: 0 2px;
    }
  }
}
</style>
