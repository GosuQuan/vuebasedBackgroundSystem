import { RouteRecordRaw } from "vue-router";
import Login from "@/views/login/Login.vue";

// import Login from '../Login'
export const LoginRoutes: RouteRecordRaw = {
  path: "/login",
  name: "Login",
  component: Login,
  meta: {
    title: "登录",
  },
};
