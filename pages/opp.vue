<!-- @format -->

<script setup lang="ts">
definePageMeta({
  middleware: ["login"],
  layout: "middleware",
});
const PAGE_TITLE = "ミドルウェア";

useHead({
  title: PAGE_TITLE,
});
type UserType = {
  id: string;
  name: string;
};

const loginUserCookie = useCookie<UserType | null>("loginUser");
</script>

<template>
  <h2 class="mt-5">User Page</h2>
  <p>{{ loginUserCookie?.name }}さん、ようこそ</p>
  <NuxtLink class="btn btn-primary me-3" v-bind:to="{ name: 'opp' }">
    Page1
  </NuxtLink>
  <NuxtLink class="btn btn-primary me-3" v-bind:to="{ name: 'opp-page2' }">
    Page2
  </NuxtLink>

  <NuxtPage />
</template>
