import { initRequest } from "./request";
import { LoginParams } from "./userModel/userModel";
export interface BasicResponseModel<T = any> {
  code: number;
  message: string;
  result: T;
}

export interface BasicPageParams {
  pageNumber: number;
  pageSize: number;
  total: number;
}

/**
 * @description: 获取用户信息
 */
export function getUserInfo() {
  return initRequest({
    url: "/admin_info",
    method: "get",
  });
}

/**
 * @description: 用户登录
 */
export function login(params: LoginParams) {
  return initRequest<BasicResponseModel>(
    {
      url: "/login",
      method: "POST",
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}
