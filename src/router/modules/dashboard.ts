import { RouteRecordRaw } from "vue-router";

const routeName = "Dashboard";
const controlRoutes: RouteRecordRaw = {
  path: "/dashboard",
  name: routeName,
  redirect: "/dashboard/console",
  meta: {
    title: "仪表板",
  },
  children: [
    {
      path: "console",
      name: `${routeName}_console`,
      meta: {
        title: "主控台",
        permissions: ["dashboard_console"],
        affix: true,
      },
      component: () => import("@/views/dashboard/console/console.vue"),
    },
  ],
};

export default controlRoutes;
