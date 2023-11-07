<template>
  <div v-if="descriptions" class="description">
    <h3 class="description__title">Описание</h3>
    <div class="description__info">
      <p
        v-for="(description, descriptionIndex) in formattedDescription"
        :key="descriptionIndex"
        class="description__text"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { TProductCardDescriptions } from "@/components/Product/ProductCardDescriptionComponent.types";

interface IProps {
  descriptions?: TProductCardDescriptions;
}

const props = defineProps<IProps>();

const formattedDescription = computed(() =>
  props.descriptions
    ? Array.isArray(props.descriptions)
      ? props.descriptions
      : [props.descriptions]
    : props.descriptions,
);
</script>

<style lang="less" scoped>
.description {
  .content(32px, 24px);
  border: 1px solid @grey-gradation--100;

  &__title {
    .text-lead-m;
    color: @grey-gradation--black;
    margin-bottom: 24px;
  }

  &__info {
    .flex-properties(flex);
    flex-direction: column;

    & > *:not(:last-child) {
      margin-bottom: 24px;
    }
  }

  &__text {
    .text-body;
    color: @grey-gradation--black;
  }
}
</style>
