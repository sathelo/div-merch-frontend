<template>
  <nav class="actions">
    <ul
      v-for="(action, actionIndex) in actions"
      :key="actionIndex"
      class="actions-nav"
    >
      <li class="actions-nav__item item">
        <ButtonComponent
          :variant="ECButtonType.round"
          class="item__btn btn"
          :class="{ 'btn--basket': isBasket(action.namePath) }"
          @click="navigateToRoute(action.namePath)"
        >
          <template #icon>
            <img class="btn__ico" :src="action.iconUrl" alt="ico" />
          </template>
        </ButtonComponent>
        <div
          v-if="
            isBasket(action.namePath) &&
            cartCounter &&
            isRouteBasket(action.namePath)
          "
          class="item__counter counter"
        >
          <p class="counter__text">
            {{ cartCounter }}
          </p>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/store/store";
import { useRoute } from "vue-router";
import { navigateToRoute } from "@/router/routes";

import ButtonComponent from "@/components/ui/ButtonComponent/ButtonComponent.vue";

import { Routes } from "@/router/routes.enums";
import { ECButtonType } from "@/components/ui/ButtonComponent/ButtonComponent.enums";
import { TAction, TActions } from "@/store/initialData/header/action.types";

interface IProps {
  actions: TActions;
}

defineProps<IProps>();

const route = useRoute();

const store = useStore();

const cartCounter = computed(() => store.cartCounter);

function isBasket(name: TAction["namePath"]) {
  return name === Routes.basket;
}

function isRouteBasket(name: TAction["namePath"]) {
  return name !== route.name;
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

    .btn {
      &__ico {
        display: block;
      }

      &--basket {
        background: @grey-gradation--white;
      }
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
      color: @grey-gradation--white;
    }
  }
}
</style>
