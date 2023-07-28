<template>
  <nav class="header-menu">
    <ul
      class="header-menu-nav"
      v-for="({ name, href, target }, itemIndex) in menu"
      :key="itemIndex"
    >
      <li class="header-menu-nav-item">
        <a class="header-menu-nav-item__text" :href="href" :target="target">{{
          name
        }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { menu } from "@/data/menu";
</script>

<style lang="less" scoped>
.header-menu {
  .flex-properties(flex, center, center);

  & > &-nav:not(:last-of-type) {
    margin-right: 48px;
  }

  &-nav {
    &-item {
      &__text {
        color: @grey-gradation--black;
        /* desktop/tag M */
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 14px;
      }
    }
  }
}
</style>
