<!-- @format -->

<script setup lang="ts">
import type { City } from "@/interfaces";
const config = useRuntimeConfig();
const route = useRoute();
const cityList = useState<Map<number, City>>("cityList");
const selectedCity = computed((): City => {
  const idNo = Number(route.params.id);
  return cityList.value.get(idNo) as City;
});
const params: {
  lang: string;
  q: string;
  appid: string;
} = {
  lang: "ja",
  q: selectedCity.value.q,
  appid: config.public.weathermapAppid,
};

const asyncData = await useFetch(
  "https://api.openweathermap.org/data/2.5/weather",
  {
    key: `/WeatherInfo/${route.params.id}`,
    query: params,
    transform: (data: any): string => {
      const weatherArray = data.weather;
      const weather = weatherArray[0];
      return weather.description;
    },
  }
);
const weatherDescription = asyncData.data;
</script>

<template>
  <section>
    <h2>{{ selectedCity.name }}の天気</h2>
    <p>{{ weatherDescription }}</p>
  </section>
  <p>リストに<NuxtLink v-bind:to="{ name: 'weather' }">戻る</NuxtLink></p>
</template>
