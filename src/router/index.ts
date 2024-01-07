import { App } from "vue";
import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import { LoginRoutes } from "./login";
export function setupRouter(app: App) {
  app.use(router);
  //   createRouterGuards(router);
}
const base_router = {
  path: "/",
  name: "Manage",
  component: () => import("../views/Pages/Page1.vue"),
  // redirect: "/Home",/
  meta: {
    title: "登录",
  },
};
const dashboard_router = {
  path: "/dashboard",
  name: "Manage",
  component: () => import("../views/Pages/DashBoard.vue"),
  // redirect: "/Home",/
  meta: {
    title: "仪表板",
  },
};
export const constantRouter: RouteRecordRaw[] = [LoginRoutes, base_router,dashboard_router];

const router = createRouter({
  history: createWebHistory(),
  routes: constantRouter,
  strict: true,
});
