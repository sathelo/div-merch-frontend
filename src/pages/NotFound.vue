<template>
  <page class="not-found-page">
    <section class="issue">
      <div class="issue__info info">
        <img :src="errorNotFound" alt="error 404" class="issue__img" />
        <p class="issue__text">Такой страницы не&nbsp;существует</p>
        <button
          @click="router.push({ name: Routes.home })"
          class="issue__btn btn btn--primary"
        >
          <p class="btn__text">Вернуться на&nbsp;главную</p>
        </button>
      </div>
    </section>
    <Footer />
  </page>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { Routes } from "@/router";
import Footer from "@/components/Footer/CFooter.vue";

import errorNotFound from "/images/not-found.png";

const router = useRouter();
</script>

<style lang="less" scoped>
.not-found-page {
  .page();

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
      color: @grey-gradation--black;
      text-align: center;

      /* desktop/h2 */
      font-family: Inter;
      font-size: @desktop--h2;
      font-style: normal;
      font-weight: 700;
      line-height: 36px;

      margin-bottom: 24px;
    }

    .btn {
      &__text {
        color: @grey-gradation--white;

        /* desktop/lead S */
        font-family: Inter;
        font-size: @desktop--lead--s;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
      }
    }
  }
}
</style>
