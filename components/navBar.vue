<!-- @format -->

<template>
  <nav class="nav">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/parent">Props</NuxtLink>
    <NuxtLink to="/state">State</NuxtLink>
    <NuxtLink to="/routing">Routing</NuxtLink>
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
