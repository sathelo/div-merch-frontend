<template>
  <nav class="actions">
    <ul
      class="actions-nav"
      v-for="({ iconUrl, href }, actionIndex) in actions"
      :key="actionIndex"
    >
      <li class="actions-nav__item">
        <a :href="href">
          <img :src="iconUrl" alt="ico" />
        </a>
      </li>
    </ul>

    <q-bogus />
  </nav>
</template>

<script setup lang="ts">
import { actions } from "@/data/actions.ts";
</script>

<style lang="less" scoped>
.actions {
  .flex-properties(flex, center, center);

  & > &-nav:not(:last-of-type) {
    margin-right: 16px;
  }
}
</style>
