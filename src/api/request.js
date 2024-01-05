import request from "../utils/axios";
//对axios的二次封装，节流作用
let myRequest = (() => {
  let mem = new Map();
  let hasRequest = [];
  return (config) => {
    let url = config.url;
    if (mem.has(url)) {
      return Promise.resolve(mem.get(url));
    } else {
      if (hasRequest.indexOf(url) !== -1) {
        return Promise.reject({ msg: "请求已发送，请勿多次请求" });
      }
      hasRequest.push(url);
      return request({
        ...config,
      }).then((res) => {
        hasRequest = hasRequest.filter((item) => {
          return item != url;
        });
        mem.set(url, res);
        return res;
      });
    }
  };
})();
export { myRequest as request, request as initRequest };
