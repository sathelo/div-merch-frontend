<template>
  <section class="categories">
    <h2 class="categories__title">Популярные категории</h2>
    <div class="categories-cards">
      <div
        v-for="(category, categoryIndex) in categories"
        :key="categoryIndex"
        class="categories-cards__card card"
      >
        <img :src="category.img" :alt="category.title" class="card__photo" />
        <p class="card__title">{{ category.title }}</p>
      </div>
    </div>
    <button class="categories__btn btn">
      <p class="btn__text">Все категории</p>
    </button>
  </section>
</template>

<script setup lang="ts">
import type { Categories } from "@/data/main";

interface IProps {
  categories: Categories;
}

defineProps<IProps>();
</script>

<style lang="less" scoped>
.categories {
  &__title {
    color: @grey-gradation--black;

    font-family: Inter;
    font-size: @desktop--h2;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;

    margin-bottom: 32px;
  }

  .btn {
    &__text {
      color: @grey-gradation--black;
      text-align: center;

      font-family: Inter;
      font-size: @desktop--lead--s;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
    }
  }
}
</style>
