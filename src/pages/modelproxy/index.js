import { modelProxy } from 'modelproxy';

import { WxAppEngine } from './engine';
import inters from './config/interface';

const proxy = new modelProxy.Proxy();
const engine = new WxAppEngine();

/**
 * 获取服务器回话cookie
 */
engine.use(async (ctx, next) => {
    let { settings = {} } = ctx;
    let { header = {} } = settings;


    if (!wx.getStorageSync('cookie')) {
        //会话过期，重新获取code传给服务器
        const app = getApp();
        let loginRes = await app.wxPromisify(wx.login)({});
        wx.setStorageSync('cookie', "__GET__");
        let result = await proxy.execute("/deploy/isLogin", {
            params: {
                code: loginRes.code,
                version: app.globalData.version
            }
        });
        wx.setStorageSync('cookie', result.header['Set-Cookie']);
    }
    header['cookie'] = wx.getStorageSync('cookie');


    settings.header = header;
    ctx.settings = settings;

    await next();
});

engine.init();

/**
 * 1. 判断是否有返回值，没有则抛出异常
 * 2. 判断http的返回码，如果不是200则抛出异常
 * 3. 判断返回数据中的code，如果是401，则重新登录
 * 4. 判断返回数据中的code，如果不是200，则抛出异常
 * 5. 如果接口的头中有set-cookie，则缓存头信息到本地
 */
engine.use(async (ctx, next) => {
    // console.group(`调用接口信息：${ctx.instance.key}`, new Date());
    // console.info("ctc.key is ,ctx.result is ..", ctx.instance.key, ctx.result);
    // console.groupEnd();

    if (!ctx.result) {
        throw new Error("接口没有返回值！");
    }
    if (ctx.result.statusCode != 200) {
        throw new Error(`状态码错误（${ctx.result.statusCode}）`);
    }

    if (ctx.result.data.code == 401) {
        wx.removeStorageSync('cookie');
    }

    if (ctx.result.data.code != 200) {
        throw new Error(ctx.result.data.message);
    }
    await next();
});

proxy.loadConfig(inters, { engine: "we", state: "local" });
proxy.addEngines({
    "we": engine
});

export { proxy };