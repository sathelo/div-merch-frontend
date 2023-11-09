<template>
  <section class="popular-categories">
    <h2 class="popular-categories__title">Популярные категории</h2>
    <div class="popular-categories__info">
      <Swiper
        :breakpoints="{
          0: {
            grabCursor: true,
            slidesPerView: 3,
          },
          1024: {
            grabCursor: false,
            slidesPerView: 6,
          },
        }"
        class="popular-categories-cards"
      >
        <SwiperSlide
          v-for="(category, categoryIndex) in categories"
          :key="categoryIndex"
          class="popular-categories-cards__card card"
          @click="redirectToCategories(category.query)"
        >
          <img :src="category.img" :alt="category.title" class="card__photo" />
          <p class="card__title">
            {{ category.title }}
          </p>
        </SwiperSlide>
      </Swiper>
      <ButtonComponent
        class="popular-categories__btn"
        :variant="ECButtonType.secondary"
        @click="router.push({ name: Routes.categories })"
      >
        Все категории
      </ButtonComponent>
    </div>
  </section>
</template>

<script setup lang="ts">
import router from "@/router/routes";

import { Swiper, SwiperSlide } from "swiper/vue";
import ButtonComponent from "@/components/ui/ButtonComponent/ButtonComponent.vue";

import { Routes } from "@/router/routes.enums";
import { ECButtonType } from "@/components/ui/ButtonComponent/ButtonComponent.enums";

import {
  TCategories,
  TCategory,
} from "@/store/initialData/home/categories.types";

import "swiper/css";

interface IProps {
  categories: TCategories;
}

defineProps<IProps>();

function redirectToCategories(query: TCategory["query"]) {
  router.push({ name: Routes.categories, query: query });
}
</script>

<style lang="less" scoped>
.popular-categories {
  margin-bottom: 40px;

  &__title {
    .text-h2;
    color: @grey-gradation--black;
    margin-bottom: 32px;
  }

  &__info {
    .flex-properties(flex);
    flex-direction: column;
  }

  &-cards {
    .flex-properties(flex);
    width: 100%;
    margin-bottom: 32px;

    .card {
      .content(32px 24px, 24px, @grey-gradation--white);
      .flex-properties(flex, center, center);
      flex-direction: column;
      width: 100%;
      border: 1px solid @grey-gradation--100;
      cursor: pointer;

      &__photo {
        width: 100%;
        height: 100%;
        object-fit: contain;
        margin-bottom: 24px;
      }

      &__title {
        .text-lead-s;
        text-align: center;
        color: @grey-gradation--black;
      }
    }
  }

  &__btn {
    margin: 0 auto;
  }
}
</style>
