<template>
  <nav class="menu">
    <ul v-for="(item, itemIndex) in menu" :key="itemIndex" class="menu-nav">
      <li class="menu-nav__item item">
        <ButtonComponent
          :variant="ECButtonType.link"
          class="item__btn"
          @click="navigateToRoute(item.namePath)"
        >
          {{ item.title }}
        </ButtonComponent>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { navigateToRoute } from "@/router/routes.ts";

import ButtonComponent from "@/components/ui/ButtonComponent/ButtonComponent.vue";

import { ECButtonType } from "@/components/ui/ButtonComponent/ButtonComponent.enums";

import type { Menu } from "@/data/header/menu.types";

interface IProps {
  menu: Menu;
}

defineProps<IProps>();
</script>

<style lang="less" scoped>
.menu {
  .flex-properties(flex, center, center);

  & > &-nav:not(:last-of-type) {
    margin-right: 48px;
  }
}
</style>
