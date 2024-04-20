<!-- @format -->
<script setup lang="ts">
import type { City } from "@/interfaces";

//都市情報リストをステートから取得。
const cityList = useState<Map<number, City>>("cityList");
</script>

<template>
  <section>
    <h2>都市リスト</h2>
    <ul class="list">
      <li v-for="[id, city] in cityList" v-bind:key="id">
        <NuxtLink v-bind:to="{ name: 'FetchInfo-id', params: { id: id } }">
          {{ city.name }}の天気（FetchInfo）
        </NuxtLink>
      </li>
    </ul>
    <ul class="list">
      <li v-for="[id, city] in cityList" v-bind:key="id">
        <NuxtLink v-bind:to="{ name: 'AsyncDataInfo-id', params: { id: id } }">
          {{ city.name }}の天気（AsyncDataInfo）
        </NuxtLink>
      </li>
    </ul>
    <ul class="list">
      <li v-for="[id, city] in cityList" v-bind:key="id">
        <NuxtLink v-bind:to="{ name: 'UseFetchInfo-id', params: { id: id } }">
          {{ city.name }}の天気(UseFetchInfo)
        </NuxtLink>
      </li>
    </ul>
    <ul class="list">
      <li v-for="[id, city] in cityList" v-bind:key="id">
        <NuxtLink v-bind:to="{ name: 'WeatherInfo-id', params: { id: id } }">
          {{ city.name }}の天気
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.list {
  margin-bottom: 10px;
}
</style>
