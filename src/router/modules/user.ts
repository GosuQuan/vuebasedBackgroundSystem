import { RouteRecordRaw } from "vue-router";

const routeName = "UserManagement";
const userRoutes: RouteRecordRaw = {
  path: "/user",
  name: routeName,
  meta: {
    title: "用户管理",
  },
  component: import("@/views/userManage/userManage.vue"),
  //   children: [
  //     {
  //       path: "console",
  //       name: `${routeName}_console`,
  //       meta: {
  //         title: "主控台",
  //         permissions: ["dashboard_console"],
  //         affix: true,
  //       },
  //       component: () => import("@/views/dashboard/console/console.vue"),
  //     },
  //   ],
};

export default userRoutes;
