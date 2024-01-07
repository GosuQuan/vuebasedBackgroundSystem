import axios from "axios";
import webConfig from "../../global.config";
import md5 from "js-md5";
import { message } from "ant-design-vue";
//加密

//基本配置
let request = axios.create({
  baseUrl: "http://localhost:5173",
  timeout: 30 * 1000,
  responseType: "json",
  headers: {
    a: 123,
  },
});

const resultSuccess = (msg) => {
  message.success(msg);
};
const errmsg = (msg) => {
  message.error(msg);
};

request.interceptors.request.use(
  //请求方拦截，配置文件处理，请求头设置token和密钥
  (config) => {
    let whiteList = webConfig.whiteListApi;
    let url = config.url;
    let token = localStorage.getItem("token");
    if (whiteList.indexOf(url) === -1 && token) {
      config.headers.token = token;
    }
    config.data = config.params;
    let _secret = md5(webConfig.secretId + new Date());
    config.headers.secret = _secret;
    return config;
  },
  (err) => {
    return Promise.reject(new Error(err));
  }
);

//
request.interceptors.response.use(
  //res处理
  (res) => {
    const status = res.data.status || 200;
    const msg = res.data.message || "未知错误";
    if (status == 401) {
      //路由跳转
      errmsg("登录失败");
      return Promise.reject(new Error(msg));
    }
    if (status !== 200) {
      let msgString = "错误码" + status + " " + msg;
      errmsg(msgString);
      return Promise.reject(new Error(msg));
    }
    resultSuccess("成功登录");
    return res;
  },
  (err) => {
    // alert(err);
    console.log("失败");
    return Promise.reject(new Error(err));
  }
);
export default request;
