<template>
  <nav class="actions">
    <ul
      class="actions-nav"
      v-for="({ iconUrl, href, target }, keyAction, actionIndex) in actions"
      :key="actionIndex"
    >
      <li class="actions-nav__item item">
        <a
          class="item__btn btn"
          :href="href ? href : '#'"
          :target="target ? target : '_self'"
        >
          <img class="btn__ico" :src="iconUrl" :alt="`${keyAction}`" />
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
.actions {
  .flex-properties(flex, center, center);

  & > &-nav:not(:last-of-type) {
    margin-right: 16px;
  }

  .btn {
    .content(16px 18px, 224px, @grey-gradation--white);
    .flex-properties(flex, center, center);

    &__ico {
      user-select: none;
    }
  }
}
</style>
