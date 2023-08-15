<template>
  <section class="popular-categories">
    <h2 class="popular-categories__title">
      Популярные категории
    </h2>
    <div class="popular-categories__info">
      <swiper
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
        <swiper-slide
          v-for="(category, categoryIndex) in categories"
          :key="categoryIndex"
          class="popular-categories-cards__card card"
        >
          <img
            :src="category.img"
            :alt="category.title"
            class="card__photo"
          >
          <p class="card__title">
            {{ category.title }}
          </p>
        </swiper-slide>
      </swiper>
      <button class="popular-categories__btn btn btn--secondary">
        <p class="btn__text">
          Все категории
        </p>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Categories } from "@/data/main/categories.types";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

interface IProps {
  categories: Categories;
}

defineProps<IProps>();
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
        margin-bottom: 24px;
      }

      &__title {
        .text-lead-s;
        text-align: center;
        color: @grey-gradation--black;
      }
    }
  }

  .btn {
    &__text {
      .text-lead-s;
      text-align: center;
      color: @grey-gradation--black;
    }
  }
}
</style>
