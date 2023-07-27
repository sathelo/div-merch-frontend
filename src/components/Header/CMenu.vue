<template>
  <nav class="menu">
    <ul
      class="menu-nav"
      v-for="({ name, href, target }, itemIndex) in menu"
      :key="itemIndex"
    >
      <li class="menu-nav__item">
        <a :href="href" :target="target">{{ name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { menu } from "@/data/menu.ts";
</script>

<style lang="less" scoped>
.menu {
  .flex-properties(flex, center, center);

  & > &-nav:not(:last-of-type) {
    margin-right: 48px;
  }

  &-nav {
    &__item {
      color: @grey-gradation--black;
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 14px;
    }
  }
}
</style>
