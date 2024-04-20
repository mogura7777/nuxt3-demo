/** @format */

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
  runtimeConfig: {
    public: {
      weatherInfoUrl: "https://api.openweathermap.org/data/2.5/weather",
      weathermapAppid: "",
    },
  },
});
