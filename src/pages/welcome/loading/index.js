import { loading } from './containers/index';
import { usrbaseinfo } from '../../mycenter/baseinfo/containers';

let pageConfig = Object.assign({}, {
    async onLoad() {
        this.doIsLogin(this.doGetUsrBaseInfoData);
    },

  
}, {});

Page(loading(usrbaseinfo(pageConfig)));
