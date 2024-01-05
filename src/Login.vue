<template>
  <div class="container">
    <a-form
      class="login-container"
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{
        span: 16,
      }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <h2>后台登录</h2>
      <a-form-item
        class="form-input"
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
        class="form-input"
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ offset: 6, span: 16 }">
        <a-checkbox v-model:checked="formState.remember">记住我</a-checkbox>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 6, span: 16 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import { login } from "./api/user";
import { LoginParams } from "./api/userModel/userModel";

import { message } from "ant-design-vue";

const formState = reactive<LoginParams>({
  username: "",
  password: "",
});
// const errmsg = (msg: string) => {
//   message.error(msg);
// };
const onFinish = (values: LoginParams) => {
   login(values);
  // errmsg(res.data);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>
<style scoped>
.container {
  font-family: Arial, sans-serif;
  background-color: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}
.login-container {
  background-color: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.login-container h2 {
  color: #5e5e5e;
}
.form-input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;

  border-radius: 4px;
  box-sizing: border-box;
}
</style>
