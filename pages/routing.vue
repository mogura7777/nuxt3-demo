<!-- @format -->
<script setup lang="ts">
const PAGE_TITLE = "会員リスト";

definePageMeta({
  layout: "member",
});

useHead({
  title: PAGE_TITLE,
});
</script>
<template>
  <nav id="breadcrumbs">
    <ul>
      <li>{{ PAGE_TITLE }}</li>
    </ul>
  </nav>
  <section>
    <p>
      <NuxtLink v-bind:to="{ name: 'member-memberList' }">
        会員管理はこちら
      </NuxtLink>
    </p>
  </section>
</template>
