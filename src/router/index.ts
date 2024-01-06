import { App } from "vue";
import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import { routes } from "./login";
export function setupRouter(app: App) {
  app.use(router);
  //   createRouterGuards(router);
}
export const constantRouter: RouteRecordRaw[] = [routes];

const router = createRouter({
  history: createWebHistory(),
  routes: constantRouter,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});
