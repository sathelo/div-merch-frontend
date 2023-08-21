<template>
  <section class="info">
    <div class="info-blocks">
      <div
        v-for="({ title, items }, _keyItems, itemsIndex) in info"
        :key="itemsIndex"
        class="info-blocks__block block"
      >
        <div class="block__title">
          {{ title }}
        </div>
        <div class="block__wrapper">
          <div
            v-for="(item, itemIndex) in items"
            :key="itemIndex"
            class="block__item item"
          >
            <p v-if="isBtn(item?.args)" class="item__text">
              {{ item.text }}
            </p>
            <ButtonComponent
              v-else
              :variant="TypesCButton.link"
              :size="Size.s"
              class="item__btn btn"
            >
              <p class="btn__text">
                {{ item.text }}
              </p>
            </ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ButtonComponent from "@/components/ui/ButtonComponent/ButtonComponent.vue";

import { TypesCButton } from "@/components/ui/ButtonComponent/ButtonComponent.types";
import { Size } from "@/types/enums/typography.enum";
import type { Info, DataInfoWithoutTextBlock } from "@/data/footer/info.types";

interface IProps {
  info: Info;
}

defineProps<IProps>();

function isBtn(args?: DataInfoWithoutTextBlock): boolean {
  return !(args?.href || args?.target || args?.namePath);
}
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

        .item {
          &__text {
            .text-s;
            color: @grey-gradation--black;
            user-select: none;
          }
        }
      }
    }
  }
}
</style>
