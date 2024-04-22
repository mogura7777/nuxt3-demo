<!-- @format -->
<script setup lang="ts">
import type { Member } from "@/interfaces";

const PAGE_TITLE = "会員リスト";

definePageMeta({
  layout: "member",
});

useHead({
  title: PAGE_TITLE,
});

const memberList = useState<Map<number, Member>>("memberList");
</script>

<template>
  <h1 class="sttl">会員管理</h1>
  <nav id="breadcrumbs">
    <ul class="breadcrumbs_list">
      <li><NuxtLink v-bind:to="{ name: 'routing' }">TOP</NuxtLink></li>
      <li>{{ PAGE_TITLE }}</li>
    </ul>
  </nav>
  <section>
    <h2>{{ PAGE_TITLE }}</h2>
    <p>
      新規登録は<NuxtLink v-bind:to="{ name: 'member-memberAdd' }"
        >こちら</NuxtLink
      >から
    </p>
    <section>
      <ul>
        <li v-for="[id, member] in memberList" v-bind:key="id">
          <NuxtLink
            v-bind:to="{ name: 'member-memberDetail-id', params: { id: id } }"
          >
            IDが{{ id }}の{{ member.name }}さん
          </NuxtLink>
        </li>
      </ul>
    </section>
  </section>
</template>
