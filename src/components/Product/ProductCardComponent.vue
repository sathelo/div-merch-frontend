<template>
  <div class="card">
    <ProductCardGalleryComponent
      class="card__gallery"
      :images="data.images"
      :current-image-id="currentImageId"
      @choose-image="chooseImage"
    />

    <div class="card__main-photo main-photo">
      <img :src="currentImage" alt="photo" class="main-photo__image" />
    </div>

    <div class="card__data">
      <div class="card__info info">
        <h2 class="info__header">{{ data.info.title }}</h2>
        <p class="info__type">{{ data.info.type }}</p>
        <ProductCardInfoColorsComponent
          :colors="data.info.colors"
          class="info__colors"
        />
        <ProductCardInfoSizesComponent
          :sizes="data.info.sizes"
          class="info__size"
        />
        <span class="info__line" />
        <ProductCardInfoTotalComponent
          :total="data.info.total"
          class="info__total"
        />
      </div>

      <ProductCardDescriptionComponent
        :descriptions="data.info.descriptions"
        class="card__description"
      />

      <ProductCardCharacteristicsComponent
        :characteristics="data.info.characteristics"
        class="card__characteristics"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

import ProductCardGalleryComponent from "@/components/Product/ProductCardGalleryComponent.vue";
import ProductCardInfoColorsComponent from "@/components/Product/ProductCardInfoColorsComponent.vue";
import ProductCardInfoSizesComponent from "@/components/Product/ProductCardInfoSizesComponent.vue";
import ProductCardInfoTotalComponent from "@/components/Product/ProductCardInfoTotalComponent.vue";
import ProductCardDescriptionComponent from "@/components/Product/ProductCardDescriptionComponent.vue";
import ProductCardCharacteristicsComponent from "@/components/Product/ProductCardCharacteristicsComponent.vue";

import { TProductCard } from "@/components/Product/ProductCardComponent.types";

interface IProps {
  data: TProductCard;
}

const props = defineProps<IProps>();

const currentImageId = ref(0);

const currentImage = computed(() =>
  typeof props.data.images === "string"
    ? props.data.images
    : props.data.images[currentImageId.value],
);

function chooseImage(id: number) {
  currentImageId.value = id;
}
</script>

<style lang="less" scoped>
.card {
  .flex-properties(flex);
  width: 100%;

  .main-photo {
    .content(64px,24px);
    height: fit-content;
    border: 1px solid @grey-gradation--100;

    &__image {
      width: 472px;
      height: 472px;
      object-fit: cover;
    }
  }

  .info {
    .content(32px, 24px);
    border: 1px solid @grey-gradation--100;

    &__header {
      .text-h2;
      color: @grey-gradation--black;
      margin-bottom: 24px;
    }

    &__type {
      .text-m;
      color: @grey-gradation--200;
      margin-bottom: 32px;
    }

    &__line {
      .flex-properties(block);
      width: 100%;
      height: 1px;
      background: @grey-gradation--100;
      margin: 32px 0;
    }
  }
}
</style>
