<!-- @format -->

<script setup lang="ts">
definePageMeta({
  middleware: ["loggedin-check"],
});
</script>

<template>
  <section>
    <p>
      <NuxtLink v-bind:to="{ name: 'member02-memberList' }">
        会員管理はこちら
      </NuxtLink>
    </p>
  </section>
</template>
