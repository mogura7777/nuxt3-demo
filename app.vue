<!-- @format -->
<script setup lang="ts">
import type { Member } from "@/interfaces";

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
</script>
<template>
  <div>
    <h1>APPページ</h1>
    <NuxtPage />
  </div>
</template>
