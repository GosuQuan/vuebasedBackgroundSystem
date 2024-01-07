import { MockMethod } from "vite-plugin-mock";
import ADMIN from "../global.config";
const validateLogin = (obj) => {
  const { username, password } = obj;
  if (
    username == String(ADMIN.ADMIN_NAME) &&
    password == String(ADMIN.ADMIN_PWD)
  )
    return true;
};
const mock: Array<MockMethod> = [
  {
    // 接口路径
    url: "/login",
    // 接口方法
    method: "post",
    // 返回数据
    response: (req) => {
      if (validateLogin(req.body))
        return {
          status: 200,
          message: "success",
          data: "登录成功,即将跳转.",
        };
      else return { status: 203, message: "failed", data: "登录失败" };
    },
  },
  {
    url: "/api/routes",
    method: "get",
    response: () => {
      // 路由
      const routes = [
        {
          path: "/PageOne",
          name: "PageOne",
          component: "PageOne.vue",
        },
        {
          path: "/PageTwo",
          name: "PageTwo",
          component: "PageTwo.vue",
        },
        {
          path: "/PageThree",
          name: "PageThree",
          component: "PageThree.vue",
        },
      ];

      return {
        status: 200,
        message: "success",
        data: routes,
      };
    },
  },
];

export default mock;
