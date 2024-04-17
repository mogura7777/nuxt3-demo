<!-- @format -->
<script setup lang="ts">
//会員リストデータを用意。
const memberListInit = new Map<number, Member>();
memberListInit.set(33456, {
  id: 33456,
  name: "パーマン",
  email: "bow@example.com",
  points: 35,
  note: "テキストテキストテキスト",
});
memberListInit.set(47783, {
  id: 47783,
  name: "サトシ",
  email: "mue@example.com",
  points: 53,
});
const memberList = ref(memberListInit);

//会員リスト内の全会員のポイント合計の算出プロパティ。
const totalPoints = computed((): number => {
  let total = 0;
  for (const member of memberList.value.values()) {
    total += member.points;
  }
  return total;
});

//会員情報インターフェース。
interface Member {
  id: number;
  name: string;
  email: string;
  points: number;
  note?: string;
}
</script>

<template>
  <section>
    <h1>parent Page</h1>
    <navBar />
    <p>全会員の保有ポイントの合計: {{ totalPoints }}</p>
    <div class="box-wrapper">
      <OneMember
        v-for="[id, member] in memberList"
        v-bind:key="id"
        v-bind:id="id"
        v-bind:name="member.name"
        v-bind:email="member.email"
        v-bind:points="member.points"
        v-bind:note="member.note"
      />
    </div>
  </section>
</template>

<style scoped>
.box-wrapper {
  display: flex;
  gap: 20px;
}
</style>
