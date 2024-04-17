<!-- @format -->
<script setup lang="ts">
const widthInit = Math.round(Math.random() * 10);
const heightInit = Math.round(Math.random() * 10);
const width = ref(widthInit);
const height = ref(heightInit);
const area = computed((): number => {
  return width.value * height.value;
});
setInterval((): void => {
  width.value = Math.round(Math.random() * 10);
  height.value = Math.round(Math.random() * 10);
}, 4000);
</script>
<template>
  <h2>ランダム計算</h2>
  <p>縦{{ height }}で横が{{ width }}の長方形の面積は{{ area }}</p>
</template>
