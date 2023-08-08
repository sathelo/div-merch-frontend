<template>
  <nav class="header-actions">
    <ul
      class="header-actions-nav"
      v-for="({ iconUrl, href }, keyAction, actionIndex) in actions"
      :key="actionIndex"
    >
      <li class="header-actions-nav-item">
        <a class="header-actions-nav-item__btn" :href="href">
          <img
            class="header-actions-nav-item__ico"
            :src="iconUrl"
            :alt="`${keyAction}`"
          />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { type Actions } from "@/data/actions";

interface IProps {
  actions: Actions;
}

defineProps<IProps>();
</script>

<style lang="less" scoped>
.header-actions {
  .flex-properties(flex, center, center);

  & > &-nav:not(:last-of-type) {
    margin-right: 16px;
  }

  &-nav {
    &-item {
      &__btn {
        .content(16px 18px, 224px, @grey-gradation--white);
        .flex-properties(flex, center, center);
      }
    }
  }
}
</style>
