<!-- @format -->

<script setup lang="ts">
import type { User } from "@/interfaces";

const loginUser = useCookie<User | null>("loginUser");
</script>

<template>
  <section v-if="loginUser">
    <div class="box">
      <p>{{ loginUser.name }}さんがログイン中</p>
      <p><NuxtLink v-bind:to="{ name: 'logout' }">ログアウト</NuxtLink></p>
    </div>
  </section>
</template>
