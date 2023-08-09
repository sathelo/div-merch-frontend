<template>
  <section ref="swiper" class="swiper">
    <div class="swiper-wrapper">
      <div
        v-for="(slide, slideIndex) in slides"
        :key="slideIndex"
        class="swiper-slide"
      >
        {{ slide }}
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

import type { Slides } from "@/data/main";

import Swiper from "swiper";
import { Pagination, Navigation } from "swiper/modules";
import { CSSSelector, SwiperOptions } from "swiper/types";

interface IProps {
  slides: Slides;
}

defineProps<IProps>();

const swiper = ref<HTMLElement | CSSSelector | null>(null);

onMounted(() => {
  initSwiper();
});

/**
 * Инициализирует Swiper и возвращает его экземпляр.
 * @returns {Swiper} Экземпляр Swiper.
 */
function initSwiper(): Swiper {
  const element = swiper.value as HTMLElement | CSSSelector;
  const options: SwiperOptions = {
    modules: [Navigation, Pagination],
    slidesPerView: "auto",
    spaceBetween: 30,
    autoplay: {
      delay: 500,
      disableOnInteraction: false,
    },
    navigation: true,
  };

  return new Swiper(element, options);
}
</script>

<style lang="less" scoped>
.swiper {
  width: 100%;

  &-wrapper {
    display: flex;
    width: 100%;
  }

  &-slide {
    width: 100%;
  }
}
</style>
