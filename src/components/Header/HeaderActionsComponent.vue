<template>
  <nav class="actions">
    <ul
      v-for="(action, actionIndex) in actions"
      :key="actionIndex"
      class="actions-nav"
    >
      <li class="actions-nav__item item">
        <ButtonComponent :variant="ECButtonType.round" class="item__btn btn">
          <template #icon>
            <img
              class="btn__ico"
              :class="`btn__ico--${getName(action.name)}`"
              :src="action.iconUrl"
              :alt="`${getName(action.name)}`"
            />
          </template>
        </ButtonComponent>
        <div
          v-if="isBasket(action.name) && counter"
          class="item__counter counter"
        >
          <p class="counter__text">
            {{ counter }}
          </p>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

import ButtonComponent from "@/components/ui/ButtonComponent/ButtonComponent.vue";

import { ECButtonType } from "@/components/ui/ButtonComponent/ButtonComponent.enums";

import type { Actions, Action } from "@/data/header/action.types";

interface IProps {
  actions: Actions;
}

defineProps<IProps>();

const counter = ref(0);

function getName(name: Action["name"]): Action["name"] {
  return name ?? "";
}

function isBasket(name: Action["name"]): boolean {
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
      color: @grey-gradation--white;
    }
  }
}
</style>
