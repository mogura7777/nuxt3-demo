<!-- @format -->

<script setup lang="ts">
const msg = ref("初期値");
const onButtonClick = (label: string, event: Event): void => {
  const target = event.target as HTMLButtonElement;
  const text = target.innerText;
  msg.value = `${label}と${text}`;
};
</script>

<template>
  <p>{{ msg }}</p>
  <button @click="onButtonClick('ラベル', $event)">
    ボタンの文字を取得する
  </button>
</template>
