<!-- @format -->
<script setup lang="ts">
import type { Member } from "@/interfaces";
import type { City } from "@/interfaces";
const SITE_TITLE = "Nuxt3デモ";
useHead({
  link: [
    {
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
      rel: "stylesheet",
      integrity:
        "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
      crossorigin: "anonymous",
    },
  ],
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
      integrity:
        "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
      crossorigin: "anonymous",
    },
  ],
  titleTemplate: (titleChunk: string | undefined): string => {
    let title = SITE_TITLE;
    if (titleChunk != undefined) {
      title = `${titleChunk} | ${SITE_TITLE}`;
    }
    return title;
  },
  // titleTemplate: `%s | ${SITE_TITLE}`
});
//都市情報リストをステートとして用意。
useState<Map<number, City>>("cityList", (): Map<number, City> => {
  const cityListInit = new Map<number, City>();
  cityListInit.set(1853909, {
    id: 1853909,
    name: "大阪",
    q: "Osaka",
  });
  cityListInit.set(1859171, {
    id: 1859171,
    name: "神戸",
    q: "Kobe",
  });
  cityListInit.set(1862627, {
    id: 1862627,
    name: "姫路",
    q: "Himeji",
  });
  return cityListInit;
});

//会員情報リストをステートとして用意。
useState<Map<number, Member>>("memberList", (): Map<number, Member> => {
  const memberListInit = new Map<number, Member>();
  memberListInit.set(1, {
    id: 1,
    name: "UseState管理",
    email: "tttt@example.com",
    points: 0,
  });
  memberListInit.set(2, {
    id: 2,
    name: "てんてん",
    email: "aaaa@example.com",
    points: 20,
    note: "初回入会特典あり。",
  });
  return memberListInit;
});
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
  <NuxtLayout>
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
    <NuxtPage />
  </NuxtLayout>
</template>
