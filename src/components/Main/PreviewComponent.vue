<template>
  <Swiper
    :modules="[Autoplay, Pagination]"
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
    :pagination="{
      clickable: true,
      renderBullet(_index: number, className: string): string {
        return `<span class='${className}'></span>`;
      },
    }"
    class="preview"
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
        <ButtonComponent :variant="TypesCButton.primary" class="slide__btn btn">
          <template #icon>
            <img :src="slide.info.btn.ico" :alt="slide.info.btn.ico" />
          </template>
          Оформить предзаказ
        </ButtonComponent>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import ButtonComponent from "@/components/ui/ButtonComponent/ButtonComponent.vue";

import type { Slides } from "@/data/main/slides.types";
import { TypesCButton } from "@/components/ui/ButtonComponent/ButtonComponent.types";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

interface IProps {
  slides: Slides;
}

defineProps<IProps>();
</script>

<style lang="less" scoped>
.preview {
  width: 100%;
  margin-bottom: 40px;

  .slide {
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

    .btn {
      .text-lead-s;
    }
  }
}
</style>
