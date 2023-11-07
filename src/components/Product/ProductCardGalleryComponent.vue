<template>
  <div class="gallery">
    <div class="gallery__images">
      <div
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        class="gallery__items"
      >
        <div
          class="gallery__item"
          :class="{ 'gallery__item--active': imageIndex === currentImageId }"
          @click="chooseImage(imageIndex)"
        >
          <img :src="image" alt="photo" class="gallery__image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TProductCardGallery } from "@/components/Product/ProductCardGalleryComponent.types";

interface IProps {
  images: TProductCardGallery;
  currentImageId: number;
}

interface IEmits {
  (e: "chooseImage", v: number): void;
}

defineProps<IProps>();
const emits = defineEmits<IEmits>();

function chooseImage(id: number) {
  emits("chooseImage", id);
}
</script>

<style lang="less" scoped>
.gallery {
  &__item {
    .content(12px, 24px);
    border: 1px solid @grey-gradation--100;
    cursor: pointer;

    &:hover {
      border: 1px solid @blue--500;
    }

    &--active {
      border: 1px solid @blue--500;
    }
  }

  &__image {
    width: 96px;
    height: 96px;
    object-fit: cover;
  }
}
</style>
