<!-- @format -->

<template>
  <header>
    <h1 class="ttl">ミドルウェアレイアウト</h1>
    <NavBar />
  </header>
  <main class="main">
    <NavBar02 />
    <TheLoggedInSection />
    <slot />
  </main>
</template>
