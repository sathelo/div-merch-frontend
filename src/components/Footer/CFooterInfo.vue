<template>
  <section class="info">
    <div class="info-blocks">
      <div
        class="info-blocks__block block"
        v-for="({ title, items }, _keyItems, itemsIndex) in info"
        :key="itemsIndex"
      >
        <div class="block__title">{{ title }}</div>
        <div class="block__wrapper">
          <a
            class="block__text"
            v-for="(item, itemIndex) in items"
            :key="itemIndex"
            :href="item.href ? item.href : '#'"
            :target="item.target ? item.target : '_self'"
          >
            {{ item.text }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Info } from "@/data/footer/info.types";

interface IProps {
  info: Info;
}

defineProps<IProps>();
</script>

<style lang="less" scoped>
.info {
  width: 100%;
  margin-bottom: 32px;

  &-blocks {
    .flex-properties(flex, initial, space-between);

    .block {
      &__title {
        .text-s;
        color: @grey-gradation--300;
        margin-bottom: 24px;
      }

      &__wrapper {
        .flex-properties(flex, initial, initial);
        flex-direction: column;

        & > *:not(:last-child) {
          margin-bottom: 16px;
        }
      }

      &__text {
        .text-s;
        color: @grey-gradation--black;
        user-select: none;
      }
    }
  }
}
</style>
