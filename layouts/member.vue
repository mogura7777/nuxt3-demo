<!-- @format -->

<template>
  <header>
    <h1 class="ttl">メンバーレイアウト</h1>
    <TheLoggedInSection />
    <NavBar />
  </header>
  <main class="body">
    <slot />
  </main>
</template>
<style scoped>
.body {
  background-color: #e5faed;
}
</style>
