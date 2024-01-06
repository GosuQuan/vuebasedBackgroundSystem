import { RouteRecordRaw } from "vue-router";

// import Login from '../Login'
export const routes: RouteRecordRaw = {
  path: "/login",
  name: "Login",
  component: () => {
    import("../Login.vue");
  },
  meta: {
    title: "登录",
  },
};
