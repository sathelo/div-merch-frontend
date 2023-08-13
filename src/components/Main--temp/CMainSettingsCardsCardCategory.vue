<template>
  <section class="main-settings-cards-card__category">
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
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElCheckbox } from "element-plus";

const checkedСategories = ref([]);
</script>

<style lang="less" scoped></style>
