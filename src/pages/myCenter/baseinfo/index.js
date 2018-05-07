

import { usrbaseinfo } from './containers/index';
const app = getApp();
let pageConfig = Object.assign({
    onLoad(options) {
        this.doGetUsrBaseInfoData();
    }
});
Page(usrbaseinfo(pageConfig));