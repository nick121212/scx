import { modelProxy } from 'modelproxy';
import URLSearchParams from 'url-search-params';

export class WxAppEngine extends modelProxy.BaseEngine {
    constructor() {
        super();
    }

    init() {
        this.use(async (ctx, next) => {

            const app = getApp(); //  eslint-disable-line no-undef
            const searchParams = new URLSearchParams();
            const { instance, executeInfo = {}, settings = {} } = ctx;
            let { header = {} } = settings;

            executeInfo.params && Object.keys(executeInfo.params).forEach((key) => {
                executeInfo.params[key] !== undefined && searchParams.append(key, executeInfo.params[key]);
            });

            ctx.result = await app.wxPromisify(wx.request)({
                url: this.getFullPath(instance, executeInfo) + (searchParams.toString() ? "?" + searchParams.toString() : ""),
                data: executeInfo.data,
                header: header || {},
                method: instance.method
            });
            await next();
        });
    }

    async proxy(instance, options) {


        const fn = this.callback(() => { });
        const ctx = {
            instance: instance,
            executeInfo: options,
        };
        
        await fn(ctx);
        if (ctx.isError) {
            if (ctx.result.data.code != 432 && ctx.result.data.code != 401) {
                wx.showToast({
                    title: ctx.err.message,
                    icon: "error"
                });
            }


            throw ctx.err;
        }
        return ctx.result;

    }
}