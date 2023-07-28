<template>
  <section class="main-settings">
    <div class="main-settings-cards">
      <div class="main-settings-cards-card">
        <div class="main-settings-cards-card__title">Цена</div>
        <ElSlider v-model="ranged" show-stops range />
      </div>

      <div class="main-settings-cards-card">
        <div class="main-settings-cards-card__title">Пол</div>
        <el-checkbox-group v-model="checkedFloor" :max="1">
          <ElCheckbox label="Мужской" />
          <ElCheckbox label="Женский" />
        </el-checkbox-group>
      </div>

      <div class="main-settings-cards-card">
        <div class="main-settings-cards-card__title">Категория</div>
        <el-checkbox-group v-model="checkedСategories">
          <ElCheckbox label="Анораки" />
          <ElCheckbox label="Свитшоты" />
          <ElCheckbox label="Брюки" />
          <ElCheckbox label="Носки" />
          <ElCheckbox label="Ветровки" />
          <ElCheckbox label="Браслеты" />
          <ElCheckbox label="Брелоки" />
        </el-checkbox-group>
      </div>

      <div class="main-settings-cards-card">
        <div class="main-settings-cards-card__title">Размер</div>
      </div>

      <div class="main-settings-cards-card">
        <div class="main-settings-cards-card__title">Цвет</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElSlider, ElCheckbox } from "element-plus";

//block1
const ranged = ref([0, 30]);
//block2
const checkedFloor = ref([]);
//block3
const checkedСategories = ref([]);
//block4
const checkedSize = ref([]);
//block5
const checkedColor = ref([]);
</script>

<style lang="less" scoped></style>
