<template>
  <nav class="actions">
    <ul
      class="actions-nav"
      v-for="(action, actionIndex) in actions"
      :key="actionIndex"
    >
      <li class="actions-nav__item item">
        <a
          class="item__btn btn"
          :class="`btn__${getName(action.name)}`"
          :href="action.href ? action.href : '#'"
          :target="action.target ? action.target : '_self'"
        >
          <img
            class="btn__ico"
            :class="`btn__ico--${getName(action.name)}`"
            :src="action.iconUrl"
            :alt="`${getName(action.name)}`"
          />
        </a>

        <div
          v-if="isBasket(action.name) && counter"
          class="item__counter counter"
        >
          <p class="counter__text">{{ counter }}</p>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import type { Actions, Action } from "@/data/header/action.types";
import { ref } from "vue";

interface IProps {
  actions: Actions;
}

defineProps<IProps>();

const counter = ref(0);

function getName(name: Action["name"]): Action["name"] {
  return name ? name : "";
}

function isBasket(name: Action["name"]): Boolean {
  return name === "basket";
}
</script>

<style lang="less" scoped>
.actions {
  .flex-properties(flex, center, center);

  & > &-nav:not(:last-of-type) {
    margin-right: 16px;
  }

  .item {
    position: relative;
  }

  .btn {
    .content(16px 18px, 224px, initial);
    .flex-properties(flex, center, center);

    &__ico {
      user-select: none;
    }

    &__basket {
      .content(16px 18px, 224px, @grey-gradation--white);
    }
  }

  .counter {
    .content(0, 50%, @blue--500);
    .flex-properties(flex, center, center);
    position: absolute;
    top: -5px;
    right: -5px;
    width: 21px;
    height: 20px;

    &__text {
      .text-s;
      color: var(--grey-gradation-white, #fff);
    }
  }
}
</style>
