<template>
  <section class="footer-info">
    <div class="footer-info-blocks">
      <div
        class="footer-info-blocks-block"
        v-for="({ title, items }, _keyItems, itemsIndex) in footer"
        :key="itemsIndex"
      >
        <div class="footer-info-blocks-block__title">{{ title }}</div>
        <div class="footer-info-blocks-block__wrapper">
          <a
            class="footer-info-blocks-block__text"
            v-for="(item, itemIndex) in items"
            :key="itemIndex"
            :href="item.href ?? item.href"
            :target="item.target ?? item.target"
          >
            {{ item.text }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { type Footer } from "@/data/footer";

interface IProps {
  footer: Footer;
}

defineProps<IProps>();
</script>

<style lang="less" scoped>
.footer-info {
  width: 100%;
  margin-bottom: 32px;

  &-blocks {
    .flex-properties(flex, initial, space-between);

    &-block {
      &__title {
        color: @grey-gradation--300;
        /* desktop/tag S */
        font-family: Inter;
        font-size: @desktop--tag--s;
        font-style: normal;
        font-weight: 400;
        line-height: 12px;
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
        color: @grey-gradation--black;
        /* desktop/tag S */
        font-family: Inter;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 12px;
      }
    }
  }
}
</style>
