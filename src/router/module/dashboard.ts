export const dashboard_router = {
  path: "/dashboard",
  name: "Dashboard",
  component: () => import("@/views/Pages/DashBoard.vue"),
  // redirect: "/Home",/
  meta: {
    title: "仪表板",
  },
};
