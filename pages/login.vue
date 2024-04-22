<!-- @format -->

<script setup lang="ts">
import type { User } from "@/interfaces";

definePageMeta({
  layout: "loggedout",
});

const loginId = ref("");
const password = ref("");
const pending = ref(false);
//エンドポイント側でエラーがないことを表すテンプレート変数。
const noServerError = ref(true);
//認証が失敗したことを表すテンプレート変数。
const authFailed = ref(false);
const onLoginButtonClick = async (): Promise<void> => {
  pending.value = true;
  authFailed.value = false;
  noServerError.value = true;
  const asyncData = await useFetch("/user-management/auth", {
    method: "POST",
    body: {
      loginId: loginId.value,
      password: password.value,
    },
  });
  //エンドポイント側の処理が成功したならば…
  if (
    asyncData.error.value == null &&
    asyncData.data.value != null &&
    asyncData.data.value.result == 1
  ) {
    //認証が通ったならば…
    if (asyncData.data.value.token != "" && asyncData.data.value.user != null) {
      //ログインユーザ情報をクッキーに格納。
      const loginUserCookie = useCookie<User | null>("loginUser");
      loginUserCookie.value = asyncData.data.value.user;
      //アクセストークン文字列をクッキーに格納。
      const loginTokenCookie = useCookie<string | null>("loginToken");
      loginTokenCookie.value = asyncData.data.value.token;
      await navigateTo("/middleware");
    }
    //認証が通らなかった場合…
    else {
      pending.value = false;
      authFailed.value = true;
    }
  }
  //エンドポイント側の処理が失敗した場合…
  else {
    pending.value = false;
    noServerError.value = false;
  }
};
</script>

<template>
  <h1>ログイン</h1>
  <p v-if="pending">ログイン中…</p>
  <template v-else>
    <p v-if="authFailed">ログインIDまたはパスワードが違います。</p>
    <p v-if="noServerError">IDとパスワードを入力してログインしてください。</p>
    <p v-else>
      サーバ処理中に障害が発生しました。もう一度ログインを行なってください。
    </p>
    <form v-on:submit.prevent="onLoginButtonClick">
      <div class="box">
        <dl>
          <dt>ID</dt>
          <dd><input type="text" v-model="loginId" required /></dd>
          <dt>パスワード</dt>
          <dd><input type="password" v-model="password" required /></dd>
        </dl>
      </div>
      <button class="btn btn-outline-primary" type="submit">ログイン</button>
    </form>
  </template>
</template>
