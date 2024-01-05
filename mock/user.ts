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
      else return { status: 401, message: "failed", data: "登录失败" };
    },
  },
];

export default mock;
