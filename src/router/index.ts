import { App } from "vue";
import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import { LoginRoutes } from "./login";
import controlRoutes from "./modules/dashboard";
import userRoutes from "./modules/user";
// const routeModuleList: RouteRecordRaw[] = Object.keys(modules).reduce(
//   (list, key) => {
//     const mod = modules[key].default ?? {};
//     const modList = Array.isArray(mod) ? [...mod] : [mod];
//     console.log([...list, ...modList]);
//     return [...list, ...modList];
//   },
//   []
// );
export function setupRouter(app: App) {
  app.use(router);
  // createRouterGuards(router);
}
// export const asyncRoutes = [...routeModuleList];
const base_router: RouteRecordRaw = {
  path: "/",
  name: "Root",
  redirect: "/login",
  component: () => import("../views/Pages/Page1.vue"),
  // redirect: "/Home",/
  meta: {
    title: "登录",
  },
};
export const constantRouter: RouteRecordRaw[] = [
  userRoutes,
  LoginRoutes,
  base_router,
  controlRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes: constantRouter,
  strict: true,
});
