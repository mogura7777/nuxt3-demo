<!-- @format -->
<script setup lang="ts">
type UserType = {
  id: string;
  name: string;
};
const logout = () => {
  const loginUserCookie = useCookie<UserType | null>("loginUser");
  loginUserCookie.value = null;
  const loginTokenCookie = useCookie<string | null>("loginToken");
  loginTokenCookie.value = null;
  return navigateTo("/");
};
</script>
<template>
  <nav class="nav">
    <NuxtLink class="btn btn-primary me-3" v-bind:to="{ name: 'index' }">
      Home
    </NuxtLink>
    <NuxtLink class="btn btn-primary me-3" v-bind:to="{ name: 'users' }">
      Users
    </NuxtLink>
    <NuxtLink class="btn btn-primary me-3" v-bind:to="{ name: 'opp' }">
      Opp
    </NuxtLink>
    <button class="btn btn-outline-dark" v-on:click="logout">Log out</button>
  </nav>
</template>
