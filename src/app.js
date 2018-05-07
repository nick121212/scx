import { Provider } from './libs/weapp-redux.js';
import { store } from './store.js';
import { proxy } from './pages/modelproxy/index';

let appConfig = {
     onLaunch: () => {
        wx.removeStorageSync('cookie');
    },
    globalData: {
        myinfoopentime: 0,
        orderpageopentimes: 0,
        version:2
        
    },
    wxPromisify: (fn) => {
        return (obj = {}) => {
            return new Promise((resolve, reject) => {
                obj.success = (res) => {
                    resolve(res);
                };
                obj.fail = (res) => {
                    reject(res);
                };

                fn(obj);
            });
        };
    }


};

App(Provider(store)(appConfig));
