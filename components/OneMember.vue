<!-- @format -->

<script setup lang="ts">
//Propsインターフェースの定義。
interface Props {
  id: number;
  name: string;
  email: string;
  points: number;
  note?: string;
}
//Emits型を定義。
type Emits = {
  incrementPoint: [id: number];
};

//Propsオブジェクトの設定。
const props = defineProps<Props>();
//Emitの設定。
const emit = defineEmits<Emits>();
//このコンポーネント内で利用するポイント数のテンプレート変数。
// const localPoints = ref(props.points);
//Propsのnoteを加工する算出プロパティ。
const localNote = computed((): string => {
  let localNote = props.note;
  if (localNote == undefined) {
    localNote = "--";
  }
  return localNote;
});
//［ポイント加算］ボタンをクリックしたときのメソッド。
// const pointUp = (): void => {
//   localPoints.value++;
// };
const pointUp = (): void => {
  emit("incrementPoint", props.id);
};
</script>

<template>
  <section class="box">
    <h4>{{ name }}さんの情報</h4>
    <dl>
      <div class="box-in">
        <dt>ID</dt>
        <dd>{{ id }}</dd>
      </div>
      <div class="box-in">
        <dt>名前</dt>
        <dd>{{ name }}</dd>
      </div>
      <div class="box-in">
        <dt>メールアドレス</dt>
        <dd>{{ email }}</dd>
      </div>
      <div class="box-in">
        <dt>保有ポイント</dt>
        <!-- <dd>{{ localPoints }}</dd> -->
        <dd>{{ points }}</dd>
      </div>
      <div class="box-in">
        <dt>備考</dt>
        <dd>{{ localNote }}</dd>
      </div>
    </dl>
    <button @click="pointUp">ポイント追加</button>
  </section>
</template>

<style lang="scss" scoped>
.box {
  background-color: #fffcf2;
  padding: 20px;
  flex: 1;
  .box-in {
    display: flex;
    dt {
      width: 100px;
    }
  }
}
</style>
