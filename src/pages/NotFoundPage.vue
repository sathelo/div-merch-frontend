<template>
  <div class="not-found">
    <div class="not-found__wrapper">
      <img :src="ErrorNotFoundPhoto" alt="error 404" class="not-found__img" />
      <p class="not-found__text">Такой страницы не&nbsp;существует</p>
      <ButtonComponent
        :variant="ECButtonType.primary"
        class="not-found__btn"
        @click="router.push({ name: Routes.home })"
      >
        Вернуться на&nbsp;главную
      </ButtonComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

import ErrorNotFoundPhoto from "/images/not-found.png";

import ButtonComponent from "@/components/ui/ButtonComponent/ButtonComponent.vue";

import { Routes } from "@/router/routes.enums";
import { ECButtonType } from "@/components/ui/ButtonComponent/ButtonComponent.enums";

const router = useRouter();
</script>

<style lang="less" scoped>
.not-found {
  .flex-properties(flex, center, center);
  .content(0, 40px,  @grey-gradation--white);

  &__wrapper {
    .flex-properties(flex, center, center);
    flex-direction: column;

    max-width: 436px;

    margin: 174px auto;
  }

  &__img {
    width: 100%;

    margin-bottom: 24px;
  }

  &__text {
    .text-h2;
    text-align: center;
    color: @grey-gradation--black;
    margin-bottom: 24px;
  }
}
</style>
