<template>
  <Swiper
    :modules="[Autoplay]"
    :slides-per-view="'auto'"
    :grab-cursor="true"
    :breakpoints="{
      1024: {
        spaceBetween: 40,
      },
    }"
    :autoplay="{
      disableOnInteraction: false,
    }"
    class="preview"
    @swiper="onSwiper"
    @autoplay-time-left="onAutoplayTimeLeft"
    @slide-change="onSlideChange"
  >
    <SwiperSlide
      v-for="(slide, slideIndex) in slides"
      :key="slideIndex"
      :style="{ 'background-image': `url(${slide.img})` }"
      class="preview__slide slide"
    >
      <div class="slide__info">
        <h2 class="slide__title">
          {{ slide.info.title }}
        </h2>
        <h2 class="slide__subtitle">
          {{ slide.info.subtitle }}
        </h2>
        <ButtonComponent :variant="ECButtonType.primary" class="slide__btn">
          <template #icon>
            <img :src="slide.info.btn.ico" :alt="slide.info.btn.ico" />
          </template>
          Оформить предзаказ
        </ButtonComponent>
      </div>
    </SwiperSlide>
    <div class="preview__pagination pagination">
      <button
        v-for="(_, bulletIndex) in slides.length"
        :key="bulletIndex"
        class="pagination__bullet bullet"
        :class="{ 'bullet--active': bulletIndex === activeSlide }"
        @click="goToSlide(bulletIndex)"
      >
        <span v-if="bulletIndex === activeSlide" class="bullet__circle">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="border-radius: 50%"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
              fill="none"
              stroke="#30F"
              :stroke-dashoffset="strokeDashoffset"
              stroke-dasharray="50"
              stroke-width="16px"
            />
          </svg>
        </span>

        <span v-else class="bullet__circle">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6" cy="6" r="6" fill="#F2F2F2" />
          </svg>
        </span>
      </button>
    </div>
  </Swiper>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import ButtonComponent from "@/components/ui/ButtonComponent/ButtonComponent.vue";

import { ECButtonType } from "@/components/ui/ButtonComponent/ButtonComponent.enums";

import { TSlides } from "@/store/initialData/home/slides.types";

import "swiper/css";
import "swiper/css/autoplay";

interface IProps {
  slides: TSlides;
}

defineProps<IProps>();

const swiperPreview = ref();
const strokeDashoffset = ref(0); // Если нужно наоборот, то `50`
const activeSlide = ref(0);

function onSwiper(swiper: any) {
  swiperPreview.value = swiper;
}

function onAutoplayTimeLeft(_swiper: any, _time: number, progress: number) {
  strokeDashoffset.value = 50 * progress; // Если нужно наоборот, то `50 * (1 - progress)`
}

function onSlideChange(swiper: any) {
  activeSlide.value = swiper.activeIndex;
}

function goToSlide(index: number) {
  swiperPreview.value.slideTo(index);
}
</script>

<style lang="less" scoped>
.preview {
  width: 100%;
  margin-bottom: 40px;

  .slide {
    margin-bottom: 24px;

    .flex-properties(flex, center, center);
    width: 100%;
    height: 640px;
    border-radius: 24px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;

    &__info {
      .content(48px 32px, 22px, @grey-gradation--white);
      .flex-properties(flex, center, center);
      flex-direction: column;
      max-width: 436px;
    }

    &__title {
      .text-h2;
      text-align: center;
      color: @grey-gradation--black;
    }

    &__subtitle {
      .text-h2;
      text-align: center;
      color: @grey-gradation--200;
      margin-bottom: 32px;
    }
  }

  .pagination {
    .flex-properties(flex, center, center);

    & > *:not(:last-child) {
      margin-right: 12px;
    }
    .bullet {
      cursor: pointer;

      &--active {
        transform: scale(-1, 1) rotate(90deg);
      }
    }
  }
}
</style>
