<!-- @format -->

<script setup lang="ts">
import type { Member } from "@/interfaces";

//会員情報リストをステートとして用意。
useState<Map<number, Member>>("memberList", (): Map<number, Member> => {
  const memberListInit = new Map<number, Member>();
  memberListInit.set(47783, {
    id: 47783,
    name: "鈴木二郎",
    email: "mue@example.com",
    points: 53,
  });
  return memberListInit;
});
</script>

<template>
  <StateTheBaseSection />
</template>
