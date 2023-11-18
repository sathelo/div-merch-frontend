<template>
  <div class="card">
    <ProductCardGalleryComponent
      class="card__gallery"
      :images="product.images"
      :current-image-id="currentImageId"
      @choose-image="chooseImage"
    />

    <div class="card__main-photo main-photo">
      <img :src="currentImage" alt="photo" class="main-photo__image" />
    </div>

    <div class="card__data">
      <div class="card__info info">
        <h2 class="info__header">{{ product.info.title }}</h2>
        <ButtonComponent :variant="ECButtonType.round" class="info__btn btn">
          <template #icon>
            <img :src="HeartBigIco" alt="favorites" class="btn__ico" />
          </template>
        </ButtonComponent>
        <p class="info__type">{{ product.info.type }}</p>
        <ProductCardInfoColorsComponent
          :colors="product.info.colors"
          class="info__colors"
        />
        <ProductCardInfoSizesComponent
          :sizes="product.info.sizes"
          class="info__size"
        />
        <span class="info__line" />
        <ProductCardInfoTotalComponent :product="product" class="info__total" />
      </div>

      <ProductCardDescriptionComponent
        :descriptions="product.info.descriptions"
        class="card__description"
      />

      <ProductCardCharacteristicsComponent
        :characteristics="product.info.characteristics"
        class="card__characteristics"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

import ButtonComponent from "@/components/ui/ButtonComponent/ButtonComponent.vue";
import ProductCardGalleryComponent from "@/components/Product/ProductCardGalleryComponent.vue";
import ProductCardInfoColorsComponent from "@/components/Product/ProductCardInfoColorsComponent.vue";
import ProductCardInfoSizesComponent from "@/components/Product/ProductCardInfoSizesComponent.vue";
import ProductCardInfoTotalComponent from "@/components/Product/ProductCardInfoTotalComponent.vue";
import ProductCardDescriptionComponent from "@/components/Product/ProductCardDescriptionComponent.vue";
import ProductCardCharacteristicsComponent from "@/components/Product/ProductCardCharacteristicsComponent.vue";

import HeartBigIco from "/icons/heart-big.svg";

import { ECButtonType } from "@/components/ui/ButtonComponent/ButtonComponent.enums";

import { TProduct } from "@/store/initialData/home/products.types";

interface IProps {
  product: TProduct;
}

const props = defineProps<IProps>();

const currentImageId = ref(0);

const currentImage = computed(() =>
  Array.isArray(props.product.images)
    ? props.product.images[currentImageId.value]
    : props.product.images,
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
    position: relative;
    border: 1px solid @grey-gradation--100;

    &__header {
      .text-h2;
      color: @grey-gradation--black;
      margin-bottom: 24px;
    }

    .btn {
      position: absolute;
      top: 32px;
      right: 32px;

      &__ico {
        display: block;
      }
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
