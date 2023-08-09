<template>
  <nav class="menu">
    <ul
      class="menu-nav"
      v-for="({ name, href, target }, itemIndex) in menu"
      :key="itemIndex"
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
import { type Menu } from "@/data/menu";

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
      color: @grey-gradation--black;

      /* desktop/tag M */
      font-family: Inter;
      font-size: @desktop--tag--m;
      font-style: normal;
      font-weight: 400;
      line-height: 14px;
    }
  }
}
</style>
