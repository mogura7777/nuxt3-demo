/** @format */

import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useArgStore = defineStore("argStore", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);

  const Ncount = (n: number) => {
    return computed(() => n * count.value);
  };

  const increment = () => count.value++;

  const incrementN = (n: number) => (count.value += n);
  const reset = () => (count.value = 0);

  return { count, doubleCount, increment, Ncount, incrementN, reset };
});
