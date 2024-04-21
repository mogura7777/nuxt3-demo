<!-- @format -->

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6 text-center">
        <NuxtLink
          class="btn btn-primary mx-2 px-5"
          v-bind:to="{ name: 'home-login' }"
        >
          Log in
        </NuxtLink>
        <NuxtLink
          class="btn btn-secondary mx-2 px-5"
          v-bind:to="{ name: 'home-signin' }"
        >
          Sign in
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
