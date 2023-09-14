<template>
  <nav class="menu">
    <ul
      v-for="({ title, namePath }, itemIndex) in menu"
      :key="itemIndex"
      class="menu-nav"
    >
      <li class="menu-nav__item item">
        <ButtonComponent
          :variant="ECButtonType.link"
          @click="router.push({ name: namePath })"
        >
          {{ title }}
        </ButtonComponent>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

import ButtonComponent from "@/components/ui/ButtonComponent/ButtonComponent.vue";

import { ECButtonType } from "@/components/ui/ButtonComponent/ButtonComponent.enums";

import type { Menu } from "@/data/header/menu.types";

interface IProps {
  menu: Menu;
}

defineProps<IProps>();

const router = useRouter();
</script>

<style lang="less" scoped>
.menu {
  .flex-properties(flex, center, center);

  & > &-nav:not(:last-of-type) {
    margin-right: 48px;
  }

  .item {
    &__text {
      .text-m;
    }
  }
}
</style>
