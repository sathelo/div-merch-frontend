<template>
  <ul class="breadcrumbs">
    <li
      v-for="(breadcrumb, breadcrumbIndex) in breadcrumbs"
      :key="breadcrumbIndex"
      class="breadcrumbs__crumb crumb"
    >
      <ButtonComponent
        :variant="ECButtonType.linkCrumb"
        class="crumb__btn"
        @click="navigateToRoute(breadcrumb.path)"
      >
        {{ breadcrumb.name }}
      </ButtonComponent>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { navigateToRoute } from "@/router/routes.ts";

import ButtonComponent from "@/components/ui/ButtonComponent/ButtonComponent.vue";

import { ECButtonType } from "@/components/ui/ButtonComponent/ButtonComponent.enums";

import type { Breadcrumbs } from "@/data/home/breadcrumbs.types";

interface IProps {
  breadcrumbs: Breadcrumbs;
}

defineProps<IProps>();
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
