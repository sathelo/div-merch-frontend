<template>
  <section class="clothing">
    <div class="clothing-cards">
      <div
        v-for="(cloth, clothIndex) in clothes"
        :key="clothIndex"
        class="clothing-cards__card card"
        :style="{ backgroundImage: `url(${cloth.img})` }"
        @click="redirectToCategories(cloth.query)"
      >
        <div class="card__btn btn">
          <div class="btn__text">
            {{ cloth.title }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import router from "@/router/routes";
import { Routes } from "@/router/routes.enums";

import { TClothes, TCloth } from "@/store/initialData/home/clothes.types";

interface IProps {
  clothes: TClothes;
}

defineProps<IProps>();

function redirectToCategories(query: TCloth["query"]) {
  router.push({ name: Routes.categories, query: query });
}
</script>

<style lang="less" scoped>
.clothing {
  margin-bottom: 40px;

  &-cards {
    display: flex;

    .card {
      .flex-properties(flex, initial, end);
      flex-direction: column;
      width: 100%;
      height: 640px;
      border-radius: 24px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: top;
      cursor: pointer;

      &:first-child {
        margin-right: 40px;
      }

      .btn {
        .content(24px, 22px, rgba(255, 255, 255, 0.9));
        backdrop-filter: blur(22px);
        margin: 2px;

        &__text {
          .text-lead-m;
          text-align: center;
          color: @grey-gradation--black;
        }
      }
    }
  }
}
</style>
