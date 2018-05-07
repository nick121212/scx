import reduceReducers from 'reduce-reducers';
import { combineReducers } from 'redux';

import { reducers } from './pages/index/reducers';
import { reducers as article } from './pages/article/reducers';
import { reducers as orders } from './pages/order/reducers';
import { reducers as usrbaseinfo } from './pages/mycenter/baseinfo/reducers';
import { reducers as union } from './pages/mycenter/alliance/reducers';
import { reducers as benefitinfo } from './pages/mycenter/benefit/reducers';
import { reducers as loading } from './pages/welcome/loading/reducers';
import { reducers as checkinfo } from './pages/welcome/baseinfo/reducers';
import { reducers as loginunion } from './pages/welcome/joinunion/reducers';
import { reducers as loginbenefit } from './pages/welcome/benefit/reducers'
import { reducers as login } from './pages/welcome/login/reducers';
import { reducers as myinfo } from './pages/mycenter/myinfo/reducers';
import { reducers as settings } from './pages/mycenter/settings/reducers';
import { reducers as articlelist } from './pages/articlelist/reducers';
import { reducers as articlebriefinfo } from './pages/articlebriefinfo/reducers';
import { reducers as vip } from './pages/vip/reducers';
import { reducers as oncebuy } from './pages/oncebuy/reducers';
import { reducers as pay } from './pages/pay/reducers';
import { reducers as dingyuelist } from './pages/dingyuelist/reducers';
import { reducers as qingbaolist } from './pages/qingbaolist/reducers';
import { reducers as qingbaobriefinfo } from './pages/qingbaobriefinfo/reducers';
import { reducers as qingbaoissue } from './pages/qingbaoissue/reducers'
import { reducers as qingbaodetail } from './pages/qingbaodetail/reducers'
import {reducers as payconfirm} from './pages/payconfirm/reducers'
export const getRootReducer = () => {
    const appReducer = reduceReducers(
        combineReducers({
            home: reducers,
            article: article,
            orders: orders,
            usrbaseinfo: usrbaseinfo,
            union: union,
            benefitinfo: benefitinfo,
            login: login,
            loading: loading,
            checkinfo: checkinfo,
            loginunion: loginunion,
            loginbenefit: loginbenefit,
            myinfo: myinfo,
            settings: settings,
            articlelist: articlelist,
            articlebriefinfo: articlebriefinfo,
            vip: vip,
            oncebuy: oncebuy,
            pay: pay,
            dingyuelist: dingyuelist,
            qingbaolist: qingbaolist,
            qingbaobriefinfo: qingbaobriefinfo,
            qingbaoissue: qingbaoissue,
            qingbaodetail:qingbaodetail,
            payconfirm:payconfirm
        })
    );

    return combineReducers({ app: appReducer });
};
