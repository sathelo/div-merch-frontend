<template>
  <nav class="menu">
    <ul
      v-for="({ name, href, target }, itemIndex) in menu"
      :key="itemIndex"
      class="menu-nav"
    >
      <li class="menu-nav__item item">
        <a
          class="item__text"
          :href="href ? href : '#'"
          :target="target ? target : '_self'"
        >
          {{ name }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
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

  .item {
    &__text {
      .text-m;
      color: @grey-gradation--black;
    }
  }
}
</style>
