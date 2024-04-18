<!-- @format -->
<script setup lang="ts">
//会員情報インターフェース。
interface Member {
  id: number;
  name: string;
  email: string;
  points: number;
  note?: string;
}
//会員リストデータを用意。
const memberListInit = new Map<number, Member>();
memberListInit.set(33456, {
  id: 33456,
  name: "パーマン",
  email: "bow@example.com",
  points: 10,
  note: "テキストテキストテキスト",
});
memberListInit.set(47783, {
  id: 47783,
  name: "まっくす",
  email: "mue@example.com",
  points: 7,
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

//Emitにより実行されるメソッド。
const onIncrementPoint = (id: number): void => {
  //処理関数のidに該当する会員情報オブジェクトを取得。
  const member = memberList.value.get(id);
  //会員情報オブジェクトが存在するなら…
  if (member != undefined) {
    //ポイントをインクリメント。
    member.points++;
  }
};
</script>

<template>
  <section>
    <NavBar />
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
        v-on:incrementPoint="onIncrementPoint"
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
