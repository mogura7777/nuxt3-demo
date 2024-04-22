<!-- @format -->
<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = ref(useRouter());
const routeUrl = ref("");
</script>
<template>
  {{ route }}
  <nav id="breadcrumbs">
    <ul>
      <li><NuxtLink v-bind:to="{ name: 'routing' }">TOP</NuxtLink></li>
      <li>
        <NuxtLink v-bind:to="{ name: 'member-memberList' }"
          >会員リスト
        </NuxtLink>
      </li>
      <li>会員詳細情報</li>
    </ul>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  gap: 20px;
  background-color: #f0f0f0;
  padding: 10px 20px;
}
</style>
