<!-- @format -->

<template>
  <nav class="nav">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/parent">Props</NuxtLink>
    <NuxtLink to="/state">State</NuxtLink>
    <NuxtLink to="/routing">Routing</NuxtLink>
    <NuxtLink to="/weather">weather</NuxtLink>
    <NuxtLink to="/pinia">pinia</NuxtLink>
    <NuxtLink to="/food">food</NuxtLink>
    <ul class="nav__list">
      <li>
        <NuxtLink to="/middleware">middleware</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/login">login</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/logout">logout</NuxtLink>
      </li>
    </ul>
    <NuxtLink to="/other">other</NuxtLink>
  </nav>
</template>

<style scoped></style>
