<template>
  <section class="main-settings-cards-card-floor">
    <div class="main-settings-cards-card__title">Пол</div>
    <el-checkbox-group v-model="checkedFloor" :max="1">
      <ElCheckbox label="Мужской" />
      <ElCheckbox label="Женский" />
    </el-checkbox-group>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElCheckbox } from "element-plus";

const checkedFloor = ref([]);
</script>

<style lang="less" scoped></style>
