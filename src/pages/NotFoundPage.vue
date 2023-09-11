<template>
  <page class="not-found-page">
    <section class="not-found-page__issue issue">
      <div class="issue__info info">
        <img :src="errorNotFound" alt="error 404" class="issue__img" />
        <p class="issue__text">Такой страницы не&nbsp;существует</p>
        <ButtonComponent
          :variant="TypesCButton.primary"
          class="issue__btn btn"
          @click="router.push({ name: Routes.home })"
        >
          Вернуться на&nbsp;главную
        </ButtonComponent>
      </div>
    </section>
  </page>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

import ButtonComponent from "@/components/ui/ButtonComponent/ButtonComponent.vue";
import errorNotFound from "/images/not-found.png";

import { TypesCButton } from "@/components/ui/ButtonComponent/ButtonComponent.types";
import { Routes } from "@/router/routes.types";

const router = useRouter();
</script>

<style lang="less" scoped>
.not-found-page {
  .page;

  .issue {
    .flex-properties(flex, center, center);
    .content(0, 40px,  @grey-gradation--white);

    &__info {
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

    .btn {
      .text-lead-s;
    }
  }
}
</style>
