<!-- @format -->

<template>
  <nav class="nav">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/parent">Props</NuxtLink>
    <NuxtLink to="/state">State</NuxtLink>
    <NuxtLink to="/routing">Routing</NuxtLink>
    <NuxtLink to="/weather">weather</NuxtLink>
    <NuxtLink to="/pinia">pinia</NuxtLink>
    <ul class="nav__list">
      <li>
        <NuxtLink to="/middleware">middleware</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/login">login（middleware）</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/logout">logout（middleware）</NuxtLink>
      </li>
    </ul>
    <NuxtLink to="/other">other</NuxtLink>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  gap: 20px;
  background-color: #f0f0f0;
  padding: 10px 20px;
}
.nav__list {
  list-style: none;
}
</style>
